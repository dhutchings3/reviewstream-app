import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";

class Header extends React.Component {
  handleSignOutClick = () => {
    TokenService.clearAuthToken();
  };

  renderSignOutLink() {
    return (
      <Link
        onClick={() => {
          this.handleSignOutClick();
          this.props.toggle();
        }}
        to="/"
        className="header__text-link"
      >
        Sign Out
      </Link>
    );
  }

  renderSignInLink() {
    return (
      <Link
        onClick={() => this.props.toggle()}
        to="/signup"
        className="header__text-link"
      >
        Sign Up
      </Link>
    );
  }

  render() {
    let headerClasses;
    this.props.show
      ? (headerClasses = "header open")
      : (headerClasses = "header");

    return (
      <nav className={headerClasses}>
        <div className="header__navbar-nav-items">
          <Link
            to={"/reviewlist"}
            className="header__text-link"
            onClick={this.props.toggle}
          >
            Review List
          </Link>
          <Link
            to={"/addreview"}
            className="header__text-link"
            onClick={this.props.toggle}
          >
            Add Review
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderSignOutLink()
            : this.renderSignInLink()}
        </div>
      </nav>
    );
  }
}

export default Header;
