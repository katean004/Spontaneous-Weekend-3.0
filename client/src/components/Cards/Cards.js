import React, { useState } from "react";
import "./cards.css";
import API from "../../utils/API";

const Card = props => {
  const lat = "33.684566";
  const long = "-117.826508";
  const favrestaurant = [];

  const [featuredRestaurant, getfeaturedRestaurant] = useState({});

  function handleClick() {
    //on button click, ask for user location, then do API call
    API.getRestaurant(lat, long)
      .then(response => {
        console.log(response.data.data[0]);
        getfeaturedRestaurant(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
    }

    return(
        <>
            <h1>Restaurant Generator</h1>
            <button onClick={handleClick} className="btn btn-outline-success random-btn">Randomize</button>
                <div className="card text-center results">
                    <div className="overflow">
                        <img src="https://tinyurl.com/yxcrpbr2" className="img-fluid cardImg" alt="randomized restaurant photo"/>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title restaurant-name">
                            {featuredRestaurant.name}
                        </h4>

                        <ul className="list-group list-group-flush">
                            <li className="card-text text-secondary list-group-item cuisine">
                            {/* {featuredRestaurant.cuisine[0].name} */}
                            {/* conditional rendering, if cuisine exists then display it, if not dont display */}
                            Res Cuisine
                            </li>
                            <li className="card-text text-secondary list-group-item price">
                            Price Level: {featuredRestaurant.price_level}
                            </li>
                            <li className="card-text text-secondary list-group-item address">
                            {featuredRestaurant.address}
                            </li>
                        </ul>

                    <a href={featuredRestaurant.website} target="_blank" className="btn btn-outline-success website">Website</a>
                    <a href="#" className="btn btn-outline-success call">Call</a>
                    </div>
            </div>
        </>
    )
}

//lavacake: https://ls.imgix.net/recipes/thumbnails/Bosch---Molten-Lava-Cake-RESIZED.jpg?w=640&h=360&auto=compress,format&fit=crop
//crab: https://www.foodiecrush.com/wp-content/uploads/2016/11/The-Easiest-Dungeness-Crab-Recipe-foodiecrush.com-0011-1-480x270.jpg
//pizza: https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/whfsiyqa/13c30c24-4394-4822-83c6-1e677c36cbeb

export default Card;

