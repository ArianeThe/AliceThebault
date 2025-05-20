import React from "react";
import Footer from "../components/footer";
import "../assets/css/consultations.css";
import "../assets/css/global.css"; // Import du CSS global

const Consultations = () => {
  return (
    <div className="page-container">
      <div className="content-scrollable">

      <div className="containerC">
        {/* Colonne 1 */}
        <div className="columnC" style={{ textAlign: "justify" }}>
          <h2> SOUTIEN INDIVIDUEL</h2>
          <p>Venir consulter n’est pas signe d’échec, certains problèmes requièrent d’être pensés avec un professionnel neutre et bienveillant.
          Parfois s’entretenir avec un psychologue peut être nécessaire pour surmonter certaines difficultés.</p>
          <div className="container">
            <div className="interior">
              <a className="btn" href="#soutienIndividuel">Lire plus...</a>
            </div>
          </div>

          <h2> PSYCHOTHERAPIE</h2>
          <p>Le psychologue est présent pour vous accompagner dans vos réflexions, introspections à l’égard de votre histoire personnelle.</p>
          <div className="container">
            <div className="interior">
              <a className="btn" href="#psychotherapie">Lire plus...</a>
            </div>
          </div>
        </div>

        {/* Colonne 2 - Texte en ellipse */}
        <div className="columnC">
          <p className="ellipse">
            <br />Ensemble, nous construirons un cadre sécure <br /> afin de vous permettre
            de cheminer vers un apaisement.
            <br /><br />Nous réfléchirons à trouver votre propre grille de lecture afin de
            promouvoir votre autonomie de pensée et d'action.
            <br /><br />Nous travaillerons à renforcer vos ressources et vous libérer de fonctionnements
            délétères.
          </p>
        </div>

        {/* Colonne 3 */}
        <div className="columnC">
          <h2>SOUTIEN A LA PARENTALITE</h2>
          <p>La plupart des psychologues ont une appétence pour un champ d'expertise en particulier.
          Le mien est centré autour de la famille existante ou à venir.</p>
          <div className="container">
            <div className="interior">
              <a className="btn" href="#parentalité">Lire plus...</a>
            </div>
          </div>

          <h2>THERAPIE DE COUPLE</h2>
          <p>Avancer à deux est un exercice complexe qui nécessite parfois l’intervention
          d’un tiers afin de renouer avec la parole et de retrouver une harmonie de couple.</p>
          <div className="container">
            <div className="interior">
              <a className="btn" href="#couple">Lire plus...</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <div id="soutienIndividuel" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">X</a>
          <h2>SOUTIEN INDIVIDUEL</h2>
          <p>Différentes difficultés peuvent vous amener à venir me rencontrer :</p>
          <ul>
            <li>Émotionnelles : confiance en soi, dépression, angoisses...</li>
            <li>Scolaires : harcèlement, phobie scolaire, perte de motivation...</li>
            <li>Comportementales : agressivité, troubles alimentaires...</li>
            <li>Relationnelles : communication, solitude, harcèlement...</li>
            <li>Épisodes difficiles : deuil, séparation, burn-out...</li>
          </ul>
        </div>
      </div>

      <div id="psychotherapie" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">X</a>
          <h2>PSYCHOTHERAPIE</h2>
          <ul>
            <li>Travail d'introspection et d'évolution personnelle.</li>
            <li>Valorisation de votre subjectivité.</li>
            <li>Processus de changement basé sur vos valeurs.</li>
          </ul>
        </div>
      </div>

      <div id="parentalité" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">X</a>
          <h2>SOUTIEN A LA PARENTALITE</h2>
          <ul>
            <li>Accompagnement autour de la grossesse et ses difficultés.</li>
            <li>Support en PMA et infertilité.</li>
            <li>Écoute pour les enfants sur leur histoire.</li>
            <li>Aide aux parents dans leur relation avec l'enfant.</li>
          </ul>
        </div>
      </div>

      <div id="couple" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">X</a>
          <h2>THERAPIE DE COUPLE</h2>
          <ul>
            <li>Troubles de la communication.</li>
            <li>Compréhension des besoins du partenaire.</li>
            <li>Rupture de projets communs.</li>
            <li>Difficultés sexuelles, adultères.</li>
            <li>Gestion des séparations envisagées.</li>
          </ul>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultations;
