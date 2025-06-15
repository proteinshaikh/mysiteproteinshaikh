import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Constants & look-ups
const activityLevels = [
    { key: "sedentary", label: "Sedentary", factor: 1.2 },
    { key: "light", label: "Light (1–3×/wk)", factor: 1.375 },
    { key: "moderate", label: "Moderate (3–5×/wk)", factor: 1.55 },
    { key: "active", label: "Active (6–7×/wk)", factor: 1.725 },
    { key: "athlete", label: "Athlete / physical job", factor: 1.9 },
] as const;

const bmiTable = [
    { min: 0, max: 18.4, label: "Underweight" },
    { min: 18.5, max: 24.9, label: "Normal" },
    { min: 25, max: 29.9, label: "Overweight" },
    { min: 30, max: 34.9, label: "Obesity I" },
    { min: 35, max: 39.9, label: "Obesity II" },
    { min: 40, max: Infinity, label: "Obesity III" },
] as const;

const bmiCat = (v: number) => bmiTable.find((r) => v >= r.min && v <= r.max)?.label ?? "—";

// Utility math helpers
const round = (n: number, d = 1) => Math.round(n * 10 ** d) / 10 ** d;
const bmi = (w: number, hCm: number) => w / ((hCm / 100) ** 2);
const bmr = (w: number, h: number, age: number, sex: "male" | "female") => {
    const base = 10 * w + 6.25 * h - 5 * age;
    return sex === "male" ? base + 5 : base - 161;
};
const navyFat = (
    sex: "male" | "female",
    h: number,
    neck: number,
    waist: number,
    hip: number | null
) => {
    if (!neck || !waist || (sex === "female" && !hip)) {
        console.warn("Invalid body fat measurements: neck, waist, or hip missing");
        return null;
    }
    return sex === "male"
        ? 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(h)) - 450
        : 495 /
          (1.29579 - 0.35004 * Math.log10(waist + (hip ?? 0) - neck) + 0.221 * Math.log10(h)) -
          450;
};

// Types & initial state
interface State {
    name: string;
    weight: number;
    height: number;
    age: number;
    sex: "male" | "female";
    activity: typeof activityLevels[number]["key"];
    deficit: number;
    neck: number;
    waist: number;
    hip: number;
    goalWeight: number;
    goalFat: number;
    goalBMI: number;
}

const init: State = {
    name: "",
    weight: 70,
    height: 175,
    age: 30,
    sex: "male",
    activity: "moderate",
    deficit: 500,
    neck: 38,
    waist: 80,
    hip: 95,
    goalWeight: 65,
    goalFat: 15,
    goalBMI: 22,
};

