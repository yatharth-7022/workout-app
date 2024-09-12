import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./components_css/before-starting.css";
import "./components_css/add-exercise.css";
import { NavLink } from "react-router-dom";
import Pop_Up from "./pop-up";
export const BeforeStarting = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const { dayIndex, trainingName, exercises } = location.state || {};
  const [selectedExercise, setSelectedExercise] = useState(null);
  // console.log(exercises);
  const [isExercisePopupVisible, setIsExercisePopupVisible] = useState(false);
  function handlePopCard(exercise) {
    setSelectedExercise(exercise);
    setIsExercisePopupVisible(!isExercisePopupVisible);
  }
  function handleStart() {
    Navigate("/started-training", {
      state: { exercises: exercises, trainingName: trainingName },
    });
  }
  if (!exercises) {
    return <div className="no-exercise-error">No exercises added</div>;
  }

  return (
    <div className="before-starting-container">
      <div className="training-name-container-before-starting">
        <div className="training-name-content-before-starting">
          <h1>{trainingName}</h1>
          <p>{exercises.length} exercises</p>
        </div>
        <div className="arrow-button-container">
          <NavLink to="/">
            <button className="back-button">
              <svg
                style={{ height: "fit-content", margin: "0" }}
                fill="#ffffff"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="30px"
                width="30px"
              >
                <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="exercise-name-container-before-starting">
        {exercises.map((exercise, index) => (
          <div
            className="exercise-name-card-before-starting"
            onClick={() => handlePopCard(exercise)}
          >
            <div className="img-container-before-starting">
              <img src={exercise.exerciseImage} alt="img displayed here" />
            </div>
            <div className="exercise-info-container-before-starting">
              <h2>{exercise.exerciseName}</h2>
              <p>{exercise.sets} sets</p>
            </div>
          </div>
        ))}
        {isExercisePopupVisible ? (
          <Pop_Up
            handlePopCard={handlePopCard}
            exerciseName={selectedExercise.exerciseName}
            exerciseImage={selectedExercise.exerciseImage}
          />
        ) : (
          ""
        )}
        <div className="start-button-container">
          <button className="start-button" onClick={handleStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};
