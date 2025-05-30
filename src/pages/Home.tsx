import React, {JSX} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Helmet} from 'react-helmet';

function Home(): JSX.Element {
    const {t} = useTranslation();

    return (
        <>
            <Helmet>
                <title>Home | ProteinShaikh</title>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-background py-20 px-6">
                <div
                    className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Profile Image */}
                    <div className="relative w-full md:w-[45%] flex justify-center">
                        <div
                            className="relative w-64 h-64 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                            <img
                                src={`${process.env.PUBLIC_URL}/fit.jpeg`}
                                alt="ProteinShaikh"
                                className="w-56 h-56 rounded-full object-cover border-4 border-white"
                            />
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="w-full md:w-[55%] text-center md:text-left" data-aos="fade-up">
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                            {t('home.hey')}{' '}
                            <span className="relative inline-block">
                <span className="relative z-10">{t('home.friends')}</span>
                <span
                    className="absolute left-0 bottom-0 w-full h-1 bg-accent z-0 transform translate-y-1 rotate-1"></span>
              </span>{' '}
                            👋
                        </h1>

                        <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-xl">
                            {t('home.intro')}
                        </p>

                        <div className="space-x-4">
                            <Link
                                to="/fitness"
                                className="px-6 py-2 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition"
                            >
                                Explore Fitness
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section
                className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
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

                <div className="max-w-4xl w-full text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">👋 {t('about.heading')}</h2>
                    <p className="text-gray-600 mb-8 text-lg animate-fade-in-up max-w-2xl mx-auto">
                        {t('about.intro')}
                    </p>
                    <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
                        {t('about.secondary')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Fitness Quote */}
                        <figure
                            className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
                            <blockquote
                                className="text-gray-600 italic text-lg before:content-['“'] before:text-3xl before:text-gray-400 before:mr-2 after:content-['”'] after:text-3xl after:text-gray-400 after:ml-2">
                                {t('about.fitnessText')}
                            </blockquote>
                            <figcaption className="mt-4 flex items-center justify-center gap-2">
                                <span className="text-2xl">🏋️</span>
                                <span className="text-xl font-semibold text-gray-800">{t('about.fitnessTitle')}</span>
                            </figcaption>
                        </figure>

                        {/* Finance Quote */}
                        <figure
                            className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
                            <blockquote
                                className="text-gray-600 italic text-lg before:content-['“'] before:text-3xl before:text-gray-400 before:mr-2 after:content-['”'] after:text-3xl after:text-gray-400 after:ml-2">
                                {t('about.financeText')}
                            </blockquote>
                            <figcaption className="mt-4 flex items-center justify-center gap-2">
                                <span className="text-2xl">📈</span>
                                <span className="text-xl font-semibold text-gray-800">{t('about.financeTitle')}</span>
                            </figcaption>
                        </figure>
                    </div>

                    <div
                        className="tile bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
                        <span className="text-4xl mb-4 block">🌐</span>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t('about.siteTitle')}</h3>
                        <p className="text-gray-600 mb-4">{t('about.siteText')}</p>
                        <p className="text-lg font-semibold text-blue-600">{t('about.closing')}</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="container mx-auto px-4 py-20 flex justify-center items-start bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden scroll-mt-20"
            >
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">Connect with Me! 📡</h2>
                    <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
                        Drop me a message or follow my journey on social media. Let's create something amazing together!
                        ✨
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
                            <span className="text-4xl mb-4 block">✉️</span>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                            <a href="mailto:zeeshanshaikhonline@gmail.com"
                               className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                                zeeshanshaikhonline@gmail.com
                            </a>
                        </div>

                        <div
                            className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
                            <span className="text-4xl mb-4 block">🐙</span>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
                            <a href="https://github.com/proteinshaikh"
                               className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                                github.com/proteinshaikh
                            </a>
                        </div>

                        <div
                            className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
                            <span className="text-4xl mb-4 block">💼</span>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h3>
                            <a href="https://linkedin.com/in/proteinshaikh"
                               className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                                linkedin.com/in/proteinshaikh
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