// Main component
const FitnessCalculator: React.FC = () => {
    const [state, setState] = useState<State>(init);
    const reportRef = useRef<HTMLDivElement>(null);

    const updateState = (key: keyof State, value: number | string) =>
        setState((prev) => ({ ...prev, [key]: value }));

    // Current metrics
    const activity = activityLevels.find((l) => l.key === state.activity)!;
    const currentBMI = bmi(state.weight, state.height);
    const currentBMR = bmr(state.weight, state.height, state.age, state.sex);
    const currentTDEE = currentBMR * activity.factor;
    const targetCalories = Math.max(currentTDEE - state.deficit, 1200);
    const weeklyLoss = round((state.deficit * 7) / 7700, 2);
    const fatPctNow = navyFat(state.sex, state.height, state.neck, state.waist, state.sex === "female" ? state.hip : null);
    const leanMassNow = fatPctNow ? round(state.weight * (1 - fatPctNow / 100), 1) : null;

    // Goal metrics & projection
    const goalBMI = state.goalBMI || bmi(state.goalWeight, state.height);
    const goalWeight = state.goalWeight || round(goalBMI * (state.height / 100) ** 2);
    const weightChange = round(state.weight - goalWeight);
    const estimatedWeeks = weeklyLoss ? Math.ceil(Math.abs(weightChange) / weeklyLoss) : "—";

    // PDF generation
    const generatePDF = async () => {
        if (!reportRef.current) {
            console.error("Report reference is null");
            return;
        }
        try {
            const canvas = await html2canvas(reportRef.current, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save(`${state.name || "health"}-report.pdf`);
        } catch (error) {
            console.error("Failed to generate PDF:", error);
            alert("Error generating PDF. Please try again.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Health Report Generator</title>
            </Helmet>

            <div className="min-h-screen bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
                    {/* Input Form */}
                    <div className="lg:w-1/2 bg-white rounded-lg shadow p-6 flex flex-col max-h-[calc(100vh-4rem)]">
                        <div className="sticky top-0 bg-white z-10 pb-4 border-b">
                            <h2 className="text-2xl font-bold text-gray-800">Enter Your Details</h2>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <TextInput
                                    label="Name"
                                    value={state.name}
                                    onChange={(v) => updateState("name", v)}
                                    spanFull
                                />
                                <NumberInput
                                    label="Weight (kg)"
                                    value={state.weight}
                                    onChange={(v) => updateState("weight", v)}
                                    step={0.1}
                                />
                                <NumberInput
                                    label="Height (cm)"
                                    value={state.height}
                                    onChange={(v) => updateState("height", v)}
                                />
                                <NumberInput
                                    label="Age"
                                    value={state.age}
                                    onChange={(v) => updateState("age", v)}
                                />
                                <SelectInput
                                    label="Sex"
                                    value={state.sex}
                                    onChange={(v) => updateState("sex", v)}
                                    options={[["male", "Male"], ["female", "Female"]]}
                                />
                                <SelectInput
                                    label="Activity Level"
                                    value={state.activity}
                                    onChange={(v) => updateState("activity", v)}
                                    options={activityLevels.map((l) => [l.key, l.label])}
                                    spanFull
                                />
                                <NumberInput
                                    label="Calorie Deficit (kcal)"
                                    value={state.deficit}
                                    onChange={(v) => updateState("deficit", v)}
                                    step={50}
                                    spanFull
                                />
                                <details className="col-span-2">
                                    <summary className="font-medium text-blue-600 cursor-pointer">
                                        Body Fat Measurements
                                    </summary>
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <NumberInput
                                            label="Neck (cm)"
                                            value={state.neck}
                                            onChange={(v) => updateState("neck", v)}
                                        />
                                        <NumberInput
                                            label="Waist (cm)"
                                            value={state.waist}
                                            onChange={(v) => updateState("waist", v)}
                                        />
                                        {state.sex === "female" && (
                                            <NumberInput
                                                label="Hip (cm)"
                                                value={state.hip}
                                                onChange={(v) => updateState("hip", v)}
                                            />
                                        )}
                                    </div>
                                </details>
                                <NumberInput
                                    label="Goal Weight (kg)"
                                    value={state.goalWeight}
                                    onChange={(v) => updateState("goalWeight", v)}
                                    step={0.1}
                                />
                                <NumberInput
                                    label="Goal Fat %"
                                    value={state.goalFat}
                                    onChange={(v) => updateState("goalFat", v)}
                                />
                                <NumberInput
                                    label="Goal BMI"
                                    value={state.goalBMI}
                                    onChange={(v) => updateState("goalBMI", v)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Report Preview */}
                    <div className="lg:w-1/2 bg-white rounded-lg shadow p-6 flex flex-col max-h-[calc(100vh-4rem)]">
                        <div className="sticky top-0 bg-white z-10 pb-4 border-b">
                            <h2 className="text-2xl font-bold text-gray-800">Health Report Preview</h2>
                            <button
                                onClick={generatePDF}
                                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                            >
                                Download Health Report PDF
                            </button>
                        </div>
                        <div ref={reportRef} className="flex-1 overflow-y-auto pr-2 text-gray-800 font-sans text-sm">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold">Health & Fitness Report</h1>
                                <p className="text-lg mt-2">Prepared for: {state.name || "Patient"}</p>
                                <p className="text-sm">Date: {new Date().toLocaleDateString()}</p>
                            </div>

                            <section className="mb-6">
                                <h2 className="text-xl font-semibold border-b">Personal Information</h2>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <ReportItem label="Age" value={`${state.age} years`} />
                                    <ReportItem label="Sex" value={state.sex} />
                                    <ReportItem label="Height" value={`${state.height} cm`} />
                                    <ReportItem label="Weight" value={`${state.weight} kg`} />
                                </div>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl font-semibold border-b">Current Health Metrics</h2>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <ReportItem label="BMI" value={`${round(currentBMI)} (${bmiCat(currentBMI)})`} sub="kg/m²" />
                                    <ReportItem label="Body Fat %" value={fatPctNow ? round(fatPctNow) : "N/A"} sub="%" />
                                    <ReportItem label="Lean Mass" value={leanMassNow ? leanMassNow : "N/A"} sub="kg" />
                                    <ReportItem label="BMR" value={round(currentBMR)} sub="kcal" />
                                    <ReportItem label="TDEE" value={round(currentTDEE)} sub="kcal" />
                                    <ReportItem label="Activity Level" value={activity.label} />
                                </div>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl font-semibold border-b">Nutrition Plan</h2>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <ReportItem label="Calorie Deficit" value={state.deficit} sub="kcal" />
                                    <ReportItem label="Target Calories" value={round(targetCalories)} sub="kcal" />
                                    <ReportItem label="Estimated Weekly Loss" value={weeklyLoss} sub="kg" />
                                </div>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl font-semibold border-b">Goals</h2>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <ReportItem label="Goal Weight" value={goalWeight} sub="kg" />
                                    <ReportItem label="Goal BMI" value={`${round(goalBMI)} (${bmiCat(goalBMI)})`} sub="kg/m²" />
                                    <ReportItem label="Goal Fat %" value={state.goalFat} sub="%" />
                                    <ReportItem label="Weight Change" value={weightChange} sub="kg" />
                                    <ReportItem label="Estimated Time" value={estimatedWeeks} sub="weeks" />
                                </div>
                            </section>

                            <section className="mb-6">
                                <h2 className="text-xl font-semibold border-b">Explanations</h2>
                                <div className="mt-2 text-sm">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li><strong>BMI</strong>: Body Mass Index, calculated as weight (kg) ÷ height² (m²).</li>
                                        <li><strong>BMR</strong>: Basal Metabolic Rate (Mifflin-St Jeor), approximate resting calories burned daily.</li>
                                        <li><strong>TDEE</strong>: Total Daily Energy Expenditure, calculated as BMR × activity level.</li>
                                        <li><strong>Body Fat %</strong>: Estimated using the US Navy tape measurement method.</li>
                                        <li><strong>Lean Mass</strong>: Body weight minus fat mass, calculated as weight × (1 - fat %).</li>
                                        <li><strong>Target Calories</strong>: TDEE minus calorie deficit, guiding daily intake for weight goals.</li>
                                        <li><strong>Estimated Weekly Loss</strong>: Based on 7 × deficit (kcal) ≈ 1 kg change.</li>
                                    </ul>
                                </div>
                            </section>

                            <footer className="text-center text-xs mt-6">
                                <p>Generated by Health Report Generator</p>
                                <p>Consult a healthcare professional before starting any diet or exercise program.</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Reusable Components
interface TextInputProps {
    label: string;
    value: string;
    onChange: (v: string) => void;
    spanFull?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, spanFull }) => (
    <div className={spanFull ? "col-span-2" : ""}>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
);

interface NumberInputProps {
    label: string;
    value: number;
    onChange: (v: number) => void;
    step?: number;
    spanFull?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, step = 1, spanFull }) => (
    <div className={spanFull ? "col-span-2" : ""}>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="number"
            value={value}
            step={step}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
);

interface SelectInputProps {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: [string, string][];
    spanFull?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options, spanFull }) => (
    <div className={spanFull ? "col-span-2" : ""}>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
        >
            {options.map(([optVal, optLabel]) => (
                <option key={optVal} value={optVal}>
                    {optLabel}
                </option>
            ))}
        </select>
    </div>
);

interface ReportItemProps {
    label: string;
    value: string | number;
    sub?: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ label, value, sub }) => (
    <div className="flex justify-between">
        <span className="font-medium">{label}:</span>
        <span>
            {value}
            {sub && <span className="text-xs text-gray-500 ml-1">{sub}</span>}
        </span>
    </div>
);

export default FitnessCalculator;