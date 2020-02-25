import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import HeaderToggleButton from "../Header/HeaderToggleButton";
import "./Nav.css";

class Nav extends React.Component {
  handleSignOutClick = () => {
    TokenService.clearAuthToken();
  };

  renderSignOutLink() {
    return (
      <Link onClick={this.handleSignOutClick} to="/" className="text-link">
        <span className="keep-white">|</span> Sign Out
      </Link>
    );
  }

  renderSignInLink() {
    return (
      <Link to="/signin" className="text-link">
        <span className="keep-white">|</span> Sign In
      </Link>
    );
  }

  toReviewList() {
    return (
      <Link to={"/reviewlist"} className="text-link">
        Reviewstream
      </Link>
    );
  }

  toLandingPage() {
    return (
      <Link to={"/"} className="text-link">
        Reviewstream
      </Link>
    );
  }

  componentDidMount() {
    TokenService.onChange(() => {
      this.forceUpdate();
    });
  }

  render() {
    const isNotSignedIn = !TokenService.hasAuthToken();
    return (
      <header className="navbar">
        <nav className="navbar-navigation" role="navigation">
          <div className="navbar-toggle-button">
            <HeaderToggleButton click={this.props.headerClickHandler} />
          </div>
          <div className="navbar-logo">
            {TokenService.hasAuthToken()
              ? this.toReviewList()
              : this.toLandingPage()}
          </div>
          <div className="spacer" />
          <div className="navbar-nav-items">
            <Link to={"/reviewlist"} className="text-link">
              Review List <span className="keep-white">|</span>
            </Link>{" "}
            <Link to={"/addreview"} className="text-link">
              Add Review
            </Link>{" "}
            {TokenService.hasAuthToken()
              ? this.renderSignOutLink()
              : this.renderSignInLink()}
            {isNotSignedIn && (
              <Link to={"/signup"} className="text-link">
                <span className="keep-white"> | </span>
                Sign Up
              </Link>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
