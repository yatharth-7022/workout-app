import React from "react";
import "./components_css/pop-up.css";

const Pop_Up = ({ handlePopCard }) => {
  return (
    <div className="pop-up-overlay" onClick={handlePopCard}>
      <div className="pop-up-content" onClick={(e) => e.stopPropagation()}>
        <h2> Title</h2>
        <p>my pop up</p>
        <button onClick={handlePopCard}>Close</button>
      </div>
    </div>
  );
};

export default Pop_Up;
