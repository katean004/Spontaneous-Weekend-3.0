import axios from "axios";
// API.getMovies(userGenreChoice)
export default {
  getMovies: function (userGenreChoice) {
    return axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${userGenreChoice}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
  },
  getMoreInfo: function (randomMovie) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&append_to_response=release_dates`
    );
  },
  getRestaurant: function () {
      return axios({
      "method":"GET",
      "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": REACT_APP_RESTAURANT_API_KEY,
      "useQueryString":true
      },"params":{
      "limit":"3",
      "currency":"USD",
      "distance":"2",
      "lunit":"km",
      "lang":"en_US",
      "latitude":"33.684566",
      "longitude":"-117.826508"
      }
      }).then((response) => {console.log(response)})
      .catch((error)=>{
        console.log(error)
      });
  }
};

// REACT_APP_RESTAURANT_API_KEY