import React from "react";
import "./Favorite.css";
import Fade from "../Fade/Fade";
import { v4 as uuidv4 } from "uuid";

function Favorites(props) {
  // ============= Test to see what as in here =============
  console.log(props.databaseInfo);

  return (
    <div className="mainContainer container-fluid">
      <div className="col-sm-12 col-m-6 col-lg-6 ml-auto mr-auto">
        <h1 className="favorite__header">
          Check out some crowd favorite movies <i className="fas fa-film"></i>{" "}
          and restaurants <i className="fas fa-utensils"></i>{" "}
        </h1>
      </div>
      <button
        className="favorites__refresh"
        onClick={() => window.location.reload(false)}
      >
        Refresh Favorites
      </button>

      {props.databaseInfo.length || props.foodDatabase.length ? (
        <div className="container-fluid subContainer">
          <div className="row pt-5 ml-auto mr-auto ">
            {/* <h1 className="favorite__header">
              Movies <i class="fas fa-film"></i>
            </h1> */}

            {props.databaseInfo.map(movie => (
              // Needed for differentiation
              <Fade key={uuidv4()}>
                <div className=" fade-in2" key={movie._id}>
                  <div className="card-body favorite-body card-color">
                    <div className="favorite-card-title">
                      <i className="fas fa-film"></i> {movie.title}{" "}
                      {movie.rating} <i className=" star_icon fas fa-star"></i>
                    </div>
                    <p className="card-text favorite-text">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}

            {/* <div className=" restaurant__row "> */}
            {/* <h1 className="favorite__header">
              Restaurants <i class="fas fa-utensils"></i>
            </h1> */}
            {props.foodDatabase.map(food => (
              // Needed for differentiation
              <Fade key={uuidv4()}>
                <div className=" fade-in2" key={food._id}>
                  <div className="card-body favorite-body card-color">
                    <div className="favorite-card-title">
                      <i className="fas fa-utensils"></i> {food.name}
                    </div>
                    <div className="card-text favorite-text">
                      Address: {food.address}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      ) : (
        <div className="favorites__placeholder__container container-flex">
          <div className="container flex favorites__placeholder">
            <p className="col-sm-6 col-m-6 col-lg-4 ml-auto mr-auto placeholder__paragraph">
              Hello! It seems like you don't have any favorites yet!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
