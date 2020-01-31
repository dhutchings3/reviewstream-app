import React from "react";
import { NavLink } from "react-router-dom";
import "./UserSignUp.css";

export default class UserSignup extends React.Component {
  render() {
    return (
      <div className="UserSignUp">
        <header>
          <h3>Start Your Account Now!</h3>
        </header>
        <section>
          <form className="signup-form" id="signup-form">
            <div className="first-name-field">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                aria-label="First name of user goes here"
                aria-required="true"
                required
              />
            </div>
            <div className="last-name-field">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                aria-label="Last name of user goes here"
                aria-required="true"
              />
            </div>
            <div className="email-field">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                aria-label="Email of user goes here"
                aria-required="true"
              />
            </div>
            <div className="password-field">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                aria-label="Password of user goes here"
                aria-required="true"
              />
            </div>
            <NavLink className="reviewView" to={`/ReviewView`}>
              <button type="submit" className="signup-button" id="button">
                Sign-up
              </button>
            </NavLink>
          </form>
        </section>
      </div>
    );
  }
}