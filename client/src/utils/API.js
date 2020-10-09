import axios from "axios";
// API.getMovies(userGenreChoice)
export default {
<<<<<<< HEAD
  // getMovies: function () {
  //   return axios.get(
  //     `https://api.themoviedb.org/3/discover/movie?with_genres=horror&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
  //   );
  // },
  // getMoreInfo: function (randomMovie) {
  //   return axios.get(
  //     `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&append_to_response=release_dates`
  //   );
  // },
  getRestaurant: function () {
=======
  getMovies: function () {
    return axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=horror&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
  },
  getMoreInfo: function (randomMovie) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&append_to_response=release_dates`
    );
  },
  //pass in 2 arguments: lat and long
  getRestaurant: function (lat, long) {
>>>>>>> kate
    return axios({
      method: "GET",
      url: "https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RESTAURANT_API_KEY,
        useQueryString: true
      },
      params: {
        limit: "8",
        currency: "USD",
        distance: "5",
        lunit: "km",
        lang: "en_US",
        latitude: lat,
        longitude: long
      }
    });
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.log(error)
    // });
  }
};
