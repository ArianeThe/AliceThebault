import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        Alice Thébault - Psychologue à Casson (44 390)
        <br />
        Tel : 06.48.58.02.32   N° Adeli : 44 93 11 372
        <br />
        <div className="footer-links">
          <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
          {" | "}
          <span>Copyright © <a href="https://clicknaccess.fr/" target="_blank" rel="noopener noreferrer" className="footer-link">Click 'n Access</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
