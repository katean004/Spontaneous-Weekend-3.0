import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
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
  );
}

export default Navbar;
