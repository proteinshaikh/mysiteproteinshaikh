import React from 'react';
import { Helmet } from 'react-helmet';

function DevToDefined() {
  return (
    <>
      <Helmet>
        <title>From Dev to Defined | ProteinShaikh</title>
      </Helmet>
      <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">💪 From Dev to Defined</h1>
        <p>In early 2025, I weighed 89 kg and felt sluggish. Tired of the extra weight and low energy, I decided to transform. No supplements, no fads — just calorie deficit, consistent training, and smart lifestyle changes. Here’s exactly how I lost 17 kg in 4 months and what you can learn from it.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🔥 Daily Strategy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Calorie Deficit:</strong> Ate 1800–2000 kcal/day using <a href="https://www.myfitnesspal.com" target="_blank" rel="noopener noreferrer">MyFitnessPal</a></li>
          <li><strong>Steps:</strong> Walked 8,000–10,000 steps daily to boost NEAT</li>
          <li><strong>Strength Training:</strong> Trained 3–4x/week using <a href="https://musclewiki.com/" target="_blank" rel="noopener noreferrer">MuscleWiki</a> to plan routines</li>
          <li><strong>Sunlight:</strong> 15 mins of daily sun improved mood and sleep</li>
          <li><strong>Hydration:</strong> ~4 liters of water a day — no sugary drinks!</li>
        </ul>
        <p>This routine gave me structure. I tracked everything and stayed consistent even when motivation dipped. Data made all the difference.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🥗 Typical Meals</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Breakfast:</strong> Tea with stevia + low-fat milk, Greek yogurt</li>
          <li><strong>Lunch:</strong> Grilled chicken breast, white rice, cucumber, steamed veggies</li>
          <li><strong>Snack:</strong> Boiled eggs, peanut butter toast, or popcorn</li>
          <li><strong>Dinner:</strong> Stir-fried chicken or paneer with rice/roti</li>
          <li><strong>Cheat Meals:</strong> Once a week — Indian sweets or dark chocolate 🍫</li>
        </ul>

        {/* Image beside text */}
        <div className="flex flex-col md:flex-row items-center gap-6 my-8">
          <div className="md:w-2/3">
            <p>
              Tracking my meals made the biggest difference. I used <a href="https://www.myfitnesspal.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MyFitnessPal</a> to log every bite and understand macros. For workouts, <a href="https://musclewiki.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MuscleWiki</a> became my exercise encyclopedia.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/weightloss-progress.jpg`}
              alt="Weight loss transformation"
              className="rounded-lg shadow-md w-full max-w-xs mx-auto"
            />
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              My transformation: 89 kg → 72 kg (Jan–May 2025)
            </figcaption>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🔁 Lessons That Worked for Me</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Consistency > Perfection</strong>: You don’t need to be perfect — just consistent.</li>
          <li><strong>Track Everything</strong>: Food, workouts, mood, hydration — the data shows patterns.</li>
          <li><strong>Sleep, Water, Sunlight</strong>: These 3 factors silently drive your energy and discipline.</li>
          <li><strong>Plan Cheat Meals</strong>: Make room for indulgence without guilt.</li>
        </ul>
        <p>This journey wasn’t about willpower. It was about making it easy to stay on track through habits and systems.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">⚠️ Challenges I Faced</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Hunger:</strong> I felt starved some days. <em>Fix</em>: High-protein foods and fiber helped a lot.</li>
          <li><strong>Low Energy:</strong> Early workouts felt weak. <em>Fix</em>: Ate carbs before workouts + slept better.</li>
          <li><strong>Temptations:</strong> Late-night cravings hit hard. <em>Fix</em>: Brushed teeth early to signal "kitchen closed."</li>
          <li><strong>Stalls:</strong> Weight didn’t always drop. <em>Fix</em>: Focused on weekly averages, not daily.</li>
        </ul>
        <p>I embraced flexibility. Some days weren’t perfect — but I always came back stronger the next.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🧠 What I Learned</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Start Slow:</strong> Don’t go all-in on day one. I made small, lasting changes weekly.</li>
          <li><strong>Build Identity:</strong> I stopped saying “I’m trying to lose weight” and started saying “I eat like an athlete.”</li>
          <li><strong>Systems Beat Motivation:</strong> Automate healthy choices. Track. Plan meals. Schedule workouts.</li>
          <li><strong>Cheat Meals Are Part of the Plan:</strong> I enjoyed food guilt-free and still lost fat.</li>
        </ul>
        <p>This wasn’t just a transformation of body — it was a shift in mindset. I learned to trust the process, not rush it.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🎯 Wrap-Up</h2>
        <p>From 89 kg to 72 kg — I didn’t follow a trendy diet or buy fancy supplements. I followed science, stayed consistent, and took ownership of my body. If I can do it while working full-time as a developer, so can you.</p>
        <p>Track your food. Train smart. Stay consistent. Your transformation is closer than you think. 💪</p>
      </section>
    </>
  );
}

export default DevToDefined;
