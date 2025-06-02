import React, {JSX} from 'react';
import {Helmet} from 'react-helmet';
import ArticleCard from '../components/ArticleCard';

type FitnessTip = {
    title: string;
    excerpt: string;
    link: string;
};

const fitnessTips: FitnessTip[] = [
    {
        title: 'My Fitness Journey🏋️‍♂️',
        excerpt: 'How I transformed my health and built a consistent workout routine.',
        link: '/fitness/dev-to-defined',
    },
    {
        title: 'Start with Compound Movements 🏋️‍',
        excerpt: 'Focus on exercises like squats, deadlifts, and bench press to build overall strength efficiently.',
        link: '/fitness/start-with-compound-movements',
    },
    {
        title: 'Track Your Progress 📈',
        excerpt: 'Use apps or a journal to record your workouts and gradually increase intensity.',
        link: '/fitness/track-your-progress',
    },
    {
        title: 'Meal Plan June 2025',
        excerpt: 'Meal Plan June 2025.',
        link: '/fitness/meal-plan',
    },
];

function Fitness(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>Fitness | ProteinShaikh</title>
            </Helmet>
            <section
                className="container mx-auto px-4 py-8 flex justify-center items-start min-h-[80vh] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">

                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
                    <svg className="w-full h-full object-contain" viewBox="0 0 200 200" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 50C70 30, 130 30, 150 50C170 70, 170 130, 150 150C130 170, 70 170, 50 150C30 130, 30 70, 50 50"
                            stroke="#4B5563"
                            strokeWidth="4"
                            opacity="0.3"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl w-full text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">💪 Fitness Wisdom</h2>
                    <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
                        Explore my collection of fitness insights to build strength, stay motivated, and live healthier.
                        Let’s transform together! 🥗
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fitnessTips.map((tip, index) => (
                            <div
                                key={index}
                                className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble"
                            >
                                <ArticleCard title={tip.title} excerpt={tip.excerpt} link={tip.link}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fitness;
