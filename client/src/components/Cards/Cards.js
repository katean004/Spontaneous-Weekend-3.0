import React, { useState, useEffect } from "react";
import "./cards.css";
import API from "../../utils/API";

const Card = props => {
  const lat = "33.684566";
  const long = "-117.826508";
  // const favrestaurant = [];

  const [featuredRestaurant, getfeaturedRestaurant] = useState({});

  function handleClick(event) {
    //on button click, ask for user location, then do API call
    event.preventDefault();
    API.getRestaurant(lat, long)
      .then(response => {
        console.log(response.data.data[0]);
        getfeaturedRestaurant(response.data.data[0]);

        console.log(response.data.data);
        getfeaturedRestaurant(response.data.data);
        const randomIndex = Math.floor(Math.random() * response.data.data.length);
        getfeaturedRestaurant(response.data.data[randomIndex]);

      })
      .catch(error => {
        console.log(error);
      });
    }

    return(
        <div>
            <h1>Restaurant Generator</h1>
            <button onClick={handleClick} className="btn btn-outline-success random-btn">Randomize</button>
                <div className="card text-center results">
                    <div className="overflow">
                        <img src= {featuredRestaurant.photo ? featuredRestaurant.photo.images.small.url: "https://i.pinimg.com/originals/09/a7/85/09a785fd6f8f926d218c2ef0b18a889c.jpg"} className="img-fluid cardImg" alt="randomized restaurant photo"/>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title restaurant-name">
                            {featuredRestaurant.name ? featuredRestaurant.name: ""}
                        </h4>

                        <ul className="list-group list-group-flush">
                            <li className="card-text text-secondary list-group-item cuisine">
                            {featuredRestaurant.cuisine && featuredRestaurant.cuisine[0]  ? `Cuisine: ${featuredRestaurant.cuisine[0].name}`: "" }
                            {/* conditional rendering, if cuisine exists then display it, if not dont display */}
                            {/* Res Cuisine */}
                            </li>
                            <li className="card-text text-secondary list-group-item price">
                            {/* Price Level: {featuredRestaurant.price_level} */}
                            {featuredRestaurant.price_level ? `Price Level: ${featuredRestaurant.price_level}`: ""}
                            </li>
                            <li className="card-text text-secondary list-group-item address">
                            {featuredRestaurant.address ? `Address: ${featuredRestaurant.address}` : ""}
                            {/* {featuredRestaurant.address} */}
                            </li>
                        </ul>

                    <a href={featuredRestaurant.website} target="_blank" className="btn btn-outline-success website">Website</a>
                    <a href="#" className="btn btn-outline-success call">Call</a>
                    </div>
            </div>
        </div>
    )
}

export default Card;

