import React from 'react';
import { useTranslation } from 'react-i18next';

function LangToggle() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-2 py-1 shadow-inner">
      <label className="inline-flex items-center space-x-1 cursor-pointer">
        <input
          type="radio"
          name="lang"
          value="en"
          checked={i18n.language === 'en'}
          onChange={() => i18n.changeLanguage('en')}
          className="hidden"
        />
        <span className={`px-4 py-1 rounded-full text-sm font-semibold transition ${i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-600'}`}>
          EN
        </span>
      </label>

      <label className="inline-flex items-center space-x-1 cursor-pointer">
        <input
          type="radio"
          name="lang"
          value="ur"
          checked={i18n.language === 'ur'}
          onChange={() => i18n.changeLanguage('ur')}
          className="hidden"
        />
        <span className={`px-4 py-1 rounded-full text-sm font-semibold transition ${i18n.language === 'ur' ? 'bg-primary text-white' : 'text-gray-600'}`}>
          اردو
        </span>
      </label>
    </div>
  );
}

export default LangToggle;
