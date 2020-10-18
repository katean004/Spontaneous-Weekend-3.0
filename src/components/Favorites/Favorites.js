import React from "react";
import "./Favorite.css";
import Fade from "../Fade/Fade";
import { v4 as uuidv4 } from "uuid";

function Favorites(props) {
  // ============= Test to see what as in here =============
  console.log(props.databaseInfo);

  return (
    <div className="mainContainer">
      <h1 className="favorite__header">Check out some crowd favorites</h1>
      <button
        className="favorites__refresh"
        onClick={() => window.location.reload(false)}
      >
        Refresh Favorites
      </button>
      {props.databaseInfo.length || props.foodDatabase.length ? (
        <div className="container-fluid subContainer">
          <div className=" movie__row">
            <h1 className="favorite__header">Favorite Movies</h1>
            <button
              className="favorites__refresh sub__fave"
              type="button"
              data-toggle="collapse"
              data-target="#collapseMovie"
              aria-expanded="false"
              aria-controls="collapseMovie"
            >
              See your list of favorite movies
            </button>
            <div className="collapse" id="collapseMovie">
              {props.databaseInfo.map(movie => (
                // Needed for differentiation
                <Fade key={uuidv4()}>
                  <div className="movie__SubRow fade-in2" key={movie._id}>
                    <div className="movie__title">{movie.title}</div>
                    <div className="movie__rating">Rating: {movie.rating}</div>
                    <div className="movie__description">
                      {movie.description}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          <div className=" restaurant__row ">
            <h1 className="favorite__header">Favorite Restaurants</h1>
            <button
              className="favorites__refresh sub__fave"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFood"
              aria-expanded="false"
              aria-controls="collapseFood"
            >
               See the list of favorite restaurants
            </button>
            <div className="collapse" id="collapseFood">
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
        </div>
      ) : (
        <div className="favorites__placholder__container">
          <div className="favorites__placeholder">
            <p className="placeholder__paragraph">
              Hello! It seems like you don't have any favorites yet!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
