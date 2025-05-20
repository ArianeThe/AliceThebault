import React from "react";
import Footer from "../components/footer";
import "../assets/css/presentation.css";
import "../assets/css/global.css"; 

const Home = () => {
  return (
    <div className="home-container"> {/* Ajout d'une classe pour gérer le background via CSS */}


      <div className="content-scrollable">
        <p className="presentation">
          L'Organisation Mondiale de la Santé (OMS) définit la santé comme 
          "un état de complet bien-être physique, mental et social, 
          et ne consiste pas seulement en une absence de maladie ou d'infirmité."
          <br /><br />
          La vie étant en perpétuel mouvement, l'individu doit continuellement
          s'adapter afin de veiller le mieux possible à son propre équilibre.
          Il est naturel face à certaines difficultés de vie d'avoir besoin
          d'aide.
          <br /><br />
          Le psychologue clinicien, spécialiste du fonctionnement psychique,
          est un professionnel de l'écoute et de la parole, neutre et bienveillant.
          <br />
          Au sein de mon cabinet, je propose des consultations psychologiques
          adaptées à chacun : enfants, adolescents, adultes et couples.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
