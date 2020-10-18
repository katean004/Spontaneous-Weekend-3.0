import React, { useState, useEffect } from "react";
import "./cards.css";
import API from "../../utils/API";

const Card = () => {
  let lat = "";
  let long = "";

  const [featuredRestaurant, getfeaturedRestaurant] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
    });
  });

  function handleClick(event) {
    //on button click, ask for user location, then do API call
    event.preventDefault();

    console.log(lat);
    console.log(long);

    API.getRestaurant(lat, long)
      .then(response => {
        const randomIndex = Math.floor(
          Math.random() * response.data.data.length
        );
        getfeaturedRestaurant(response.data.data[randomIndex]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleFoodFavorite = props => {
    console.log("==========Favorited=========");
    console.log(props);
    console.log(props.name);
    console.log(props.address);

    fetch("/favoriteFoods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: props.name,
        address: props.address
      })
    }).then(res => {
      console.log(res);
      // console.log(res.name);
      // console.log(res.address);

      return res.json();
    });

    /*
      ============== Testing "get" ===============
      */
    fetch("/favoriteFoods")
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log(
          "====================================================================="
        );
        // This returns an array of objects containing all of the movies when the button is clicked
        console.log(data);
      });
    //add parenthesis later
  };

  const priceError = "Price range not available";
  const cuisineError = "Cusine not available";
  // const websiteError = "Looks like they haven't set a website yet?";
  const addressError = "Address not available";
  // const phoneError = "Looks like something's wrong with their phone number";
  const nameError = "Name not available";

  return (
    <div className="container-fluid restaurant__main">
      <div className="mainHeader">
        <h1>Restaurant Generator</h1>
        <button onClick={event =>handleClick(event)} className="random-btn">
          Randomize
        </button>
      </div>
      {/* What is the equivalent of .length for objects. */}
      {featuredRestaurant.size ? (<div className="results">
        <div className="overflow">
          <img
            src={
              featuredRestaurant.photo
                ? featuredRestaurant.photo.images.small.url
                : "https://i.pinimg.com/originals/09/a7/85/09a785fd6f8f926d218c2ef0b18a889c.jpg"
            }
            className="img-fluid cardImg"
            alt="randomized restaurant photo"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title restaurant-name">
            {featuredRestaurant.name ? featuredRestaurant.name : nameError}
          </h4>

          <button
            className="favorite__food"
            onClick={() => handleFoodFavorite(featuredRestaurant)}
          >
            Favorite
          </button>
          <ul className="list-group list-group-flush">
            <li className="   cuisine">
              {featuredRestaurant.cuisine && featuredRestaurant.cuisine[0]
                ? `Cuisine: ${featuredRestaurant.cuisine[0].name}`
                : cuisineError}
            </li>
            <li className="  price">
              {featuredRestaurant.price_level
                ? `Price Level: ${featuredRestaurant.price_level}`
                : priceError}
            </li>
            <li className="  address">
              {featuredRestaurant.address
                ? `Address: ${featuredRestaurant.address}`
                : addressError}
            </li>
          </ul>
          <button className="website">
            <a
              href={featuredRestaurant.website}
              target="_blank"
        
            >
              Website
            </a>
          </button>
          {/* <button className="call">
            <a href="#">
              Call
            </a>
          </button> */}
        </div>
      </div>): (
        <div className="restaurant__placeholder">
        <p className="placeholder">
          Click the randomize button to get started!
        </p>
      </div>
      )
      }
      
    </div>
  );
};

export default Card;
