import React, { Component } from "react";
import "./home.css"

class Home extends Component {
  // <-------- Useless constructor. Not needed for now -------->
  // constructor() {
  //   super();
  // }

  render() {
    return(
      <div className="homePage__Main">
        <div className="movieSection">
          <div className="section__card">
            <div className="section__content">
            <h1>Movie Randomizer</h1>
            <p>hello there</p>
            </div>
          </div>
        </div>
        <div className="restaurantSection">
          <div className="section__card">
            <h1>Restaurant Randomizer</h1>
            <p>hello there</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
