import React from "react";
import "./AppartContainer.css";
import AppartCard from "./AppartCard.jsx";

function AppartContainer() {
  return (
    <>
      <div className="appart-container">
        <AppartCard />
        <AppartCard />
        <AppartCard />
        <AppartCard />
      </div>
    </>
  );
}

export default AppartContainer;
