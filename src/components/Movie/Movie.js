import React, { Component } from "react";
import Fade from "../Fade/Fade";
// <-------------- Use when needed -------------->
// import Favorites from "./Favorites";
import "./Movie.css";
const tmdb_url = "https://www.themoviedb.org/movie";
const api_url = "https://api.themoviedb.org";
const image_url = "https://image.tmdb.org/t/p/w500";
const api_key = process.env.REACT_APP_MOVIE_API_KEY;
const language = "en-us";
const genres = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Document: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  SciFi: 878,
  TVMovie: 10770,
  Thriller: 53,
  War: 10752,
  Western: 37
};
class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: []
    };
  }

  /*
  ============= Randomizing the movie depending on the genre clicked =============
  */
  discover(type = "movie", genre = "") {
    fetch(
      `${api_url}/3/discover/${type}?api_key=${api_key}&language=${language}&with_genres=${genre}`
    )
      .then(response => response.json())
      .then(data => {
        const movieList = [];
        const results = data.results;
        // console.log(results);
        // ============= Randomizer =============
        const random = Math.floor(Math.random() * results.length);
        const movie = results[random];
        const movieBox = <MovieBox movie={movie} key={movie.id} />;
        movie.poster_link = `${image_url}${movie.poster_path}`;
        movie.url = (
          <a target=" _blank" href={`${tmdb_url}/${movie.id}`}>
            Movie Homepage
          </a>
        );
        movieList.push(movieBox);

        fetch(
          `${api_url}/3/${type}/${results[0].id}?api_key=${api_key}&append_to_response=credits,videos`
        )
          .then(response => response.json())
          .then(data => {
            this.setState({ movieData: movieList });
          });
      });
  }

  // Update the genre
  updateDiscover = (type, genre = "") => {
    this.discover(type, genre[1]);
  };

  render() {
    return (
      <div className="App">
        <div className="genres">
          <GenresBar genres={genres} updateDiscover={this.updateDiscover} />
        </div>
        {this.state.movieData.length ? (
          <div className="movieDataInfo">
            <MovieMain movies={this.state.movieData} />
          </div>
        ) : (
          // ==========Make this into a card.==========
          <div className="movieName__placeholder">
            <p className="placeholder">
              Select a random movie by genre! If it's not your style pick another!
            </p>
          </div>
        )}
      </div>
    );
  }
}

/*
============= Generate the Movie Box =============
*/

const MovieBox = props => {
  return (
    <div className="movie_box fade-in2">
      <p className="movie_title fade-in2">
        {props.movie.title ? props.movie.title : props.movie.name}
      </p>
      <Fade>
        <div className="poster fade-in2">
          <img
            className="movie_poster"
            src={props.movie.poster_link}
            alt="movie poster"
          />
        </div>
      </Fade>
      <Fade>
        <div className="movieInfo">
          {/* Take the movie and save it into the back end. consider Redux or context  */}
          <button
            onClick={() => {
              handleFavoriteMovie(props);
            }}
          >
            Favorite
          </button>
          <h6>Rating</h6>
          <p className="movie_vote_average">
            <i className="star_icon fas fa-star"></i>
            {props.movie.vote_average}
          </p>
          <h6>Description</h6>
          <p className="description">{props.movie.overview}</p>
          <h6>Release Date</h6>
          <p className="movie_releaseDate">{props.movie.release_date}</p>
          <a target=" _blank" href={`${tmdb_url}/${props.movie.id}`}>
            Movie Homepage
          </a>
        </div>
      </Fade>
    </div>
  );
};

/*
============= Favorite Movie Button Functionality =============
*/
const handleFavoriteMovie = props => {
  // ========== Testing to see what the movie object contains ===========
  console.log(props.movie);
  console.log(
    "====================================================================="
  );

  // ===== Posting the information to the back end =====
  fetch("/favoriteMovies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      rating: props.movie.vote_average,
      title: props.movie.title,
      description: props.movie.overview,
      releaseDate: props.movie.release_date
    })
  })
    .then(res => {
      return res.json();
    })
    
};

// =============== Generate a Movie Box Container ===============
const MovieBoxContainer = props => (
  <div className="movie_box_container">{props.movies}</div>
);
// =============== Generate a Main Div for the movie box ===============
const MovieMain = props => (
  <div className="movie_main">
    <MovieBoxContainer movies={props.movies} />
  </div>
);

// =============== Generate a Genre button ===============
const GenreButton = props => (
  <div
    className={`genre_button genre${props.number}`}
    onClick={() => props.updateDiscover("movie", props.genre)}
  >
    {props.genre[0]}
  </div>
);

// =============== Generate the Genre Bar ===============
const GenresBar = props => {
  const genresArr = [];
  for (var i = 0; i < Object.keys(props.genres).length; i++) {
    genresArr.push(
      <GenreButton
      number = {i}
        genre={Object.entries(props.genres)[i]}
        key={`Button+${i}`}
        updateDiscover={props.updateDiscover}
      />
    );
  }

  return <div className="genres_bar">{genresArr}</div>;
};

export default Movie;
