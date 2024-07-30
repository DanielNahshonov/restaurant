import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Импортируйте useTranslation

export default function NavBar() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Инициализируйте useTranslation

  function menuNavigate() {
    navigate("/Menu");
  }
  function homeNavigate() {
    navigate("/");
  }
  function locationNavigate() {
    navigate("/Location");
  }
  function aboutUsNavigate() {
    navigate("/AboutUs");
  }

  return (
    <div className="bg-peach p-4 flex justify-center space-x-4">
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
