import React from 'react';
import ArticleCard from '../components/ArticleCard';

const articles = [
    {
        title: 'Understanding React Hooks',
        excerpt: 'A deep dive into React Hooks and how they can simplify your code.',
        link: '#',
    },
    {
        title: 'My Fitness Transformation Journey',
        excerpt: 'Sharing the ups and downs of my path to a healthier lifestyle.',
        link: '#',
    },
    {
        title: 'Investment Strategies for Beginners',
        excerpt: 'An overview of investment approaches suitable for those starting out.',
        link: '#',
    },
];

function Articles() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        title={article.title}
                        excerpt={article.excerpt}
                        link={article.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Articles;
