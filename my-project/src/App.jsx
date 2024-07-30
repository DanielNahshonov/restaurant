import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePage from "./components/HomePage";
import LogoBar from "./components/LogoBar";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Location from "./components/Location";

function App() {
  const { i18n } = useTranslation();
  
  // Получаем текущее направление текста
  const direction = i18n.language === 'he' ? 'rtl' : 'ltr';

  return (
    <div>
      <LogoBar />
      <div dir={direction}>
        <NavBar />
        <Routes>
          <Route path="restaurant/" element={<HomePage />} />
          <Route path="restaurant/Menu" element={<Menu/>}/>
          <Route path="restaurant/AboutUs" element={<AboutUs/>}/>
          <Route path="restaurant/ContactUs" element={<ContactUs/>}/>
          <Route path="restaurant/Location" element={<Location/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
