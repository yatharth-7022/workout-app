import { Link } from "react-router-dom";
import ".././components/components_css/add-exercise.css";
import { useState } from "react";
import { Custom } from "./Custom";
import { useNavigate } from "react-router-dom";
export const AddExercise = () => {
  const Navigate = useNavigate();
  const [showCustomPage, setShowCustomPage] = useState(false);
  console.log(window, "line 9");
  function handleBackButtonClick() {
    Navigate("/");
    // window.location.replace("www.sarvh.com");
  }
  return (
    <div className="header2-container">
      <div className="arrow-button-container">
        <button onClick={handleBackButtonClick} className="back-button">
          <svg
            style={{ height: "fit-content", margin: "0" }}
            fill="#ffffff"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="30px"
            width="auto"
          >
            <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
          </svg>
        </button>
      </div>
      <div className="header-content">
        <div className="title-container">
          <h1 style={{ color: "white", margin: "0px" }}>New training</h1>
          <div className="second-svg">
            <svg
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
  );
};
