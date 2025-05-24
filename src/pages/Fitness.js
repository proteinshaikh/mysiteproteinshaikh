import React from 'react';

const fitnessTips = [
    {
        title: "Start with Compound Movements",
        content: "Focus on exercises like squats, deadlifts, and bench press to build overall strength efficiently.",
    },
    {
        title: "Track Your Progress",
        content: "Use apps or a journal to record your workouts and gradually increase intensity.",
    },
    {
        title: "Prioritize Sleep",
        content: "Aim for 7–9 hours of sleep per night to optimize recovery and muscle growth.",
    },
    {
        title: "Stay Hydrated",
        content: "Drink at least 2–3 liters of water daily to support metabolic processes and performance.",
    },
    {
        title: "Consistency is Key",
        content: "Make fitness a habit. Small, consistent efforts beat occasional intense workouts.",
    }
];

function Fitness() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">💪 Fitness Tips</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {fitnessTips.map((tip, idx) => (
                    <div key={idx} className="p-6 border border-gray-200 rounded shadow hover:shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-accent mb-2">{tip.title}</h3>
                        <p className="text-gray-700">{tip.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Fitness;
