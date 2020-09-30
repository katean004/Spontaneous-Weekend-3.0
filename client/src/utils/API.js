import axios from "axios";

export default {
  getMovies: function (userGenreChoice) {
    return axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${userGenreChoice}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
  },
  getRestaurant: function () {
    return axios.get(`${process.env.REACT_APP_RESTAURANT_API_KEY}`);
  }
};
