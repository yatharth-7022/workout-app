import React from "react";
import Slideshow from "../landing page components/slideshow";
import NavBar from "../landing page components/navbar";
import ".././components/components_css/add-button.css";
import { Link } from "react-router-dom";
import { AddExercise } from "./add-exercise";
import { useState } from "react";
export const Custom = () => {
  const [addNewButton, setAddNewButton] = useState(true);

  function handleNewButtonClick() {
    setAddNewButton(!addNewButton);
  }
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/navbar">
        <NavBar />
      </Link>
      <Slideshow />
      <Link to="add-exercise">
        <div className="add-button-container">
          <button onClick={handleNewButtonClick} id="add-button">
            + NEW
          </button>
        </div>
      </Link>
    </div>
  );
};
