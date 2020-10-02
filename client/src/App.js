import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Movie from "./pages/Movie"
import Restaurant from "./pages/Restaurant";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Navbar from "./components/Navbar/Navbar";
// import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API"

function App() {
  API.getRestaurant();

  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/movie" component={Movie} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
