import React from "react";
// import API from "../utils/API";
import "./Movie.css"
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
class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredMovieData: null,
      movieData: this.discover()
    };
  }

  discover(type = "movie", genre = "") {
    fetch(
      `${api_url}/3/discover/${type}?api_key=${api_key}&language=${language}&with_genres=${genre}`
    )
      .then(response => response.json())
      .then(data => {
        const movieList = [];
        const results = data.results;
        results.forEach(movie => {
          if (movie.poster_path === null) return;
          if (movie.vote_average) {
            const movieBox = <MovieBox movie={movie} key={movie.id} />;
            movie.poster_link = `${image_url}${movie.poster_path}`;
            movie.url = `${tmdb_url}${movie.id}`;
            movieList.push(movieBox);
          }
        });
        fetch(
          `${api_url}/3/${type}/${results[0].id}?api_key=${api_key}&append_to_response=credits,videos`
        )
          .then(response => response.json())
          .then(data => {
            this.setState({ featuredMovieData: data, movieData: movieList });
          });
      });
  }

  search(searchValue) {
    fetch(
      `${api_url}/3/search/movie?api_key=${api_key}&language=${language}&query=${searchValue}`
    )
      .then(response => response.json())
      .then(data => {
        const movieList = [];
        const results = data.results;
        results.forEach(movie => {
          if (movie.poster_path === null) return;
          if (movie.vote_average) {
            const movieBox = <MovieBox movie={movie} key={movie.id} />;
            movie.poster_link = `${image_url}${movie.poster_path}`;
            movie.url = `${tmdb_url}${movie.id}`;
            movieList.push(movieBox);
          }
        });
        this.setState({ movieData: movieList });
      });
  }

  updateDiscover = (type, genre = "") => {
    this.discover(type, genre[1]);
  };

  updateSearch = event => {
    if (event.length === 0) return;
    this.search(event);
  };

  render() {
    return (
      <div className="App">
        {this.state.movieData ? (
          <div>
            <Navbar
              updateSearch={this.updateSearch}
              updateDiscover={this.updateDiscover}
            />
            <GenresBar genres={genres} updateDiscover={this.updateDiscover} />
            <FeaturedMovie movie={this.state.featuredMovieData} />
            <MovieMain movies={this.state.movieData} />
            <Footer />
          </div>
        ) : null}
      </div>
    );
  }
}

const FeaturedMovie = props => (
  <div className="featured_movie_container">
    <FeaturedMoviePoster poster={props.movie.poster_path} />
    <FeaturedMovieInfo movie={props.movie} />
  </div>
);

const FeaturedMovieInfo = props => {
  const trailer_path = `https://www.youtube.com/embed/${props.movie.videos.results[0].key}`;
  return (
    <div className="featured_movie_info">
      <h1 className="movie_title">
        {props.movie.title
          ? props.movie.title.toUpperCase()
          : props.movie.name.toUpperCase()}
      </h1>
      <h2 className="movie_tagline">{props.movie.tagline}</h2>
      <p className="movie_overview">{props.movie.overview}</p>
      <FeaturedMovieRating movie_average={props.movie.vote_average} />
      <FeaturedMovieTrailer trailer_path={trailer_path} />
    </div>
  );
};

const FeaturedMoviePoster = props => {
  const poster_path = `https://image.tmdb.org/t/p/w500/${props.poster}`;
  const style = {
    backgroundImage: "url(" + poster_path + ")"
  };

  return <div className="featured_movie_poster" style={style}></div>;
};

const FeaturedMovieRating = props => {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    if (
      i < props.movie_average &&
      props.movie_average - i < 1 &&
      props.movie_average - i > 0
    ) {
      stars.push(
        <i className="star fas fa-star-half-alt" key={`star${i}`}></i>
      );
    } else if (i < props.movie_average && props.movie_average - i > 0) {
      stars.push(<i className="star fas fa-star" key={`star${i}`}></i>);
    } else {
      stars.push(<i className="star far fa-star" key={`star${i}`}></i>);
    }
  }

  return (
    <div className="featured_movie_rating">
      <p className="stars">
        {stars}
        <span className="movie_average">{props.movie_average}</span>
      </p>
    </div>
  );
};

