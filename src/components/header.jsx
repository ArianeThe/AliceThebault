import React from "react";
import Navbar from "./navbar";
import "../assets/css/header.css";

const Header = () => {
  return (
<header className="header-container">
  <div>
    <span className="header-title">Alice THEBAULT</span> <br />
    <span className="sub-title">Psychologue Clinicienne à Casson</span>
  </div>

  {/* Logo Doctolib */}
  <aside className="doctolib-logo">
    <a href="https://www.doctolib.fr/psychologue/casson/alice-thebault" target="_blank" rel="noopener noreferrer">
      <img src="/img/doctolib.jpg" alt="Prendre rendez-vous en ligne" />
    </a>
  </aside>

  {/* Navbar */}
  <Navbar />
</header>


  );
};

export default Header;
