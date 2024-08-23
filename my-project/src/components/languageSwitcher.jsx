import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-wrap justify-end  gap-2">
      <Flag
        onClick={() => changeLanguage("en")}
        code="US"
        className="w-12 h-12 rounded-full overflow-hidden border-2 border-white "
      />

      <Flag
        onClick={() => changeLanguage("he")}
        code="IL"
        className="w-12 h-12 rounded-full overflow-hidden border-2 border-white "
      />

      <Flag
        onClick={() => changeLanguage("ru")}
        code="RU"
        className="w-12 h-12 rounded-full overflow-hidden border-2 border-white "
      />
    </div>
  );
};

export default LanguageSwitcher;
