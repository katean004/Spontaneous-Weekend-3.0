 import React from "react";


function Favorites(props) {
  // ============= Test to see what as in here =============
  console.log(props.databaseInfo);
  
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


export default Favorites;
