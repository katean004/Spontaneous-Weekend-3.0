/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/href-no-hash */
import React, { useState, useEffect } from "react";
import "./cards.css";
import API from "../../utils/API";

const Card = props => {
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

    fetch("/favoriteFoods", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cuisine: props.cuisine,
        address: props.address,
        website: props.website
      })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(
          "====================================================================="
        );
        console.log(data.cuisine);
        console.log(
          "====================================================================="
        );
        console.log(data.address);
        console.log(
          "====================================================================="
        );
        console.log(data.website);

        /*
      ============== Testing "get" ===============
      */
        fetch("/favoriteFoods")
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(
              "====================================================================="
            );
            // This returns an array of objects containing all of the movies when the button is clicked
            console.log(data);
          });
      });
  };

  const priceError =
    "Sorry! This location hasn't set their price range yet, but stay tuned!";
  const cuisineError =
    "Sorry! We don't know exactly what type of cuisine they serve, it might be a mix or a total mystery. Try it out anyway!";
  // const websiteError = "Looks like they haven't set a website yet?";
  const addressError = "What address????";
  // const phoneError = "Looks like something's wrong with their phone number";
  const nameError = "We don't know the name of this restaurant either lol.";

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
