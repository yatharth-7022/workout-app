import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./components_css/started-training.css";
import { Timer } from "./timer";

export const StartedTraining = () => {
  const location = useLocation();
  const { exercises, trainingName } = location.state || {};
  // {
  //   console.log(exercises, trainingName);
  // }
  const [isOpen, setIsOpen] = useState({});
  const [downArrow, setDownArrow] = useState("˅");
  const [addingASet, setAddingASet] = useState({});
  const [selectedIndices, setSelectedIndices] = useState({});
  function toggleDropDown(index) {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setDownArrow((prevArrow) => (isOpen[index] ? "˅" : "^"));
  }
  function handleAddingASet(index) {
    setAddingASet((prevState) => ({
      ...prevState,
      [index]: prevState[index]
        ? [...prevState[index], { weight: "", reps: "", id: Date.now() }]
        : [{ weight: "", reps: "", id: Date.now() }],
    }));
  }
  function handleSetSelection(index, setID) {
    setSelectedIndices((prevArray) => ({
      ...prevArray,
      [index]: prevArray[index]?.includes(setID)
        ? prevArray[index].filter((id) => id !== setID)
        : [...(prevArray[index] || []), setID],
    }));
  }
  function handleSwipe(index, setID, touchStartX, touchEndX) {
    if (touchEndX - touchStartX > 100) {
      setAddingASet((prevState) => ({
        ...prevState,
        [index]: prevState[index].filter((set) => set.id !== setID),
      }));
    }
  }
  return (
    <div className="started-training-container">
      <div className="training-name-container-started-training">
        <div className="finish-button-started-training">
          <button>FINISH</button>
        </div>
        <div className="swipe-instruction">
          <p>*Swipe right to remove set</p>
        </div>
        <div className="training-name-content-started-training">
          <h1>{trainingName}</h1>
          {<Timer />}
        </div>

        <div className="arrow-button-container-started-training">
          {/* <NavLink to="/before-starting"> */}
          <button className="back-button-started-training">
            <svg
              style={{ height: "fit-content", margin: "0" }}
              fill="#ffffff"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="25px"
              width="25px"
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
                ▼
              </button>
              <div className="img-container-started-training">
                <img src={exercise.exerciseImage} alt="img displayed here" />
              </div>
              <div className="exercise-info-container-started-training">
                <h2>{exercise.exerciseName}</h2>

                <p>{exercise.sets} sets</p>
              </div>
            </div>
            {addingASet[index]?.map((item, setID) => {
              var touchStartX;
              var touchEndX;
              return (
                <div
                  key={item.id}
                  className="kg-and-reps-input-container-started-training"
                >
                  <div
                    className={`kg-and-reps-input-content-started-training ${
                      selectedIndices[index]?.includes(item.id)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleSetSelection(index, item.id)}
                    onTouchStart={(e) =>
                      (touchStartX = e.targetTouches[0].clientX)
                    }
                    onTouchMove={(e) =>
                      (touchEndX = e.targetTouches[0].clientX)
                    }
                    onTouchEnd={() =>
                      handleSwipe(index, item.id, touchStartX, touchEndX)
                    }
                  >
                    <input
                      className="input-type-checked"
                      type="checkbox"
                      checked={selectedIndices[index]?.includes(item.id)}
                      onChange={() => {}}
                    />
                    <input
                      type="number"
                      placeholder={0}
                      value={item.weight}
                      onChange={(e) => {
                        setAddingASet((prevState) => ({
                          ...prevState,
                          [index]: prevState[index].map((set) =>
                            set.id === item.id
                              ? { ...set, weight: e.target.value }
                              : set
                          ),
                        }));
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                    KG
                    <input
                      type="number"
                      placeholder={0}
                      onChange={(e) =>
                        setAddingASet((prevState) => ({
                          ...prevState,
                          [index]: prevState[index].map((set) =>
                            set.id === item.id
                              ? { ...set, reps: e.target.value }
                              : set
                          ),
                        }))
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                    REPS
                  </div>
                </div>
              );
            })}

            <div className="add-set-button-started-training">
              <button onClick={() => handleAddingASet(index)}>
                <svg
                  style={{ margin: 0 }}
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="15px"
                  width="15px"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                </svg>
                Add a set
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
