import React, { Component } from "react";
import "./home.css";
import Fade from "../Fade/Fade";
import { Link } from "react-router-dom";

class Home extends Component {
  // <-------- Useless constructor. Not needed for now -------->
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="homePage__Main">
        <div className="movieSection">
          <Fade>
            <Link to="/movie" className="section__link">
              <div className="section__card fade-in2">
                <div className="section__content fade-in2">
                  <h1>Movie Randomizer</h1>
                  <p>
                    Don't wanna think too hard when picking a movie
                    <br />
                    Let us do it for you! <br /> <br />
                    Click on this card to head over to the movie page!
                  </p>
                </div>
              </div>
            </Link>
          </Fade>
        </div>
        <div className="restaurantSection">
          <Fade>
            <Link to="/restaurant" className="section__link">
            <div className="section__card">
              <div className="section__content">
                <h1>Restaurant Randomizer</h1>
                <p>We often ask "What do you wanna eat?"
                  <br/>
                  Well, how about letting us do that for you too?
                  <br/>
                  Click on this card to head over to the restaurants page!
                </p>
              </div>
            </div>
            </Link>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;
