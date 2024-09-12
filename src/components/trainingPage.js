import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import "./components_css/trainingPage.css";
import Slideshow from "../landing page components/slideshow";
import "./components_css/before-starting.css";

export const TrainingPage = ({ handleNewButtonClick }) => {
  const [trainingData, setTrainingData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

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
    } else {
      setTrainingData(storedTrainingData);
    }
  }, [location]);
  function handleTrainingClick(item, index) {
    navigate("/before-starting", {
      state: {
        trainingName: item.name,
        dayIndex: index,
        exercises: item.exercises,
      },
    });
  }

  return (
    <div className="training-container">
      {trainingData.length > 0 ? (
        <div className="custom-heading-container-exercises">
          <h1>Custom</h1>{" "}
        </div>
      ) : (
        ""
      )}
      <div className="all-exercise-card-container">
        {trainingData.length > 0 ? (
          trainingData.map((item, index) =>
            item ? (
              <div
                className="item-big-container"
                key={index}
                onClick={() => handleTrainingClick(item, index)}
              >
                <div className="training-name-container">
                  <h1>{item.name}</h1>
                  <p>{item.exercises ? item.exercises.length : 0} exercises</p>
                </div>
                <div className="all-info-container">
                  {item.exercises &&
                    item.exercises.map((exercise, idx) => (
                      <div className="all-info" key={idx}>
                        <div className="exercise-img-container">
                          <img src={exercise.exerciseImage} alt="" />
                          <div className="exercise-info-container">
                            <p>{exercise.exerciseName}</p>
                          </div>
                        </div>
                        <div className="sets-reps-container">
                          <p>{exercise.sets} sets</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : null
          )
        ) : (
          <Slideshow />
        )}
      </div>
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
