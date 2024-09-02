import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <button className="navbar-button">CUSTOM</button>
          </Link>
        </li>
        <li>
          <Link to="/exercises" className="navbar-link">
            <button className="navbar-button">EXERCISES</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
