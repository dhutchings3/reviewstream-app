import React from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import "./UserSignUp.css";

class UserSignUp extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  state = {
    password: "",
    passwordError: "",
    error: null
  };

  handleChange = e => {
    this.setState(
      {
        password: e.target.value
      },
      () => {
        this.validatePassword();
      }
    );
  };

  validatePassword = () => {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
    const { password } = this.state;
    if (password.length < 8) {
      this.setState({
        passwordError: "Password must be at least 8 characters"
      });
    } else if (password.length > 72) {
      this.setState({
        passwordError: "Password must be less than 72 characters"
      });
    } else if (password.startsWith(" ") || password.endsWith(" ")) {
      this.setState({
        passwordError: "Password must not start or end with empty spaces"
      });
    } else if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      this.setState({
        passwordError:
          "Password must contain 1 uppercase, lowercase, number and special character"
      });
    } else {
      this.setState({
        passwordError: null
      });
    }
  };

  handleRegistrationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/signin";
    history.push(destination);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user_name, first_name, password } = e.target;

    AuthApiService.postUser({
      user_name: user_name.value,
      first_name: first_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        first_name.value = "";
        password.value = "";
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { password } = this.state;
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
    const isEnabled =
      password.length > 8 &&
      password.length < 72 &&
      REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password) &&
      !password.startsWith(" ") &&
      !password.endsWith(" ");
    return (
      <div className="SignUp">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="signup-field">
            <label htmlFor="first_name" className="signup__label">
              Name:{" "}
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Name"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="user_name" className="signup__label">
              Username:{" "}
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Username"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="password" className="signup__label">
              Password:{" "}
            </label>
            <input
              className="signup__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="invalid-feedback">{this.state.passwordError}</div>
          <div className="signup__password-req">
            <strong>
              <span className="error-message">{this.state.error}</span>
              <br />
              Password requirements:
              <br />
              Must be between 8 and 72 characters
              <br />
              Must not begin or end with a space
              <br />
              Must contain an uppercase, lowercase, number and special character
            </strong>
          </div>
          <div className="signup__button">
            <button
              type="submit"
              value="Signup"
              className="signup-button"
              disabled={!isEnabled}
            >
              Sign Up
            </button>
          </div>
          <div className="signup-field">
            <p className="signup-field">
              Already have an account?{" "}
              <Link className="signin-link" to="/signin">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignUp;
