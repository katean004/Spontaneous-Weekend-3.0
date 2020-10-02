import axios from "axios";
// API.getMovies(userGenreChoice)
export default {
  getMovies: function (userGenreChoice) {
    return axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${userGenreChoice}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
  },
  getMoreInfo: function (randomMovie) {
    `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&append_to_response=release_dates`;
  },
  getRestaurant: function () {
    return axios.get(`${process.env.REACT_APP_RESTAURANT_API_KEY}`);
  }
};
