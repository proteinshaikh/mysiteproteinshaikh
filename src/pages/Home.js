import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Image with circular background */}
        <div className="relative w-full md:w-[45%] flex justify-center">
          <div className="relative w-64 h-64 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/fit.jpeg`}
              alt="ProteinShaikh"
              className="w-56 h-56 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[55%] text-center md:text-left" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Hey <span className="relative inline-block">
              <span className="relative z-10">Friends</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-accent z-0 transform translate-y-1 rotate-1"></span>
            </span> 👋
          </h1>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-xl">
            I’m Zeeshan. I’m a Developer, Fitness Enthusiast, and Long-Term Investor. This site is where I share everything I’m learning about code, health, and building a better life.
          </p>

          <div className="space-x-4">
            <Link
              to="/about"
              className="px-6 py-2 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition"
            >
              About Me
            </Link>
            <Link
              to="/articles"
              className="px-6 py-2 bg-accent text-white rounded-full shadow hover:bg-primary transition"
            >
              Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
