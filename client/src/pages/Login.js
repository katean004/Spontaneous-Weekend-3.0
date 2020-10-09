import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2 class="loginHead">Welcome Back!</h2>
            <h3 class="loginHead">Log in to get some weekend ideas.</h3>
            <form class="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-default">
                Login
              </button>
            </form>
            <br />
            <p>
              Don't have an account? Sign up <a href="/signup">here</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
