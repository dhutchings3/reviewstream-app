import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./app.css";
import ReviewView from "./ReviewView/ReviewView";
import ListContext from "./ListContext";
import LandingPage from "./LandingPage";
import ListError from "./ListError";
import UserSignIn from "./UserSignIn";

class App extends Component {
  state = {
    reviews: [
      { id: 1, 
        showName: "Schitt's Creek", 
        text: "Very funny, always good for a laugh.",
        rating: 4
      },
      { id: 2, 
        showName: "The Marvelous Mrs. Maisel",
        text: "Upbeat, funny, filled with great costumes and dialogues.",
        rating: 5
      },
      { id: 3, 
        showName: "The Witcher", 
        text: "Not as great as GOT, but still a good watch",
        rating: 3
      },
      { id: 4, 
        showName: "The Office",
        text: "So many great episodes, hard to watch without laughing.",
        rating: 5
      },
      { id: 5, 
        showName: "Cheer",
        text: "An inspirational documentary, left wanting a season 2.",
        rating: 5
       }
    ]
  };
  deleteReview = id => {
    const reviews = this.state.reviews.filter(review => {
      return review.id !== id;
    });
    this.setState({
      reviews
    });
  };

  addReview = review => {
    review.id = Math.random();
    let reviews = [...this.state.reviews, review];
    this.setState({
      reviews: reviews
    });
  };

  render() {
    const contextValue = {
      reviews: this.state.reviews,
      deleteReview: this.deleteReview,
      addReview: this.addReview
    };

    return (
      <ListContext.Provider value={contextValue}>
        <ListError>
          <div className="App">
            <nav className="navigation">
              <ul className="nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/">Sign-Up</Link>
                </li>
                <li>
                  <Link to="/SignIn">Sign-In</Link>
                </li>
                <li>
                  <Link to="/ReviewView">Reviews</Link>
                </li>
              </ul>
            </nav>
            <header role="banner">
              <h1>Reviewstream</h1>
              <h2>A place to store all of your show reviews. The next time someone asks for a recommendation, you'll be ready
              !</h2>
            </header>

            <Route exact path="/" component={LandingPage} />
            <Route exact path="/ReviewView" component={ReviewView} />
            <Route exact path="/SignIn" component={UserSignIn} />

            <footer className="footer">&copy;2019 Danielle Hutchings</footer>
          </div>
        </ListError>
      </ListContext.Provider>
    );
  }
}

export default App;
