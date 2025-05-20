import React from "react";
import "../assets/css/global.css";
import "../assets/css/rdv.css";
import Footer from "../components/footer";

const PrendreRdv = () => {
  return (
    <div className="page-container">
      <div className="content-scrollable">
        
        <div className="title-container">
          <h2 className="titleR">
            Proche de la Chapelle sur Erdre, Sucé sur Erdre, Grandchamps des Fontaines, Treillières, Carquefou et Nort sur Erdre.
          </h2>
        </div>
        
        <div className="containerR">
          <div className="columnR">
            <img className="imageR" src="/img/ext.jpg" alt="exterieur bureau" />
          </div>

          <div className="columnR infoR">
            <h3>Jours et horaires de consultations :</h3>
            <p>Lundi : 09h45 - 13h45, 15h00 - 19h30</p>
            <p>Mardi : 09h45 - 13h30, 14h45 - 19h00</p>
            <p>Mercredi : 09h45 - 12h45, 13h45 - 15h15</p>
            <p>Jeudi : 09h45 - 13h45, 15h00 - 19h30</p>
            <p>Sur rendez-vous</p>

            <br />
            <a className="doctolib-link" href="https://www.doctolib.fr/psychologue/casson/alice-thebault/booking/motives?profile_skipped=true&telehealth=false&placeId=practice-150990&specialityId=14" target="_blank" rel="noopener noreferrer">
              <img className="doctolib-img" src="/img/doctolib.jpg" alt="doctolib" />
            </a>
            <br />
            <p>5 impasse François Dollier de Casson</p>
            <p>44 390 Casson</p>
          </div>

          <div className="columnR">
            <iframe 
              className="mapR" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1274.957312834295!2d-1.561401722940202!3d47.38188800644221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805f7f23b7a8969%3A0x9ad1446502f75819!2sAlice%20Th%C3%A9bault%20Psychologue!5e0!3m2!1sfr!2sfr!4v1683024568264!5m2!1sfr!2sfr" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrendreRdv;
