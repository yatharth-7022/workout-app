import React from "react";
import Slideshow from "../landing page components/slideshow";
import ".././components/components_css/add-button.css";
export const Custom = () => {
  return (
    <div>
      <Slideshow />
      <div className="add-button-container">
        <button id="add-button">+ NEW</button>
      </div>
    </div>
  );
};
