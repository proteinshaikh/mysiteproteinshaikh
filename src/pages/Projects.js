import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../data/projects.json';
import {Helmet} from 'react-helmet';

function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects | ProteinShaikh</title>
            </Helmet>
            <section className="container mx-auto px-4 py-16 max-w-3xl">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>

                <div className="space-y-6">
                    {projects.map((proj) => (
                        <Link
                            to={`/projects/${proj.slug}`}
                            key={proj.slug}
                            className="block p-6 bg-white shadow-md rounded hover:shadow-lg transition"
                        >
                            <h3 className="text-2xl font-bold text-primary">{proj.title}</h3>
                            <p className="text-gray-600">{proj.description}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
