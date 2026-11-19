import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Article {
    title: string;
    description: string;
    tag: string;
    tagColor: string;
    readTime: string;
    to?: string;
    comingSoon?: boolean;
}

const ARTICLES: Article[] = [
    {
        title: 'ETF Investing: A Beginner\'s Guide to Building Wealth',
        description: 'Index funds, S&P 500, VWRA vs CSPX, Ireland-domiciled ETFs, compounding and dollar-cost averaging — everything I\'ve learned about passive investing as someone based in the UAE.',
        tag: 'Investing',
        tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
        readTime: '15 min read',
        to: '/articles/etf-investing',
    },
    {
        title: 'How I Lost 20kg — The Science Behind Calorie Deficit',
        description: 'No fad diets. No magic. Just understanding how energy balance actually works, tracking food honestly, and lifting heavy things consistently.',
        tag: 'Fitness',
        tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
        readTime: 'Coming soon',
        comingSoon: true,
    },
    {
        title: 'Microservices in Production — Lessons from Banking',
        description: 'What nobody tells you about running microservices at scale in a real financial institution. Kafka, distributed tracing, failure modes and the stuff that actually breaks.',
        tag: 'Engineering',
        tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        readTime: 'Coming soon',
        comingSoon: true,
    },
    {
        title: 'Warren Buffett\'s Mental Models — What I Actually Apply',
        description: 'Not a summary of his letters. A personal account of which ideas from Buffett changed how I think about businesses, patience and risk.',
        tag: 'Investing',
        tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
        readTime: 'Coming soon',
        comingSoon: true,
    },
    {
        title: 'Spring Boot Internals — What Happens When You Hit Run',
        description: 'A deep dive into auto-configuration, the application context, bean lifecycle and how Spring Boot actually wires everything together under the hood.',
        tag: 'Engineering',
        tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        readTime: 'Coming soon',
        comingSoon: true,
    },
];

export default function LearningsPage(): JSX.Element {
    return (
        <>
            <Helmet><title>Learnings · Zeeshan Shaikh</title></Helmet>

            {/* Header */}
            <div className="w-full t-hero-grad border-b t-border-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-2">Learnings</p>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Things I've figured out</h1>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl">
                            Articles on engineering, investing and fitness — written from experience, not theory.
                            I write when I have something real to say.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Articles */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 space-y-4">
                {ARTICLES.map(({ title, description, tag, tagColor, readTime, to, comingSoon }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className={`group rounded-2xl border p-5 sm:p-6 transition-all ${
                            comingSoon
                                ? 'bg-gray-50 border-gray-100'
                                : 'bg-white border-gray-100 hover:border-indigo-200 hover:shadow-md cursor-pointer'
                        }`}
                    >
                        {to ? (
                            <Link to={to} className="block">
                                <ArticleContent title={title} description={description} tag={tag} tagColor={tagColor} readTime={readTime} comingSoon={false} />
                            </Link>
                        ) : (
                            <ArticleContent title={title} description={description} tag={tag} tagColor={tagColor} readTime={readTime} comingSoon={!!comingSoon} />
                        )}
                    </motion.div>
                ))}
            </div>
        </>
    );
}

function ArticleContent({ title, description, tag, tagColor, readTime, comingSoon }: {
    title: string; description: string; tag: string; tagColor: string; readTime: string; comingSoon: boolean;
}): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${tagColor}`}>{tag}</span>
                    <span className="text-xs text-gray-400">{readTime}</span>
                    {comingSoon && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-400 border border-gray-200">
                            Coming soon
                        </span>
                    )}
                </div>
                <h2 className={`text-base sm:text-lg font-bold leading-snug mb-1.5 ${comingSoon ? 'text-gray-400' : 'text-gray-900 group-hover:t-text-600 transition-colors'}`}>
                    {title}
                </h2>
                <p className={`text-sm leading-relaxed ${comingSoon ? 'text-gray-400' : 'text-gray-500'}`}>
                    {description}
                </p>
            </div>
            {!comingSoon && (
                <span className="shrink-0 text-sm font-semibold t-text-500 group-hover:t-text-600 transition-colors whitespace-nowrap">
                    Read →
                </span>
            )}
        </div>
    );
}
