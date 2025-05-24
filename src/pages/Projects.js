import React from 'react';

function Projects() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      {/* Project Title */}
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-heading font-bold text-primary mb-2">From Dev to Defined</h1>
        <p className="text-gray-500 text-sm italic">My 17 kg transformation through calorie deficit</p>
      </div>

      {/* Weight Loss Article */}
      <article className="bg-white p-6 rounded-lg shadow-lg leading-relaxed">
        <h3 className="text-2xl font-bold mb-4 text-primary">🔥 How I Lost 17 kg in 4 Months with Calorie Deficit</h3>

        <p className="mb-4">
          In early 2024, I weighed 89 kg. Tired of low energy and discomfort, I committed to transforming my body with
          no pills, no shortcuts — just science, simplicity, and structure.
        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2 text-accent">💡 Daily Strategy</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Calorie Deficit:</strong> 1800–2000 kcal/day with <a href="https://www.myfitnesspal.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MyFitnessPal</a></li>
          <li><strong>Steps:</strong> 8,000–10,000 daily to stay active and improve NEAT</li>
          <li><strong>Strength Training:</strong> 3–4x/week using <a href="https://musclewiki.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MuscleWiki</a> to plan exercises</li>
          <li><strong>Sunlight:</strong> 15 minutes of natural light daily for better circadian rhythm and mood</li>
          <li><strong>Hydration:</strong> ~4 liters of water/day — no sugary drinks!</li>
        </ul>

        <h4 className="text-xl font-semibold mt-6 mb-2 text-accent">🥗 My Typical Meals</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Breakfast:</strong> Tea with stevia + low-fat milk, Greek yogurt</li>
          <li><strong>Lunch:</strong> Grilled chicken breast + white rice + cucumber + steamed veggies</li>
          <li><strong>Snack:</strong> Boiled eggs, peanut butter toast, or low-cal popcorn</li>
          <li><strong>Dinner:</strong> Chicken stir-fry or paneer with a light carb like rice/roti</li>
          <li><strong>Cheat Meals:</strong> Once a week — Indian sweets or dark chocolate, guilt-free 🍫</li>
        </ul>

        <p className="mb-4">
          Tracking my meals made the biggest difference. I used <a href="https://www.myfitnesspal.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MyFitnessPal</a> to log every bite and
          understand macros. For workouts, <a href="https://musclewiki.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MuscleWiki</a> became my exercise encyclopedia.
        </p>

        <figure className="my-6 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/weightloss-progress.jpg`}
            alt="Weight loss progress"
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
          <figcaption className="text-sm text-gray-500 mt-2">My transformation: 89 kg → 72 kg (Jan–May 2025)</figcaption>
        </figure>

        <h4 className="text-xl font-semibold mt-6 mb-2 text-accent">🔁 Lessons That Worked for Me</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Consistency beats perfection</strong> — every meal doesn’t need to be perfect, but aim for balance.</li>
          <li><strong>Track your inputs</strong> — use apps and spreadsheets to stay on top of your food and workouts.</li>
          <li><strong>Sleep, hydration, sunlight</strong> — the underrated power trio.</li>
          <li><strong>Cheat meals ≠ failure</strong> — they are strategy when used right.</li>
        </ul>

        <p className="text-lg font-semibold text-accent">
          Build a routine. Track honestly. Respect the process. You’ll transform — one smart decision at a time. 💪
        </p>
      </article>
    </section>
  );
}

export default Projects;
