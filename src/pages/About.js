import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-20 px-6 relative overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <img
          src="https://www.svgrepo.com/show/354113/code.svg"
          alt="Code graphic"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-3xl relative z-10" data-aos="fade-up">
        <h2 className="text-4xl font-heading font-bold mb-6 text-primary">👋 {t('about.heading')}</h2>

        <p className="mb-4 text-lg leading-relaxed text-foreground">{t('about.intro')}</p>
        <p className="mb-4 text-foreground">{t('about.secondary')}</p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Fitness Block */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-accent mb-2">🏋️ {t('about.fitnessTitle')}</h3>
            <p className="text-gray-700">{t('about.fitnessText')}</p>
          </div>

          {/* Finance Block */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-primary mb-2">📈 {t('about.financeTitle')}</h3>
            <p className="text-gray-700">{t('about.financeText')}</p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-10" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold text-accent mb-3">🌐 {t('about.siteTitle')}</h3>
          <p className="text-foreground mb-4">{t('about.siteText')}</p>
          <p className="text-lg font-semibold text-primary">{t('about.closing')}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
