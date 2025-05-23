import React from 'react';

function Projects() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-700 mb-4">
                Here are some of the projects I've worked on:
            </p>
            <ul className="list-disc list-inside text-gray-700">
                <li>Fitness Tracker App - A mobile app to monitor workouts and nutrition.</li>
                <li>Investment Portfolio Dashboard - A web app to track and analyze investments.</li>
                <li>Open Source Contributions - Contributed to various open-source projects on GitHub.</li>
            </ul>
        </section>
    );
}

export default Projects;
