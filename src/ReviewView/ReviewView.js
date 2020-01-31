import React, { Component } from "react";
import Reviews from "../Reviews";
import AddReview from "../AddReview/AddReview";
import ListContext from "../ListContext";

class ReviewView extends Component {
  static contextType = ListContext;

  render() {
    return (
      <div className="ReviewsView">
        <h1 className="center blue-text">Your Reviews</h1>
        <Reviews
          reviews={this.context.reviews}
          deleteReview={this.context.deleteReview}
        />
        <AddReview addReview={this.context.addReview} />
      </div>
    );
  }
}

export default ReviewView;