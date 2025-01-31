import React from "react";
import "./Appart.scss";
import { useParams } from "react-router";

function Appart() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <main>
        <div className="appart">
          <div>
            <img src="https://picsum.photos/800/400" alt="Image test" />
          </div>
          <div className="appart-header">
            <div className="appart-title">
              <h1>Cozy blablabla</h1>
              <h2>Blablabla</h2>
              <div className="appart-tag">
                <span>Cozy</span>
                <span>Crazy</span>
                <span>Paris 10</span>
              </div>
            </div>
            <div className="appart-owner">
              <div className="appart-owner-details">
                <h3 className="appart-owner-name">
                  <span>Alexandre</span>
                  <span>Dumas</span>
                </h3>
                <div className="appart-owner-profile-picture"></div>
              </div>
              <div className="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
                <span>☆</span>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                obcaecati id numquam enim quos inventore sapiente vero,
                cupiditate at eos sint? Minima quo soluta, officiis
                reprehenderit corrupti maxime dignissimos aliquid?
              </p>
            </div>
            <div className="appart-description">
              <p className="appart-description-header">
                <span>Description</span>
                <i className="fa-solid fa-chevron-down"></i>
              </p>
              <p className="appart-description-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                obcaecati id numquam enim quos inventore sapiente vero,
                cupiditate at eos sint? Minima quo soluta, officiis
                reprehenderit corrupti maxime dignissimos aliquid?
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Appart;
