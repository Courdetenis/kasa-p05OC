import React from "react";
import "./About.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { NavLink } from "react-router";

function About() {
  return (
    <>
      <Header />
      <main>
        <div className="banner-about">
          <img src="https://picsum.photos/800/400" alt="Image test" />
        </div>
        <div className="about">
          <div className="about-part">
            <p className="about-part-title">
              <span>Fiabilité</span>
              <i class="fa-solid fa-chevron-down"></i>
            </p>
            <p className="about-part-content">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
          <div className="about-part">
            <p className="about-part-title">
              <span>Respect</span>
              <i class="fa-solid fa-chevron-down"></i>
            </p>
            <p className="about-part-content">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertuabation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
          <div className="about-part">
            <p className="about-part-title">
              <span>Service</span>
              <i className="fa-solid fa-chevron-down"></i>
            </p>
            <p className="about-part-content">
              La qualité du service est au coeur de notre engagement chez Kasa.
              Nous veillons à ce que chaque interaction, que ce soit avec nos
              hôtes ou nos locataires, soit empreinte de respect et de
              bienveillance.
            </p>
          </div>
          <div className="about-part">
            <p className="about-part-title">
              <span>Sécurité</span>
              <i className="fa-solid fa-chevron-down"></i>
            </p>
            <p className="about-part-content">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyages, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
