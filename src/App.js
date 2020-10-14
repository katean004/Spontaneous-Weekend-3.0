import React, { Component } from "react";
import axios from "axios";
// ======== Use Link When ready to use ========
import { Route } from "react-router-dom";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Movie from "./components/Movie";
import Restaurant from "./components/Restaurant";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      favorite: []
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    if (!this.state.favorite.length) {
      this.getDB();
    }
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      // =========== Used for testing code ===========
      // console.log("Get user response: ");
      // console.log(response.data);
      if (response.data.user) {
        // =========== Used for testing code ===========
        // console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        // =========== Used for testing code ===========
        // console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  getDB() {
    console.log("ldkfhlsafjsado;fl");
    // We use set timeout to mimic a time delay that it would take to gather the data
    
      fetch("/favorites/")
        .then(res => res.json())
        .then(data => {
          this.setState({ ...this.state, favorite: data });
        });
    
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        {/* Routes to different components */}
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
        <Footer />
      </div>
    );
  }
}

export default App;
