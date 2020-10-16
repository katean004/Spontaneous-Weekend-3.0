import React from "react";
import "./Favorite.css";
import Fade from "../Fade/Fade"
import {v4 as uuidv4} from "uuid";

function Favorites(props) {
  // ============= Test to see what as in here =============
  console.log(props.databaseInfo);

  return (
    <div>
      <h1 className="favorite__header">Favorites</h1>
      <button className = "favorites__refresh"onClick={()=> window.location.reload(true)}>Refresh Favorites</button>
      {props.databaseInfo.length || props.foodDatabase.length ? (
        <div className="container-fluid">
          <div className=" movie__row">
            <h1 className="favorite__header">Movies</h1>
            {props.databaseInfo.map(movie => (
              // Needed for differentiation
              <Fade key = {uuidv4()}>
              <div className="movie__SubRow fade-in2" key={movie._id}>
                <div className="movie__title">{movie.title}</div>
                <div className="movie__rating">Rating: {movie.rating}</div>
                <div className="movie__description">{movie.description}</div>
              </div>
              </Fade>
            ))}
          </div>

          <div className=" restaurant__row ">
            <h1 className="favorite__header">Restaurants</h1>
            {props.foodDatabase.map(food => (
              // Needed for differentiation
              <Fade key={uuidv4()}>
              <div className="restaurant__SubRow fade-in2" key={food._id}>
                <div className="movie__title">{food.name}</div>
                <div className="movie__rating">Address: {food.address}</div>
              </div>
              </Fade>
            ))}
          </div>

        </div>
      ) : (
        <div className="favorites__placholder__container">
          <div className="favorites__placeholder">
            <p className="placeholder__paragraph">Hello! It seems like you don't have any favorites yet!</p>
          </div>
        </div>
      )}
      {/* The for loop/ for each will be inside here. Use a component here.*/}
    </div>
  );
}

// ================== Working on this part =================

export default Favorites;
