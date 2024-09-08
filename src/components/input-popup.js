import React from "react";
import "./components_css/input-popup.css";
import { useState } from "react";

export const InputPopUp = ({ handleInputBox, handleNewTraining }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSaveButton() {
    handleNewTraining(inputValue);
    let initalArray = [{ name: inputValue }];
    let newArray = [];
    if (localStorage.getItem("name")) {
      newArray = JSON.parse(localStorage.getItem("name"));
    }
    let finalArray = [initalArray, ...newArray];
    localStorage.setItem("name", JSON.stringify(finalArray));
    const hehe = JSON.parse(localStorage.getItem("name"));
    console.log(hehe, "xx");
    handleInputBox();
  }

  return (
    <div className="popup-overlay" onClick={handleInputBox}>
      <div
        className="popup-content show"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="input-box-container">
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="cancel-save-container">
          <button onClick={handleInputBox}>Cancel</button>
          <button onClick={handleSaveButton} id="save-button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
