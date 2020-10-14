// <-------- import useState when ready -------->
import { map } from "jquery";
import React from "react";

// <-------- import when ready -------->
// import { MyFavoriteMovieContext } from "./Movie";

// In the movies page find out how to pass props into this.
// Review Context API this might help
function Favorites(props) {
  // ============= Test to see what as in here =============
  console.log(props.databaseInfo);
  // const { rating, title, descripton, releaseDate } = props;
  // // const [faveMovie, setFaveMovie] = useState({});
  // // Test to see how if the props are defined
  // console.log(
  //   "====================================================================="
  // );
  // console.log(rating);
  // console.log(
  //   "====================================================================="
  // );
  // console.log(title);
  // console.log(
  //   "====================================================================="
  // );
  // console.log(descripton);
  // console.log(
  //   "====================================================================="
  // );
  // console.log(releaseDate);
  return (
    <div>
      <h1>Favorites</h1>
      {props.databaseInfo.length ? (
        <div style={{ dispay: "flex", justifyContent: "space-evenly" }}>
          <div style={{ width: "50%" }}>
            {props.databaseInfo.map(movie => (
              // Needed for differentiation
              <div className="movie__row" key={movie._id}>
                <div className="1">{movie.rating}</div>
                <div className="2">{movie.title}</div>
                <div className="3">{movie.description}</div>
              </div>
            ))}
          </div>
          <div style={{}}>
            {props.databaseInfo.map(movie => (
              // Needed for differentiation

              <div className="movie__row" key={movie._id}>
                <div className="1">{movie.rating}</div>
                <div className="2">{movie.title}</div>
                <div className="3">{movie.description}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Hello</div>
      )}
      {/* The for loop/ for each will be inside here. Use a component here.*/}
    </div>
  );
}

// ================== Working on this part =================

const displayFavoriteMovie = () => {
  /*

  ===================== Tasks =====================
  - Task 1: Find out how to fetch the information from the back end and console.log
  - Task 2: Find out how to display the information given by the database. 
  - Task 3: Use a for/forEach() loop to run through the array of objects and display them one at a time.
  ===================== Tasks =====================

  */

  // ============ Attempt to use Context API ============
  /*
  <MyFavoriteMovieContext.Consumer>
    {({ rating, title, description, releaseDate }) => {
      fetch("/favorites")
        .then(res => {
          res.json();
        })
        // Current this is displaying nothing because no data is being passed into i.
        .then(data => console.log(data));
    }}
  </MyFavoriteMovieContext.Consumer>;
  */
  fetch("/favorites")
    .then(res => {
      res.json();
    })
    // Current this is displaying nothing because no data is being passed into i.
    .then(data => console.log(data));
};

// <-------- Function to split the favorite ( movie and food) -------->

// const favoriteMoviesSection = props => {
//   return (
//     // This is where the HTML and CSS will be applied
//     null
//   );
// };
export default Favorites;
