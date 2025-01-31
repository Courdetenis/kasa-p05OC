import React from "react";
import "./Header.scss";
import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar-logo">
          <img src="/kasa-logo.png" alt="kasa-logo" />
        </div>
      </NavLink>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li>
            <NavLink className="navbar-menu-navlink" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-menu-navlink" to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
