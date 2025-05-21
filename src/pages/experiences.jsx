import React from "react";
import "../assets/css/global.css";
import "../assets/css/experiences.css"; 
import Footer from "../components/footer";

const Experiences = () => {
  return (
    <div className="page-container">
      <div className="content-scrollable">
      <div className="containerE">
        <div className="columnE">
          <h2>FORMATION :</h2>
          <ul>
            <li>2010 : Master 2 en psychologie clinique et psychopathologie <br />
              (mémoire : Devenir famille par l’adoption : une parentalité et une filiation perpétuellement interrogées)
            </li>
            <li>2009 : Master 1 en psychologie clinique et psychopathologie <br />
              (mémoire : Rencontre du féminin et comportements à risques sexuels à l’adolescence)
            </li>
          </ul>

          <h2>FORMATION CONTINUE :</h2>
          <p>
            Depuis 2013, membre de la Consultation d’Éthique Clinique du CHU de Nantes,
            j’assiste fréquemment à diverses formations et participe aux staffs de réflexion éthique concernant des situations médicales.
            Je me forme régulièrement à différents sujets :
          </p>
          <ul>
            <li>Dépression et prévention du suicide</li>
            <li>Construction familiale et ses différents schémas</li>
            <li>Souffrance à l’adolescence et accompagnement de l’enfant</li>
            <li>Éthique médicale et autonomie du sujet</li>
          </ul>
        </div>

        <div className="columnE center-text">
          <p>
            Le titre de psychologue garantit un parcours universitaire de 5 années minimum,
            où apprentissages théoriques et pratiques institutionnelles se mêlent, et sont validées par un Master 2.
            Ce titre est protégé et doit être enregistré auprès de l’Agence Régionale de Santé avec un numéro ADELI,
            protégeant ainsi les patients contre l’exercice illégal de cette profession.
          </p>
        </div>

        <div className="columnE">
          <h2>EXPÉRIENCES PROFESSIONNELLES :</h2>
          <ul>
            <li>Depuis 2020 : Cabinet libéral à Casson <br />
              (accompagnement enfants, adolescents, adultes et couples)
            </li>
            <li>2013 à 2020 : Cabinet libéral à la Chapelle sur Erdre <br />
              (accompagnement enfants, adolescents, adultes, couples, ainsi que analyse des pratiques auprès d’équipes
              de petite enfance et dans le secteur de l’adolescence et du handicap)
            </li>
            <li>2010 à 2013 : Salariée, j’ai notamment exercé au sein d’une unité d’Adoption et d’Accès aux Origines,
              d’un lieu d’accueil d’adolescents en mal-être et/ou aux comportements à risque, ainsi que d’une structure socio-éducative
            </li>
            <li>2010 à 2015 : Psychologue bénévole au sein d’une association de soutien pour les couples engagés <br />
              dans un processus de procréation médicalement assistée (entretien d’accompagnement et animation des groupes de paroles)
            </li>
          </ul>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experiences;
