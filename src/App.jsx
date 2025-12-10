import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Consultations from "./pages/consultations";
import Experiences from "./pages/experiences";
import InfosPratiques from "./pages/infos_pratiques";
import PrendreRdv from "./pages/prendreRdv";
import MentionsLegales from "./pages/mentionsLegales";
import "./assets/css/global.css"; // Import du CSS global

const App = () => {
  return (
    <Router>
      <Header /> {/* Affiche la navbar et l'en-tête sur toutes les pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/infos_pratiques" element={<InfosPratiques />} />
        <Route path="/prendreRdv" element={<PrendreRdv />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>

      <Footer /> {/* Affiche le footer sur toutes les pages */}
    </Router>
  );
};

export default App;

