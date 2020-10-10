import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Restaurant from "./pages/Restaurant";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// import Card from "./components/Cards/Cards";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/movie" component={Movie} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// TODO from signup code
// import React , { Component } from 'react';
// import HomePage from './components/HomePage';
// import Profile from './components/Profile';
// import { Route, Switch} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { Provider } from 'react-redux';
// import store from './store';

// class App extends Component {

//   render () {
//     return (
//       <Provider store={store}>
//             <Switch>
//               <Route exact path ="/profile" component={Profile}/>
//             </Switch>
//         < HomePage/>
//       </Provider>
//     );
// }
// }

// export default App;
