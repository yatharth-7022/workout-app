import React from "react";
import { Link } from "react-router-dom";
import ".././components/components_css/navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "custom-container active-link" : "custom-container"
            }
          >
            <button className="navbar-button">
              CUSTOM
              <svg
                fill="#ffffff"
                viewBox="0 0 512 512"
                height="20px"
                width="20px"
                style={{
                  verticalAlign: "middle",
                  margin: 0,
                }}
              >
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exercises"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "custom-container active-link" : "custom-container"
            }
          >
            <button className="navbar-button">
              EXERCISES
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                width="30px"
                height="30px"
                style={{
                  verticalAlign: "middle",
                  margin: 0,
                }}
              >
                <path
                  d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
