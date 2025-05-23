import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm ProteinShaikh</h1>
            <p className="text-xl text-gray-700 mb-8">
                Software Developer | Fitness Enthusiast | Investment Aficionado
            </p>
            <div className="space-x-4">
                <Link to="/about" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">About Me</Link>
                <Link to="/articles"
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Articles</Link>
            </div>
        </section>
    );
}

export default Home;
