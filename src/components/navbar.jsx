import React, { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
       
        {/* Menu Burger (Mobile) */}
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/" className="menu-item">Présentation</a>
          <a href="/consultations" className="menu-item">Consultations</a>
          <a href="/experiences" className="menu-item">Expériences</a>
          <a href="/infos_pratiques" className="menu-item">Informations pratiques</a>
          <a href="/prendreRdv" className="menu-item">Prendre rendez-vous</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
