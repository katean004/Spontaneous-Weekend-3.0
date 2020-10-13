// <-------- import useState when ready -------->
import React from "react";

// In the movies page find out how to pass props into this.
// Review Context API this might help
function Favorites(props) {
  console.log(props);
  // const [faveMovie, setFaveMovie] = useState({});
  return (
    <div>
      <h1>Favorites</h1>
      <button onClick={() => displayFavoriteMovie(props)}>Click me!!!</button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        corrupti fugit nulla dolor eaque voluptatibus eius ad dolorum cumque
        labore, voluptates ab laudantium ex porro praesentium id qui magni
        beatae.
      </p>
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
