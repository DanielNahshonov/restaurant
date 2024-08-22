import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-wrap justify-end p-4 gap-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className="flex items-center bg-peach text-black font-bold rounded hover:bg-white transition"
      >
        <Flag code="US" className="h-10" /> 
      </button>
      <button 
        onClick={() => changeLanguage('he')} 
        className="flex items-center px-4 bg-peach text-black font-bold rounded hover:bg-white transition"
      >
        <Flag code="IL" className="h-10" />
      </button>
      <button 
        onClick={() => changeLanguage('ru')} 
        className="flex items-center bg-peach text-black font-bold rounded hover:bg-white transition"
      >
        <Flag code="RU" className="h-10" /> 
      </button>
    </div>
  );
};

export default LanguageSwitcher;
