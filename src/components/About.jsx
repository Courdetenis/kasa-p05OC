import React from "react";
import "./About.scss";
import { Collapse } from "react-collapse";

function About() {
  const [visible, setVisible] = React.useState([false, false, false, false]);

  const toggleVisibility = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <>
      <main>
        <div className="banner-about">
          <img src="https://picsum.photos/800/400" alt="Image test" />
        </div>
        <div className="about">
          <div className="about-part">
            <div
              className="about-part-title"
              onClick={() => toggleVisibility(0)}
            >
              <span>Fiabilité</span>
              <i
                className={`fa-solid ${
                  visible[0] ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse isOpened={visible[0]}>
              <div className="about-part-content">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </div>
            </Collapse>
          </div>
          <div className="about-part">
            <div
              className="about-part-title"
              onClick={() => toggleVisibility(1)}
            >
              <span>Respect</span>
              <i
                className={`fa-solid ${
                  visible[1] ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse isOpened={visible[1]}>
              <div className="about-part-content">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de pertuabation du
                voisinage entraînera une exclusion de notre plateforme.
              </div>
            </Collapse>
          </div>
          <div className="about-part">
            <div
              className="about-part-title"
              onClick={() => toggleVisibility(2)}
            >
              <span>Service</span>
              <i
                className={`fa-solid ${
                  visible[2] ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse isOpened={visible[2]}>
              <div className="about-part-content">
                La qualité du service est au coeur de notre engagement chez
                Kasa. Nous veillons à ce que chaque interaction, que ce soit
                avec nos hôtes ou nos locataires, soit empreinte de respect et
                de bienveillance.
              </div>
            </Collapse>
          </div>
          <div className="about-part">
            <div
              className="about-part-title"
              onClick={() => toggleVisibility(3)}
            >
              <span>Sécurité</span>
              <i
                className={`fa-solid ${
                  visible[3] ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse isOpened={visible[3]}>
              <div className="about-part-content">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyages, chaque logement correspond aux critères de
                sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes
              </div>
            </Collapse>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
