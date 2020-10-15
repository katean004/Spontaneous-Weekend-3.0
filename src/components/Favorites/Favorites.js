import React from "react";
import "./Favorite.css";

function Favorites(props) {
  // ============= Test to see what as in here =============
  console.log(props.databaseInfo);

  return (
    <div>
      <h1 className="favorite__header">Favorites</h1>
      {props.databaseInfo.length ? (
        <div className="container-fluid">
          <div className="column movie__row">
            <h1 className="favorite__header">Movies</h1>
            {props.databaseInfo.map(movie => (
              // Needed for differentiation
              <div className="movie__SubRow" key={movie._id}>
                <div className="movie__rating">{movie.rating}</div>
                <div className="movie__title">{movie.title}</div>
                <div className="movie__description">{movie.description}</div>
              </div>
            ))}
          </div>
          <div className="column restaurant__row">
            <h1 className="favorite__header">Restaurants</h1>
            {props.databaseInfo.map(movie => (
              // Needed for differentiation
              <div className="restaurant__SubRow" key={movie._id}>
                <div className="1">{movie.rating}</div>
                <div className="2">{movie.title}</div>
                <div className="3">{movie.description}</div>
              </div>
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
