import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleCard from '../components/ArticleCard';

const tech = [
  {
    title: 'Understanding React Hooks 📚',
    excerpt: 'A deep dive into React Hooks and how they can simplify your code.',
    link: '/tech/understanding-react-hooks',
  },
];

function Articles() {
  return (
    <>
      <Helmet>
        <title>Articles | ProteinShaikh</title>
      </Helmet>
      <section className="container mx-auto px-4 py-8 flex justify-center items-start min-h-[80vh] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">

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

export default Articles;