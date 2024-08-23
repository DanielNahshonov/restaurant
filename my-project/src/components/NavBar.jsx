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
    <div className="bg-peach  flex-col justify-center space-x-4">
      <button
        className="bg-peach text-outline-peach hover:bg-white font-bold p-4 rounded"
        onClick={homeNavigate}
      >
        {t('navBar.home')}
      </button>
      <button
        className="bg-peach text-outline-peach hover:bg-white font-bold  rounded"
        onClick={menuNavigate}
      >
        {t('navBar.menu')}
      </button>
      <button
        className="bg-peach text-outline-peach hover:bg-white font-bold  rounded"
        onClick={locationNavigate}
      >
        {t('navBar.location')}
      </button>
      <button
        className="bg-peach text-outline-peach hover:bg-white font-bold  rounded"
        onClick={aboutUsNavigate}
      >
        {t('navBar.aboutUs')} 
      </button>
    </div>
  );
}
