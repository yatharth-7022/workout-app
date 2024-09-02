import React from "react";
import "./components_css/exercise-card.css";

export const ExercisexCard = ({ name, bodypart, image }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={image} alt="no image" />
      </div>
      <div className="card-details">
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{bodypart}</p>
        </div>
      </div>
    </div>
  );
};
