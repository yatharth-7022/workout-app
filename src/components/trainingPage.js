import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./components_css/trainingPage.css";
import Slideshow from "../landing page components/slideshow";

export const TrainingPage = ({ handleNewButtonClick }) => {
  const [trainingData, setTrainingData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const storedTrainingData = JSON.parse(
      localStorage.getItem("trainingData") || "[]"
    );
    setTrainingData(storedTrainingData);
    if (location.state && location.state.updatedTraining) {
      const { dayIndex, exercises } = location.state.updatedTraining;
      const updatedData = [...storedTrainingData];
      updatedData[dayIndex] = {
        ...updatedData[dayIndex],
        exercises: exercises,
      };
      setTrainingData(updatedData);
      localStorage.setItem("trainingData", JSON.stringify(updatedData));
      const hehe = JSON.parse(localStorage.getItem("trainingData"));
      console.log(hehe);
    }
  }, [location]);
  return (
    <div className="training-container">
      {trainingData.length > 0 ? (
        trainingData.map((item, index) => (
          <div className="item-big-container" key={index}>
            <div className="training-name-container">
              <h1>{item.name}</h1>
              <p>{item.exercises ? item.exercises.length : 0} exercises</p>
            </div>
            <div className="all-info-container">
              {item.exercises &&
                item.exercises.map((exercise, idx) => (
                  <div className="all-info">
                    <div className="exercise-img-container">
                      <img src={exercise.exerciseImage} alt="" />
                      <div className="exercise-info-container">
                        <p key={idx}>{exercise.exerciseName}</p>
                      </div>
                    </div>
                    <div className="sets-reps-container">
                      <p key={idx}>
                        {exercise.sets}x{exercise.reps}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <Slideshow />
      )}
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "20px",
        }}
        to="/add-exercise"
        state={{ dayIndex: trainingData.length }}
      >
        <button className="new-button" onClick={handleNewButtonClick}>
          + NEW
        </button>
      </Link>
    </div>
  );
};
