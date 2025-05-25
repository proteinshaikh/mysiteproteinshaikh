import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About | ProteinShaikh</title>
      </Helmet>
      <section className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <svg className="w-full h-full object-contain" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 50C70 30, 130 30, 150 50C170 70, 170 130, 150 150C130 170, 70 170, 50 150C30 130, 30 70, 50 50" stroke="#4B5563" strokeWidth="4" opacity="0.3"/>
          </svg>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl w-full text-center relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">
            👋 {t('about.heading')}
          </h2>
          <p className="text-gray-600 mb-8 text-lg animate-fade-in-up max-w-2xl mx-auto">
            {t('about.intro')}
          </p>
          <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
            {t('about.secondary')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Fitness Quote */}
            <figure className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
              <blockquote className="text-gray-600 italic text-lg before:content-['“'] before:text-3xl before:text-gray-400 before:mr-2 after:content-['”'] after:text-3xl after:text-gray-400 after:ml-2">
                {t('about.fitnessText')}
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-center gap-2">
                <span className="text-2xl">🏋️</span>
                <span className="text-xl font-semibold text-gray-800">{t('about.fitnessTitle')}</span>
              </figcaption>
            </figure>

            {/* Finance Quote */}
            <figure className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
              <blockquote className="text-gray-600 italic text-lg before:content-['“'] before:text-3xl before:text-gray-400 before:mr-2 after:content-['”'] after:text-3xl after:text-gray-400 after:ml-2">
                {t('about.financeText')}
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-center gap-2">
                <span className="text-2xl">📈</span>
                <span className="text-xl font-semibold text-gray-800">{t('about.financeTitle')}</span>
              </figcaption>
            </figure>
          </div>

          {/* Closing Section (Tile) */}
          <div className="tile bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
            <span className="text-4xl mb-4 block">🌐</span>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t('about.siteTitle')}</h3>
            <p className="text-gray-600 mb-4">{t('about.siteText')}</p>
            <p className="text-lg font-semibold text-blue-600">{t('about.closing')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;