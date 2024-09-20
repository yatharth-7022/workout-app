import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./components_css/started-training.css";
import { Timer } from "./timer";
import { ExercisePopUp } from "./exercise-popup";
import { Data } from "../data";
import Pop_Up from "./pop-up";

export const StartedTraining = () => {
  const location = useLocation();
  const { exercises, trainingName } = location.state || {};
  const [isOpen, setIsOpen] = useState({});
  const [downArrow, setDownArrow] = useState("˅");
  const [addingASet, setAddingASet] = useState({});
  const [selectedIndices, setSelectedIndices] = useState({});
  const [exercisePopUp, setExercisePopUp] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedIndicesForExercises, setSelectedIndicesForExercises] =
    useState([]);
  const [finalExercises, setFinalExercises] = useState([]);
  const [jiggleInputs, setJiggleInputs] = useState({});
  const [popUpVisibility, setPopUpVisibility] = useState({});
  // console.log(selectedIndices);

  useEffect(() => {
    const storedAddingASet =
      JSON.parse(localStorage.getItem(`setData_${trainingName}`)) || {};
    const initialSets = {};
    finalExercises.forEach((exercise, index) => {
      initialSets[index] = Array.isArray(storedAddingASet[index])
        ? storedAddingASet[index]
        : Array.from({ length: exercise.sets }, () => ({
            weight: "",
            reps: "",
            id: Date.now() + Math.random(),
          }));
    });
    // console.log(finalExercises);
    setAddingASet(initialSets);
    // console.log("Initial addingASet:", initialSets);
  }, [finalExercises]);
  useEffect(() => {
    const initialArray1 = [...exercises];
    const storedExercises =
      JSON.parse(localStorage.getItem(`storedExercises_${trainingName}`)) || [];
    setSelectedExercises(storedExercises);
    setFinalExercises([...initialArray1, ...storedExercises]);
  }, [exercises]);

  useEffect(() => {
    const storedIndices =
      JSON.parse(localStorage.getItem(`completedExercises_${trainingName}`)) ||
      [];
    if (storedIndices) {
      setSelectedIndices(storedIndices);
    }
  }, []);

  function toggleDropDown(index) {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setDownArrow((prevArrow) => (isOpen[index] ? "˅" : "^"));
  }
  function handleAddingASet(index) {
    setAddingASet((prevState) => {
      const updatedState = {
        ...prevState,
        [index]: Array.isArray(prevState[index])
          ? [...prevState[index], { weight: "", reps: "", id: Date.now() }]
          : [{ weight: "", reps: "", id: Date.now() }],
      };
      // console.log("Updated addingASet after adding:", updatedState);
      return updatedState;
    });
  }

  function handleSetChange(index, setID, field, value) {
    setAddingASet((prevState) => {
      // console.log("Previous state for index", index, ":", prevState[index]);
      const currentSets = Array.isArray(prevState[index])
        ? prevState[index]
        : [];
      const updatedSets = currentSets.map((set) =>
        set.id === setID ? { ...set, [field]: value } : set
      );
      const updatedState = {
        ...prevState,
        [index]: updatedSets,
      };
      // console.log("Updated state for index", index, ":", updatedState[index]);
      localStorage.setItem(
        `setData_${trainingName}`,
        JSON.stringify(updatedState)
      );
      return updatedState;
    });
  }
  // useEffect(() => {
  //   const hehe = JSON.parse(localStorage.getItem("setData")) || [];
  //   setAddingASet(hehe);
  // }, []);
  function handleSetSelection(index, setID) {
    const currentSet = addingASet[index].find((set) => set.id === setID);
    if (currentSet.weight === "" || currentSet.reps === "") {
      setJiggleInputs((prev) => ({ ...prev, [setID]: true }));
      setTimeout(
        () => setJiggleInputs((prev) => ({ ...prev, [setID]: false })),
        300
      );
    } else {
      setSelectedIndices((prevArray) => {
        const newSelectedIndices = {
          ...prevArray,
          [index]: prevArray[index]?.includes(setID)
            ? prevArray[index].filter((id) => id !== setID)
            : [...(prevArray[index] || []), setID],
        };

        const dataToStore = JSON.stringify(newSelectedIndices);
        // console.log(dataToStore);
        localStorage.setItem(`completedExercises_${trainingName}`, dataToStore);
        // console.log(dataToStore);
        return newSelectedIndices;
      });
    }
  }

  function handleSwipe(index, setID, touchStartX, touchEndX) {
    if (touchEndX - touchStartX > 100) {
      const afterRemoval = setAddingASet((prevState) => ({
        ...prevState,
        [index]: prevState[index].filter((set) => set.id !== setID),
      }));
    }
  }
  function handleExerciseCardPop() {
    setExercisePopUp(!exercisePopUp);
  }
  function handleCheckBoxClick(index) {
    setSelectedIndicesForExercises((prevArray) =>
      prevArray.includes(index)
        ? prevArray.filter((i) => i !== index)
        : [...prevArray, index]
    );
  }
  function handleAdditionOfExercises() {
    handleExerciseCardPop();
    const newExercises = selectedIndicesForExercises.map((i) => Data[i]);
    const updatedExercises = [...selectedExercises, ...newExercises];
    setSelectedExercises(updatedExercises);
    console.log(updatedExercises);
    localStorage.setItem(
      `storedExercises_${trainingName}`,
      JSON.stringify(updatedExercises)
    );
    setFinalExercises((prevExercises) => [...prevExercises, ...newExercises]);
    setSelectedIndicesForExercises([]);
  }
  // console.log("we are selected exercises", selectedExercises);

  // console.log(finalExercises);
  function handlePopCard(index) {
    setPopUpVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
        {finalExercises.map((exercise, index) => (
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
                {popUpVisibility[index] ? (
                  <Pop_Up
                    handlePopCard={() => handlePopCard(index)}
                    exerciseName={exercise.exerciseName}
                    exerciseImage={exercise.exerciseImage}
                  />
                ) : null}
                <img
                  onClick={() => handlePopCard(index)}
                  src={exercise.exerciseImage}
                  alt="img displayed here"
                />
                <div className="question-mark-container">?</div>
              </div>
              <div className="exercise-info-container-started-training">
                <h2>{exercise.exerciseName}</h2>

                <p>{`${
                  selectedIndices[index] ? selectedIndices[index].length : "0"
                }/${addingASet[index] ? addingASet[index].length : "0"}`}</p>
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
                      selectedIndices[index]?.includes(item.id) &&
                      item.weight > 0 &&
                      item.reps > 0
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
                      checked={
                        selectedIndices[index]?.includes(item.id) &&
                        item.weight > 0 &&
                        item.reps > 0
                      }
                      onChange={() => {}}
                    />
                    <input
                      type="number"
                      placeholder={0}
                      value={item.weight}
                      className={jiggleInputs[item.id] ? "jiggle" : ""}
                      onChange={(e) =>
                        handleSetChange(
                          index,
                          item.id,
                          "weight",
                          e.target.value
                        )
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                    {/* {console.log(addingASet)} */}
                    KG
                    <input
                      type="number"
                      placeholder={0}
                      value={item.reps}
                      className={jiggleInputs[item.id] ? "jiggle" : ""}
                      onChange={(e) =>
                        handleSetChange(index, item.id, "reps", e.target.value)
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
        <div className="add-exercise-button-container-started-training">
          <button onClick={handleExerciseCardPop}>
            <svg
              style={{ margin: 0 }}
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="20px"
              width="20px"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
            Add Exercises
          </button>
        </div>
        {exercisePopUp ? (
          <div
            className="exercise-popup-overlay"
            onClick={handleExerciseCardPop}
          >
            <div
              className="exercise-popup-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {Data.map((item, index) => {
                return (
                  <ExercisePopUp
                    key={index}
                    name={item.exerciseName}
                    bodypart={item.bodyPart}
                    logo_image={item.logoImage}
                    ex_image={item.exerciseImage}
                    isPopupCardClicked={selectedIndicesForExercises.includes(
                      index
                    )}
                    myfunc={() => handleCheckBoxClick(index)}
                  />
                );
              })}

              {selectedIndicesForExercises.length > 0 ? (
                <button
                  onClick={handleAdditionOfExercises}
                  className="add-selected-exercises-button"
                >
                  ADD {selectedIndicesForExercises.length} EXERCISES
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
