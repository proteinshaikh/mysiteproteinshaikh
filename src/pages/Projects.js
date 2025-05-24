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
                <h3 className="text-2xl font-bold mb-4 text-primary">🔥 How I Lost 17 kg in 4 Months with Calorie
                    Deficit</h3>

                <p className="mb-4">
                    Back in early 2024, I weighed 89 kg. I wasn’t happy with how I felt physically and decided to commit
                    to
                    changing my lifestyle. I didn't opt for crash diets or expensive supplements — just consistent
                    calorie
                    deficit, walking, and strength training.
                </p>

                <p className="mb-4">
                    A calorie deficit means you burn more calories than you consume. I used an app to track my daily
                    food intake,
                    aiming for around 1800–2000 kcal/day depending on activity. I ate plenty of protein, fiber-rich
                    foods, and
                    made sure I was getting enough water.
                </p>

                <p className="mb-4">
                    I also walked 8,000–10,000 steps daily and worked out 3–4 times a week. I focused on compound lifts
                    and did
                    minimal cardio. The key was consistency and patience.
                </p>

                <p className="mb-4">
                    After 4 months of sticking to this plan, I dropped from 89 kg to 72 kg. My energy levels increased,
                    my sleep
                    improved, and I felt a renewed sense of self-confidence.
                </p>

                <figure className="my-6 text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/weightloss-progress.jpg`}
                        alt="Weight loss progress"
                        className="w-full max-w-md mx-auto rounded-lg shadow-md"
                    />
                    <figcaption className="text-sm text-gray-500 mt-2">My progress from 89 kg to 72 kg (Jan–May 2024)
                    </figcaption>
                </figure>

                <p className="mb-4">
                    My advice? Start small, be realistic, and track your progress. Don’t chase fast results — aim for
                    sustainability.
                </p>

                <p className="text-lg font-semibold text-accent">
                    If I can do it, so can you. 💪
                </p>
            </article>
        </section>
    );
}

export default Projects;
