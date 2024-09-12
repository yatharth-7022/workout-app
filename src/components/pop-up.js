import React from "react";
import "./components_css/pop-up.css";

const Pop_Up = ({ handlePopCard, exerciseName, exerciseImage }) => {
  return (
    <div className="pop-up-overlay" onClick={handlePopCard}>
      <div className="pop-up-content" onClick={(e) => e.stopPropagation()}>
        <div className="header-container-popup">
          <h1>{exerciseName}</h1>
          <img
            src={exerciseImage}
            alt="no img"
            style={{ width: "90%", height: "auto" }}
          />
        </div>
        <div className="instructions">
          <h2 style={{ marginTop: "20px" }}>Instructions</h2>

          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 10H7v-2h5v2zm5-4H7V8h10v2z"></path>
          </svg>
        </div>
        <div style={{ marginTop: "10px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          molestias odit? Sed, quibusdam deserunt saepe delectus architecto aut
          laudantium rem molestiae sit consequuntur sunt non eos, cum mollitia?
          Id, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci aut quos maxime labore nesciunt ipsa, odit eos repellat ad
          quibusdam non deserunt nulla aspernatur aliquid assumenda alias
          distinctio ratione libero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam quos error accusantium possimus? Nam animi
          deleniti laborum maxime ab iure nisi vel velit sed, architecto dolorem
          quo dolor maiores neque.
        </div>
      </div>
    </div>
  );
};

export default Pop_Up;
