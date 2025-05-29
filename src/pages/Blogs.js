import React from 'react';
import {Helmet} from 'react-helmet';
import ArticleCard from '../components/ArticleCard';

const tech = [
    {
        title: 'The Geography of Belief: Coincidence or Conditioning?',
        excerpt: 'Faith',
        link: '/blogs/geography-of-belief',
    },
    {
        title: 'The Interplay of Money and Risk',
        excerpt: 'Money and Risk',
        link: '/blogs/money-and-risk',
    },
    {
        title: 'Best Books to Read in 2025',
        excerpt: 'Curated reads spanning science, finance, history, and literature',
        link: '/blogs/books',
    },
];

function Blogs() {
    return (
        <>
            <Helmet>
                <title>Opinions | ProteinShaikh</title>
            </Helmet>
            <section
                className="container mx-auto px-4 py-8 flex justify-center items-start min-h-[80vh] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">

                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">
                        Explore Tech with me! 📝
                    </h2>
                    <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
                        Dive into my thoughts on tech, fitness, and finance. Find insights to inspire and inform! 🚀
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tech.map((article, index) => (
                            <div
                                key={index}
                                className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble"
                            >
                                <ArticleCard
                                    title={article.title}
                                    excerpt={article.excerpt}
                                    link={article.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;