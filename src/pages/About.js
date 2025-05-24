import React from 'react';

function About() {
  return (
    <section className="bg-background py-20 px-6 relative overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <img
          src="https://www.svgrepo.com/show/354113/code.svg"
          alt="Code graphic"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl relative z-10" data-aos="fade-up">
        <h2 className="text-4xl font-heading font-bold mb-6 text-primary">👋 About Me</h2>

        <p className="mb-4 text-lg leading-relaxed text-foreground">
          I'm <strong>Zeeshan — aka ProteinShaikh</strong>. A software developer who believes in writing clean code,
          lifting heavy weights, and investing with logic and long-term vision.
        </p>

        <p className="mb-4 text-foreground">
          Whether it’s building full-stack apps or breaking personal PRs at the gym, I love systems, strategies, and
          scaling both projects and people.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Fitness */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-accent mb-2">🏋️ My Fitness Code</h3>
            <p className="text-gray-700">
              Lost 17 kg using calorie deficit, strength training, and consistency. Fitness taught me discipline, patience,
              and how to push past limits.
            </p>
          </div>

          {/* Investing */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-primary mb-2">📈 My Financial Stack</h3>
            <p className="text-gray-700">
              I follow Buffett-style investing, automate my savings, and track everything like a data geek.
            </p>
          </div>
        </div>

        <div className="mt-10" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold text-accent mb-3">🌐 Why This Site?</h3>
          <p className="text-foreground mb-4">
            To share everything I learn. Dev wisdom, lifting strategies, and wealth principles. This is where code meets
            core — mental, physical, financial.
          </p>
          <p className="text-lg font-semibold text-primary">
            Thanks for visiting. Let’s grow together — code, lift, invest, repeat. 💪👨‍💻📈
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
