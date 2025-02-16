import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleVisibility}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${visible ? "up" : "down"}`}></i>
      </div>
      <div className={`collapse-content ${visible ? "visible" : ""}`}>
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default Collapse;
