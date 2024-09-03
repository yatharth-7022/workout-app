import React from "react";
import { ExercisexCard } from "./ExercisexCard";
import { Data } from "../data";

const Exercises = () => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <header style={{ margin: "20px 0px 15px 10px" }}>EXERCISES</header>
      <div>
        {Data.map((item, index) => {
          return (
            <ExercisexCard
              key={index}
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
