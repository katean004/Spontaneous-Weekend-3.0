import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav ml-auto">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/favorites"
          className={
            location.pathname === "/favorites" ? "nav-link active" : "nav-link"
          }
        >
          Favorites
        </Link>
      </li>
      <li className="navitem">
        <Link
          to="/restaurant"
          className={
            location.pathname === "/restaurant" ? "nav-link active" : "nav-link"
          }
        >
          Restaurant
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/movie"
          className={
            location.pathname === "/movie" ? "nav-link active" : "nav-link"
          }
        >
          Movies
        </Link>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Navbar;
