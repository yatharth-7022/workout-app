import React from "react";
import { ExercisexCard } from "./ExercisexCard";
import { Data } from "../data";
import { Link } from "react-router-dom";
import NavBar from "../landing page components/navbar";
const Exercises = () => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Link style={{ textDecoration: "none" }} to="/navbar">
        <NavBar />
      </Link>
      <header style={{ margin: "20px 0px 15px 10px", fontWeight: "700" }}>
        EXERCISES
      </header>
      <div>
        {Data.map((item, index) => {
          return (
            <ExercisexCard
              uniquekey={index}
              name={item.exerciseName}
              bodypart={item.bodyPart}
              logo_image={item.logoImage}
              ex_image={item.exerciseImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exercises;
