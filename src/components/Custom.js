import React from "react";
import Slideshow from "../landing page components/slideshow";
import NavBar from "../landing page components/navbar";
import "./components_css/trainingPage.css";
import { Link } from "react-router-dom";
import { AddExercise } from "./add-exercise";
import { useState } from "react";
import { TrainingPage } from "./trainingPage";
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
      <TrainingPage handleNewButtonClick={handleNewButtonClick} />
    </div>
  );
};
