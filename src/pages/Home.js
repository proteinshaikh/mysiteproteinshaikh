import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-background bg-wave bg-no-repeat bg-contain bg-[position:52%_100%] rounded-b-el px-6 py-20 flex flex-col items-center text-center">
      {/* Centered Image */}
      <img
        src={`${process.env.PUBLIC_URL}/fit.jpeg`}
        alt="ProteinShaikh"
        className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 transition-transform duration-300 hover:scale-105 hover:rotate-1"
      />

      {/* Name & Tagline */}
      <h1 className="text-4xl font-heading font-bold mb-3 text-foreground">Hi, I'm Zeeshan Shaikh</h1>
      <p className="text-xl text-foreground mb-6 leading-relaxed max-w-xl">
        Software Developer <span className="text-accent">|</span> Fitness Enthusiast <span className="text-accent">|</span> Investment Aficionado
      </p>

      {/* Call to Action Buttons */}
      <div className="space-x-4">
        <Link
          to="/about"
          className="px-6 py-2 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition"
        >
          About Me
        </Link>
        <Link
          to="/articles"
          className="px-6 py-2 bg-accent text-white rounded-full shadow-md hover:bg-primary transition"
        >
          Articles
        </Link>
      </div>
    </section>
  );
}

export default Home;
