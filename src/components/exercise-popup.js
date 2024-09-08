import React from "react";
import { Data } from "../data";
import "./components_css/exercise-popup.css";
import { useState } from "react";

export const ExercisePopUp = ({
  ex_image,
  bodypart,
  name,
  isPopupCardClicked,
  myfunc,
}) => {
  return (
    <>
      <div onClick={myfunc} className="exercise-popup-card">
        <input type="checkbox" checked={isPopupCardClicked} onChange={myfunc} />
        <div className="exercise-popup-card-image-container">
          <img src={ex_image} alt="Exercise Image" />
        </div>
        <div className="exercise-popup-card-text-container">
          <h1>{name}</h1>
          <p>{bodypart}</p>
        </div>
      </div>
    </>
  );
};
