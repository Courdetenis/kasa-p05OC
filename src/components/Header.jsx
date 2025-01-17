import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./public/kasa-logo.png" alt="kasa-logo" />
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li>
            <a className="navbar-menu-a" href="#">
              Accueil
            </a>
          </li>
          <li>
            <a className="navbar-menu-a" href="#">
              A Propos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
