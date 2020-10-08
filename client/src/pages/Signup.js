import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 signupContainer">
            <h2 class="signupHead">Sign Up</h2>
            <h3 class="signupHead">Get ready for a spontaneous experience.</h3>
            <form class="signup">
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
              <div
                style={{ display: "none" }}
                id="alert"
                class="alert alert-danger"
                role="alert"
              >
                <span
                  class="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Error:</span> <span class="msg"></span>
              </div>
              <button type="submit" class="btn btn-default">
                Sign Up
              </button>
            </form>
            <br />
            <p>
              Already have an account? Log in <a href="/login">here</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
