import React from "react";
import { useState } from "react";
import "./components_css/before-starting.css";

export const BeforeStarting = () => {
  return (
    <div className="before-starting-container">
      <div className="training-name-container-before-starting">
        training name here with back button
      </div>
      <div className="exercise-name-container-before-starting">
        <div className="exercise-name-card-before-starting">
          <div className="img-container-before-starting">
            <img src="" alt="img displayed here" />
          </div>
          <div className="exercise-info-container-before-starting">
            <h2>mapping exercise name over here</h2>
            <p>map the no of sets</p>
          </div>
        </div>
        <div className="start-button-container">
          <button className="start-button">START</button>
        </div>
      </div>
    </div>
  );
};
