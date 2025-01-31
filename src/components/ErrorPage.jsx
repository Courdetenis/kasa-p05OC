import React from "react";
import "./ErrorPage.scss";
import { NavLink } from "react-router";

function ErrorPage() {
  return (
    <div>
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
    </div>
  );
}

export default ErrorPage;
