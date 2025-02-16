import React, { useRef, useEffect } from "react";
import "./About.scss";
import Collapse from "./Collapse.jsx";

function About() {
  return (
    <>
      <main>
        <div className="banner-about">
          <img src="https://picsum.photos/800/400" alt="Image test" />
        </div>
        <div className="about">
          <Collapse title="Test" content="Test Pour voir" />
          <Collapse title="Test" content="Test Pour voir" />
          <Collapse title="Test" content="Test Pour voir" />
          <Collapse title="Test" content="Test Pour voir" />
        </div>
      </main>
    </>
  );
}

export default About;
