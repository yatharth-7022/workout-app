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
              name={item.exerciseName}
              bodypart={item.bodyPart}
              image={item.Image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exercises;
