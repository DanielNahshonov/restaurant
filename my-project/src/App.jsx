import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogoBar from "./components/LogoBar";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Location from "./components/Location";
import LanguageSwitcher from "./components/languageSwitcher";

function App() {
  return (
    <div>
      <div>
      <LogoBar />
      <LanguageSwitcher/>
    </div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Location" element={<Location/>}/>
      </Routes>
    </div>
  );
}

export default App;
