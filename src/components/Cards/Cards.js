import React, { useState, useEffect } from "react";
import "./cards.css";
import API from "../../utils/API";

const Card = () => {
  let lat = "";
  let long = "";

  const [favoriteRestaurant, getfavoriteRestaurant] = useState([]);
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
    })
      .then(res => {
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

          getfavoriteRestaurant((favoriteRestaurant) => {
            [...favoriteRestaurant, res]
            // favoriteRestaurant.push(res)
          });     //move in app js later   
          return res.json();
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

  const priceError =
    "Price range not available";
  const cuisineError =
    "Cusine not available";
  // const websiteError = "Looks like they haven't set a website yet?";
  const addressError = "Address not available";
  // const phoneError = "Looks like something's wrong with their phone number";
  const nameError = "Name not available";

  return (
    <div>
      <h1>Restaurant Generator</h1>
      <button
        onClick={handleClick}
        className="btn btn-outline-success random-btn"
      >
        Randomize
      </button>
      <div className="card text-center results">
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

          <button onClick={() => handleFoodFavorite(featuredRestaurant)}>
            Favorite
          </button>
          <ul className="list-group list-group-flush">
            <li className="card-text text-secondary list-group-item cuisine">
              {featuredRestaurant.cuisine && featuredRestaurant.cuisine[0]
                ? `Cuisine: ${featuredRestaurant.cuisine[0].name}`
                : cuisineError}
            </li>
            <li className="card-text text-secondary list-group-item price">
              {featuredRestaurant.price_level
                ? `Price Level: ${featuredRestaurant.price_level}`
                : priceError}
            </li>
            <li className="card-text text-secondary list-group-item address">
              {featuredRestaurant.address
                ? `Address: ${featuredRestaurant.address}`
                : addressError}
            </li>
          </ul>

          <a
            href={featuredRestaurant.website}
            target="_blank"
            className="btn btn-outline-success website"
          >
            Website
          </a>
          <a href="#" className="btn btn-outline-success call">
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
