import React from "react";
import Header from "./Header.jsx";
import "./ErrorPage.css";
import Footer from "./Footer.jsx";
import { NavLink } from "react-router";

function ErrorPage() {
  return (
    <div>
      <Header />
      <main>
        <div className="error-container">
          <h1 className="h1-error">404</h1>
          <p className="p-error">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <NavLink className="error-navlink" to="/">
            Retournez sur la page d'accueil
          </NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
