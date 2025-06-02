import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';

function MealPlan(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>🍴 Meal Plan June 2025 | ProteinShaikh</title>
            </Helmet>
            <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-primary mb-6">🍴 Meal Plan - June 2025</h1>

                <h2 className="text-2xl font-semibold mb-2">🌅 Morning</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>1 cup Indian Milk Tea with Stevia</li>
                    <li className="ml-4">– Tea with low-fat milk and stevia (sugar free)</li>
                    <li>🧮 <strong>Calories: ~95 kcal</strong></li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">🍽️ Lunch</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>200g chicken breast</li>
                    <li>150g cooked white rice</li>
                    <li>100g low-fat curd</li>
                    <li>Cucumber salad (low-calorie filler)</li>
                    <li>Optional: Diet Coke/Pepsi</li>
                    <li>🧮 <strong>Calories: ~600 kcal</strong></li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">☕ Evening Snack</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Option 1: 1 cup Milk Tea with Stevia (same as morning)</li>
                    <li>Option 2: Black Coffee (no sugar)</li>
                    <li>🧮 <strong>Calories: 5–95 kcal (choose one)</strong></li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">🌙 Dinner</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>8 egg whites</li>
                    <li>2 whole eggs</li>
                    <li>150g cooked white rice</li>
                    <li><strong>OR</strong></li>
                    <li>3 rice paper wraps (~20 kcal each)</li>
                    <li>Cucumber salad (low-calorie filler)</li>
                    <li>Optional: Diet Coke/Pepsi</li>
                    <li>🧮 <strong>Calories: ~380 to ~520 kcal (based on rice or rice paper)</strong></li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">🌛 Before Bed</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Golden Milk (Haldi Doodh)</li>
                    <li>🧮 <strong>Calories: ~95 kcal</strong></li>
                </ul>
            </section>
        </>
    );
}

export default MealPlan;
