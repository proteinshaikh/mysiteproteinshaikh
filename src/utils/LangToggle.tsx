import React from 'react';
import {useTranslation} from 'react-i18next';

const LangToggle: React.FC = () => {
    const {i18n} = useTranslation();

    const handleChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div
            className="inline-flex items-center space-x-1 bg-gray-100 rounded-full px-1 py-0.5 shadow-inner text-sm sm:text-base">
            {['en', 'ur'].map((lang) => (
                <label key={lang} className="cursor-pointer">
                    <input
                        type="radio"
                        name="lang"
                        value={lang}
                        checked={i18n.language === lang}
                        onChange={() => handleChange(lang)}
                        className="hidden"
                    />
                    <span
                        className={`px-2 sm:px-3 py-0.5 rounded-full transition font-semibold ${
                            i18n.language === lang ? 'bg-primary text-white' : 'text-gray-600'
                        }`}
                    >
            {lang === 'en' ? 'EN' : 'اردو'}
          </span>
                </label>
            ))}
        </div>
    );
};

export default LangToggle;
