import { Link, useLocation } from "react-router-dom";
import ".././components/components_css/add-exercise.css";
import { useState } from "react";
import { Custom } from "./Custom";
import { useNavigate } from "react-router-dom";
import { InputPopUp } from "./input-popup";
import { ExercisePopUp } from "./exercise-popup";
import { Data } from "../data";
import "./components_css/exercise-popup.css";
import { TrainingPage } from "./trainingPage";
export const AddExercise = () => {
  const [inputBoxPopUp, setInputBoxPopUp] = useState(false);
  const [newTraining, setNewTraining] = useState("New training");
  const [exercisePopUp, setExercisePopUp] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [addingASet, setAddingASet] = useState({});
  const location = useLocation();
  const Navigate = useNavigate();

  const dayIndex = location.state ? location.state.dayIndex : 0;
  function handleBackButtonClick() {
    Navigate("/");
  }
  function handleInputBox() {
    setInputBoxPopUp(!inputBoxPopUp);
  }

  function handleExerciseCardPop() {
    setExercisePopUp(!exercisePopUp);
  }
  function handleCheckBoxClick(index) {
    setSelectedIndices((prevArray) =>
      prevArray.includes(index)
        ? prevArray.filter((i) => i !== index)
        : [...prevArray, index]
    );
  }
  function handleAdditionOfExercises() {
    handleExerciseCardPop();
    const updatedExercises = selectedIndices.map((i) => Data[i]);
    setSelectedExercises(updatedExercises);
    console.log(updatedExercises);
  }
  function handleAddingASet(exerciseIndex) {
    setAddingASet((prevState) => ({
      ...prevState,
      [exerciseIndex]: prevState[exerciseIndex]
        ? [...prevState[exerciseIndex], { weight: "", reps: "" }]
        : [{ weight: "", reps: "" }],
    }));
  }
  function handleSave() {
    const updatedTraining = {
      name: newTraining,
      exercises: selectedExercises.map((exercise) => ({
        ...exercise,
        sets: addingASet[exercise.id] ? addingASet[exercise.id].length : 0,
        reps: addingASet[exercise.id] ? addingASet[exercise.id].length : 0,
      })),
    };
    const storedTrainingData = JSON.parse(
      localStorage.getItem("trainingData") || "[]"
    );
    storedTrainingData[dayIndex] = updatedTraining;
    localStorage.setItem("trainingData", JSON.stringify(storedTrainingData));
    Navigate("/", {
      state: {
        updatedTraining: { dayIndex, exercises: updatedTraining.exercises },
      },
    });
  }
  return (
    <>
      {inputBoxPopUp ? (
        <InputPopUp
          handleInputBox={handleInputBox}
          handleNewTraining={setNewTraining}
        />
      ) : (
        ""
      )}
      {exercisePopUp ? (
        <div className="exercise-popup-overlay" onClick={handleExerciseCardPop}>
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
                  isPopupCardClicked={selectedIndices.includes(index)}
                  myfunc={() => handleCheckBoxClick(index)}
                />
              );
            })}

            {selectedIndices.length > 0 ? (
              <button
                onClick={handleAdditionOfExercises}
                className="add-selected-exercises-button"
              >
                ADD {selectedIndices.length} EXERCISES
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="new-training-overlay">
        <div className="header2-container">
          <div className="arrow-button-container">
            <button onClick={handleBackButtonClick} className="back-button">
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
          </div>
          <div className="header-content">
            <div className="title-container">
              <h1 style={{ color: "white", margin: "0px" }}>{newTraining}</h1>
              <div className="second-svg">
                <svg
                  onClick={handleInputBox}
                  style={{ margin: "0", padding: "0", border: "0" }}
                  className="custom-icon"
                  fill="white"
                  viewBox="0 0 512 512"
                  height="25px"
                  width="25px"
                >
                  <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
                </svg>
              </div>
            </div>
            <p style={{ color: "white", margin: "0px" }}>Edit mode</p>
          </div>
        </div>
        <div className="added-exercises-container">
          {selectedExercises.map((item, index) => (
            <div className="added-exercises-card">
              <div className="img-content-container">
                <div className="added-exercise-img-container">
                  <img
                    style={{ height: " auto", width: "100px" }}
                    src={item.exerciseImage}
                    alt="no image found"
                  />
                </div>
                <h1 style={{ color: "black" }}>{item.exerciseName}</h1>
              </div>

              {addingASet[index]?.map((item, setIndex) => {
                return (
                  <div className="kg-and-reps-input-container">
                    <input
                      type="number"
                      placeholder={item.weight}
                      value={item.weight}
                      onChange={(e) => {
                        setAddingASet((prevState) => ({
                          ...prevState,
                          [index]: prevState[index].map((i, set) =>
                            i === setIndex
                              ? { ...set, weight: e.target.value }
                              : set
                          ),
                        }));
                      }}
                    />
                    KG
                    <input
                      type="number"
                      placeholder={item.reps}
                      onChange={(e) =>
                        setAddingASet((prevState) => ({
                          ...prevState,
                          [index]: prevState[index].map((i, set) =>
                            i === setIndex
                              ? { ...set, reps: e.target.value }
                              : set
                          ),
                        }))
                      }
                    />
                    REPS
                  </div>
                );
              })}

              <div className="add-set-button">
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
        <div className="add-exercise-button-container">
          <button onClick={handleExerciseCardPop} className="add-exercise-but">
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
            Add exercises
          </button>
        </div>
      </div>
      <div className="save-exercises-button-container">
        <button onClick={handleSave} className="save-exercises-button">
          SAVE
        </button>
      </div>
    </>
  );
};
