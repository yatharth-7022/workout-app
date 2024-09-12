import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./components_css/started-training.css";

export const StartedTraining = () => {
  const location = useLocation();
  const { exercises, trainingName } = location.state || {};
  {
    // console.log(exercises, trainingName);
  }
  const [isOpen, setIsOpen] = useState({});
  const [downArrow, setDownArrow] = useState("˅");
  function toggleDropDown(index) {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setDownArrow((prevArrow) => (isOpen[index] ? "˅" : "^"));
  }
  return (
    <div className="started-training-container">
      <div className="training-name-container-started-training">
        <div className="training-name-content-started-training">
          <h1>{trainingName}</h1>
        </div>
        <div className="arrow-button-container">
          {/* <NavLink to="/before-starting"> */}
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
          {/* </NavLink> */}
        </div>
      </div>
      <div className="exercise-name-container-started-training">
        {exercises.map((exercise, index) => (
          <div
            className={`exercise-name-card-started-training ${
              isOpen[index] ? "expanded" : ""
            }`}
          >
            <div className="exercise-sets-name-img">
              <button
                className="drop-down-button"
                onClick={() => toggleDropDown(index)}
              >
                {downArrow}
              </button>
              <div className="img-container-started-training">
                <img src={exercise.exerciseImage} alt="img displayed here" />
              </div>
              <div className="exercise-info-container-started-training">
                <h2>{exercise.exerciseName}</h2>
                <p>{exercise.sets} sets</p>
              </div>
            </div>
            <div className="kg-and-reps-input-container-started-training">
              <div className="kg-and-reps-input-container">
                <input
                  type="number"
                  placeholder={0}
                  //   value={item.weight}
                  //   onChange={(e) => {
                  //     setAddingASet((prevState) => ({
                  //       ...prevState,
                  //       [index]: prevState[index].map((i, set) =>
                  //         i === setIndex
                  //           ? { ...set, weight: e.target.value }
                  //           : set
                  //       ),
                  //     }));
                  //   }}
                />
                KG
                <input
                  type="number"
                  placeholder={0}
                  //   onChange={(e) =>
                  //     setAddingASet((prevState) => ({
                  //       ...prevState,
                  //       [index]: prevState[index].map((i, set) =>
                  //         i === setIndex
                  //           ? { ...set, reps: e.target.value }
                  //           : set
                  //       ),
                  //     }))
                  //   }
                />
                REPS
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
