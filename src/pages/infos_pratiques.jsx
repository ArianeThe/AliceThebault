import React from "react";
import "../assets/css/global.css"; 
import "../assets/css/infos_pratiques.css"; 
import Footer from "../components/footer";

const InfosPratiques = () => {
  return (
    <div className="page-container">
      <div className="content-scrollable">

        <div className="containerI">
          <div className="columnI">
            <img className="image-info" src="/img/Alice.jpg" alt="THEBAULT Alice" />
          </div>

          <div className="columnI info-text">
            <h2 className="bold-title">Proche de la Chapelle sur Erdre, Sucé sur Erdre, Grandchamps des Fontaines, Treillières, Carquefou et Nort sur Erdre</h2>

            <h3>Durée et tarif des consultations (à compter du 01/01/2025)</h3>
            
            <h4>Consultation individuelle enfant, adolescent et adulte</h4>
            <p>Séance de 40 minutes, au tarif de 55€</p>

            <h4>Consultation couple</h4>
            <p>1ère séance de 1h30, au tarif de 150€</p>
            <p>Séance de suivi de 40 minutes, au tarif de 75€</p>

            {/*<h4>Consultation adulte dispositif "Mon Soutien Psy"</h4>
            <p>Séance de 40 minutes, au tarif de 50€</p>*/}

            <h4 className="bold-text">Le cabinet est accessible aux personnes à mobilité réduite</h4>
            <h4>Règlement et facturation</h4>
            <p>Le règlement des consultations se fait à l’issue de chaque entretien, par chèque ou espèces.</p>
            <p>Le titre de psychologue clinicien garantit un Master II en psychologie clinique et psychopathologie.
              Ce titre est protégé et enregistré auprès de l’Agence Régionale de Santé protégeant ainsi les patients contre l’exercice illégal de cette profession.
              Mon numéro ADELI vous permet d’avoir accès au remboursement de vos séances par votre mutuelle.
              N’hésitez pas à me demander une facture</p>
            <p><strong>Toute consultation non annulée et non honorée sera due.</strong></p>

            <h4>Dispositif "Mon Soutien Psy"</h4>
            <p>
              Bien que conventionnée par la CPAM, je ne prends plus de nouveaux patients dans le cadre du dispositif « mon soutien psy ».

              Merci de votre compréhension.

              Pour les patients déjà suivis, les créneaux seront disponibles les matinées des lundis, mardis et jeudis pour les adultes uniquement.
            </p>
            <div className="container">
              <div className="interior">
                <a className="btn" href="#manifeste">
                  <img className="icon-info" src="/img/monpsy1.jpg" alt="monPsy" />
                </a>
              </div>
            </div>
          </div>

          <div className="columnI">
            <img className="image-info" src="/img/cabinet.jpg" alt="Cabinet Psychologue" />
          </div>
        </div>

        <div id="manifeste" className="modal-window">
          <div>
            <a href="#" title="Close" className="modal-close">X</a>
            <div className="soutienPsy">
              <h4>Conventionné par la CPAM, ce dispositif gouvernemental permet un accompagnement psychologique  
                pour des personnes n’ayant pas la possibilité financière d’y accéder, à hauteur de 12 séances par an, au tarif de 50 euros.</h4>
              <p>Plus d'informations sur <a href="https://www.info.gouv.fr/actualite/mon-soutien-psy-12-seances-remboursees-par-an" target="_blank" rel="noopener noreferrer">www.info.gouv.fr</a></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InfosPratiques;
