import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

// components
import Signup from "../src/components/Sign-up/sign-up";
import LoginForm from "./components/Login-Form/login-form";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Movie from "./components/Movie/Movie";
import Restaurant from "./components/Restaurant/Restaurant";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/Landing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      favoriteMovies: [],
      favoriteFoods: [],
      redirectTo: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    this.getUser();
<<<<<<< HEAD
    if (!this.state.favorite.length) {
      this.getDB();
=======
    if (!this.state.favoriteMovies.length) {
      this.getMovieDB();

      if (!this.state.favoriteFoods.length) {
        this.getFoodDB();
      }
>>>>>>> master
    }
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  updateStatus() {
    document.location.href = "/";
    console.log("Status updated");
  }

  getUser() {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

<<<<<<< HEAD
<<<<<<< HEAD
  getDB() {
    console.log("ldkfhlsafjsado;fl");
    // We use set timeout to mimic a time delay that it would take to gather the data
    
      fetch("/favorites/")
        .then(res => res.json())
        .then(data => {
          this.setState({ ...this.state, favorite: data });
        });
    
=======
  /*
    ============== Context API Here ==============
  */
=======
>>>>>>> master

  getMovieDB() {
    fetch("/favoriteMovies")
      .then(res => res.json())
      .then(data => {
        this.setState({ ...this.state, favoriteMovies: data });
      });
  }

  getFoodDB() {
    fetch("/favoriteFoods")
      .then(res => res.json())
      .then(data => {
        this.setState({ ...this.state, favoriteFoods: data });
      });
>>>>>>> master
  }

  render() {
    return (
      <div className="App">
        <Navbar
          updateUser={this.updateUser}
          loggedIn={this.state.loggedIn}
          updateStatus={this.updateStatus}
          username={this.state.username}
        />

        {this.state.loggedIn}
        {/* Routes to different components */}
<<<<<<< HEAD
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/favorites"
          component={() => {
            return <Favorites databaseInfo={this.state.favorite} />;
          }}
        />
        <Route path="/restaurant" component={Restaurant} />
        <Route exact path="/movie" component={Movie} />
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <Signup />} />
=======
        <Switch>
          <Route
            exact
            path="/home"
            component={() => {
              return <Home username={this.state.username} />;
            }}
          />
          <Route
            exact
            path="/favorites"
            component={() => {
              return (
                <Favorites
                  databaseInfo={this.state.favoriteMovies}
                  foodDatabase={this.state.favoriteFoods}
                />
              );
            }}
          />
          <Route path="/restaurant" component={Restaurant} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/login"
            render={() => <LoginForm updateUser={this.updateUser} />}
          />
          <Route path="/signup" render={() => <Signup />} />
        </Switch>
>>>>>>> master
        <Footer />
      </div>
    );
  }
}
// }

export default App;
