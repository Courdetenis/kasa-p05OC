import { useState, useEffect } from "react";
import { data, NavLink } from "react-router-dom";
import logementsData from "/src/logements.json";
import "./AppartCard.scss";

function AppartCard() {
  return (
    <div className="appart-cards">
      {logementsData?.map((data) => (
        <div className="appart-card" key={data.id}>
          <NavLink to={`/appart/${data.id}`}>
            <img src={data.cover} alt={data.title} />
            <div className="appart-card-subtitle">{data.title}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default AppartCard;
