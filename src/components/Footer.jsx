import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-logo">
            <img src="./src/assets/footer-logo.png" alt="" />
          </div>
          <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
