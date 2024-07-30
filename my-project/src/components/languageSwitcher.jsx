import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end p-4">
      <button 
        onClick={() => changeLanguage('en')} 
        className="flex items-center px-4 py-2 bg-peach text-black font-bold rounded mr-2 hover:bg-white transition"
      >
        <Flag code="US" className="w-6 h-4 mr-2" /> 
      </button>
      <button 
        onClick={() => changeLanguage('he')} 
        className="flex items-center px-4 py-2 bg-peach text-black font-bold rounded mr-2 hover:bg-white transition"
      >
        <Flag code="IL" className="w-6 h-4 mr-2" />
      </button>
      <button 
        onClick={() => changeLanguage('ru')} 
        className="flex items-center px-4 py-2 bg-peach text-black font-bold rounded hover:bg-white transition"
      >
        <Flag code="RU" className="w-6 h-4 mr-2" /> 
      </button>
    </div>
  );
};

export default LanguageSwitcher;
