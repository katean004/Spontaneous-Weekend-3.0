import React, { useState } from "react";

function Favorites() {
  const [faveMovie, setFaveMovie] = useState({});
  return (
    <div>
      <h1>Favorites</h1>
      <button onClick={displayFavoriteMovie}>Click me!!!</button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        corrupti fugit nulla dolor eaque voluptatibus eius ad dolorum cumque
        labore, voluptates ab laudantium ex porro praesentium id qui magni
        beatae.
      </p>
    </div>
  );
}
const displayFavoriteMovie = () => {
  fetch("/favorites")
    .then(res => {
      res.json();
    })
    .then(data => console.log(data));
};
export default Favorites;
