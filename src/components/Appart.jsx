import React, { useEffect, useState } from "react";
import "./Appart.scss";
import { useParams, useNavigate } from "react-router";
import logementsData from "/src/logements.json";
import Collapse from "./Collapse";
import Carousel from "./Carousel";

function Appart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logementTemp = logementsData.find((item) => item.id === id);
    if (!logementTemp) {
      navigate("/error");
    } else {
      setLogement(logementTemp);
    }
  }, [id, navigate]);

  if (!logement) return null;

  return (
    <main>
      <div className="appart">
        <Carousel images={logement.pictures} />

        <div className="appart-header">
          <div className="appart-title">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <div className="appart-tag">
              {logement.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="appart-owner">
            <div className="appart-owner-details">
              <div className="appart-owner-name">
                {logement.host.name.split(" ").map((part, index) => (
                  <span key={index}>
                    {part}
                    <br />
                  </span>
                ))}
              </div>
              <div
                className="appart-owner-profile-picture"
                style={{ backgroundImage: `url(${logement.host.picture})` }}
              />
            </div>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={
                    index < parseInt(logement.rating)
                      ? "star-filled"
                      : "star-empty"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="appart-area">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={
              <div className="equipment-list">
                {logement.equipments.map((equipment, index) => (
                  <span key={index}>{equipment}</span>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
}

export default Appart;
