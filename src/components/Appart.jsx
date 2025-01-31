import React, { useEffect } from "react";
import "./Appart.scss";
import { useParams } from "react-router";
import logementsData from "/src/logements.json";
import { useNavigate } from "react-router";

function Appart() {
  const { id } = useParams();
  const [logement, setLogement] = React.useState(null);
  useEffect(() => {
    const logementTemp = logementsData.find((item) => item.id === id);
    if (!logementTemp) {
      const navigate = useNavigate();
      navigate("/error");
    } else {
      setLogement(logementTemp);
    }
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const [visible, setVisible] = React.useState([false, false, false, false]);

  const toggleVisibility = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <>
      <main>
        <div className="appart">
          <div className="carousel">
            <img
              src={logement.pictures[currentImageIndex]}
              alt={`${logement.title} - vue ${currentImageIndex + 1}`}
            />
            {logement.pictures.length > 1 && (
              <>
                <button className="carousel-btn prev" onClick={previousImage}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="carousel-btn next" onClick={nextImage}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
                <div className="carousel-counter">
                  {currentImageIndex + 1}/{logement.pictures.length}
                </div>
              </>
            )}
          </div>
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
                  {logement.host.name.split(" ").map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <div
                  className="appart-owner-profile-picture"
                  style={{
                    backgroundImage: `url(${logement.host.picture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
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
                    {index < parseInt(logement.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="appart-area">
            <div className="appart-description">
              <p className="appart-description-header">
                <span>Description</span>
                <i className="fa-solid fa-chevron-down"></i>
              </p>
              <p className="appart-description-content">
                {logement.description}
              </p>
            </div>
            <div className="appart-description">
              <p className="appart-description-header">
                <span>Equipements</span>
                <i className="fa-solid fa-chevron-down"></i>
              </p>
              <p className="appart-description-content">
                {logement.equipments.map((equipment, index) => (
                  <span key={index}>{equipment}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Appart;
