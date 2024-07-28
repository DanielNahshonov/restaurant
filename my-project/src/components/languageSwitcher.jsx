// src/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end p-4">
      <button 
        onClick={() => changeLanguage('en')} 
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('he')} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Hebrew
      </button>
      <button 
        onClick={() => changeLanguage('rus')} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Russian
      </button>
    </div>
  );
};

export default LanguageSwitcher;