const FeaturedMovieTrailer = props => (
  <iframe
    title="Trailer"
    width="100%"
    height="100%"
    src={props.trailer_path}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="http://www.github.com/mikesuchor">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="http://www.linkedin.com/in/michael-suchorolski">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:mikesuchor@gmail.com">
          <i className="fas fa-envelope-square"></i>
        </a>
        <TMDBLogo />
      </div>
      <p>Designed and created by Michael Suchorolski &copy; 2019</p>
    </div>
  );
};

const TMDBLogo = () => (
  <a href="https://www.themoviedb.org/">
    <img
      className="tmdb-logo"
      src="https://previews.dropbox.com/p/thumb/AAZ09JA0zXmOcCBoeK-_BYH3FtZA3cMgKcbg01VPkylJD91dboZ_esG7E6rMjS_dhL2q2yrIFpyb39NRTNtIzl88ac3M3HEUXN7s8bsiwW4UQ7BcSVUPueAxKIM2ybdOQJ_ZqA0ccs0EWW4f1YCR8YMepR15_e4ijR_u3RNy8ufq_gV3c0TpEH7iVgUMM-ruthAgJtTLibHkjUpyme2JN5pBTI-RZO1rDLmCau6BAhpPN2reifxVGFHfdN37o2KVk7xSJJCxhO7UlLokb622IoAcrSoLxT4Ijat6p_IU0mDpmxXlmRM5-vrScg4L6hyCTqLhXa3Bb1EnhwU89Haj_3ZteHYRypPQunzmP_ad96ooAg/p.png?size_mode=5"
      alt="tmdb logo"
    ></img>
  </a>
);

const MovieBox = props => {
  const moveToFeatured = hello => {
    console.log(hello);
  };

  return (
    <div className="movie_box">
      <img
        className="movie_poster"
        src={props.movie.poster_link}
        alt="movie poster"
        onClick={() => moveToFeatured(props)}
      />
      <p className="movie_title">
        {props.movie.title ? props.movie.title : props.movie.name}
      </p>
      <p className="movie_vote_average">
        <i className="star_icon fas fa-star"></i>
        {props.movie.vote_average}
      </p>
    </div>
  );
};

const MovieBoxContainer = props => (
  <div className="movie_box_container">{props.movies}</div>
);

const MovieMain = props => (
  <div className="movie_main">
    <h2>TRENDING MOVIES</h2>
    <MovieBoxContainer movies={props.movies} />
  </div>
);

const GenreButton = props => (
  <div
    className="genre_button"
    onClick={() => props.updateDiscover("movie", props.genre)}
  >
    {props.genre[0]}
  </div>
);

const GenresBar = props => {
  const genresArr = [];
  for (var i = 0; i < Object.keys(props.genres).length; i++) {
    genresArr.push(
      <GenreButton
        genre={Object.entries(props.genres)[i]}
        key={`Button+${i}`}
        updateDiscover={props.updateDiscover}
      />
    );
  }

  return <div className="genres_bar">{genresArr}</div>;
};

const Navbar = props => (
  <nav className="navbar">
    <TVMovieToggle updateDiscover={props.updateDiscover} />
    <Search updateSearch={props.updateSearch} />
  </nav>
);

const Search = props => {
  const scrollToMovies = () => {
    var element = document.querySelector(".movie_main");
    var headerOffset = 70;
    var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;
    document.documentElement.scrollTop = offsetPosition;
    document.body.scrollTop = offsetPosition; // For Safari
  };

  return (
    <div className="search-field-container">
      <input
        className="search-field"
        type="search"
        name="search"
        placeholder="Search..."
        onFocus={() => scrollToMovies()}
        onChange={event => props.updateSearch(event.target.value)}
      />
    </div>
  );
};

class TVMovieToggle extends React.Component {
  state = {
    toggle: false
  };

  slideToggle = () => {
    this.setState({ toggle: !this.state.toggle }, () =>
      this.props.updateDiscover(this.state.toggle ? "tv" : "movie")
    );
  };

  render() {
    const toggle = this.state.toggle;

    return (
      <div className="toggle-container">
        <p>Movies</p>
        <div className="toggle" onClick={() => this.slideToggle()}>
          <div className={"toggle-button " + (toggle ? "movie" : "tv")}></div>
        </div>
        <p>TV</p>
      </div>
    );
  }
}

export default Movie;
