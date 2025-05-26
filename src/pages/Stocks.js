import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleCard from '../components/ArticleCard';

const stockTips = [
  {
    title: 'Investment lessons from Warren Buffet',
    excerpt: 'Buffet lessons.',
    link: '/stocks/buffet-lessons',
  },
];

function Stocks() {
  return (
    <>
      <Helmet>
        <title>Stocks | ProteinShaikh</title>
      </Helmet>
      <section className="container mx-auto px-4 py-8 flex justify-center items-start min-h-[80vh] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">

        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <svg className="w-full h-full object-contain" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 50C70 30, 130 30, 150 50C170 70, 170 130, 150 150C130 170, 70 170, 50 150C30 130, 30 70, 50 50" stroke="#4B5563" strokeWidth="4" opacity="0.3"/>
          </svg>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl w-full text-center relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">
            📊 Investment Wisdom
          </h2>
          <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
            Dive into my collection of stock market insights, inspired by timeless strategies to guide your investment journey. 💡
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stockTips.map((tip, index) => (
              <div
                key={index}
                className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble"
              >
                <ArticleCard
                  title={tip.title}
                  excerpt={tip.excerpt}
                  link={tip.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Stocks;