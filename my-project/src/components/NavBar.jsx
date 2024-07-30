import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

export default function NavBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function menuNavigate() {
    navigate("restaurant/Menu");
  }
  function homeNavigate() {
    navigate("restaurant/");
  }
  function locationNavigate() {
    navigate("restaurant/Location");
  }
  function aboutUsNavigate() {
    navigate("restaurant/AboutUs");
  }

  return (
    <div className="bg-peach p-4 flex-col justify-center space-x-4">
      <button
        className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
        onClick={homeNavigate}
      >
        {t('navBar.home')} {/* Используйте перевод */}
      </button>
      <button
        className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
        onClick={menuNavigate}
      >
        {t('navBar.menu')} {/* Используйте перевод */}
      </button>
      <button
        className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
        onClick={locationNavigate}
      >
        {t('navBar.location')} {/* Используйте перевод */}
      </button>
      <button
        className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
        onClick={aboutUsNavigate}
      >
        {t('navBar.aboutUs')} {/* Используйте перевод */}
      </button>
    </div>
  );
}
