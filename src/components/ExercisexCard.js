// ExercisexCard.js

import React from "react";
import "./components_css/exercise-card.css";
import { useState } from "react";
import Pop_Up from "./pop-up";

export const ExercisexCard = ({
  name,
  bodypart,
  logo_image,
  uniquekey,
  ex_image,
}) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState({});
  const lodacontainer = {
    marginTop: "100px",
    backgroundColor: "green",
  };

  function handlePopCard() {
    setIsPopUpVisible(!isPopUpVisible);
    setSelectedExercise({ name, ex_image });
  }

  return (
    <div>
      {isPopUpVisible ? (
        <Pop_Up
          lodacontainer={lodacontainer}
          handlePopCard={handlePopCard}
          exerciseName={selectedExercise.name}
          exerciseImage={selectedExercise.ex_image}
        />
      ) : (
        ""
      )}
      <div onClick={handlePopCard} className="card-container">
        <div className="img-container">
          <img src={logo_image} alt="no image" />
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
    </div>
  );
};
