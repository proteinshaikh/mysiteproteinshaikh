import React from 'react';
import { useTranslation } from 'react-i18next';

function LangToggle() {
  const { i18n } = useTranslation();

  return (
    <div className="inline-flex items-center space-x-1 bg-gray-100 rounded-full px-1 py-0.5 shadow-inner text-sm sm:text-base">
      <label className="cursor-pointer">
        <input
          type="radio"
          name="lang"
          value="en"
          checked={i18n.language === 'en'}
          onChange={() => i18n.changeLanguage('en')}
          className="hidden"
        />
        <span
          className={`px-2 sm:px-3 py-0.5 rounded-full transition font-semibold ${
            i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-600'
          }`}
        >
          EN
        </span>
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          name="lang"
          value="ur"
          checked={i18n.language === 'ur'}
          onChange={() => i18n.changeLanguage('ur')}
          className="hidden"
        />
        <span
          className={`px-2 sm:px-3 py-0.5 rounded-full transition font-semibold ${
            i18n.language === 'ur' ? 'bg-primary text-white' : 'text-gray-600'
          }`}
        >
          اردو
        </span>
      </label>
    </div>
  );
}

export default LangToggle;
