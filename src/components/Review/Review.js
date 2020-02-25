import React from "react";
import { Link } from "react-router-dom";
import "./Review.css";
import UpdateReviewContext from "../../contexts/UpdateReviewContext";

class Review extends React.Component {
  static contextType = UpdateReviewContext;

  render() {
    return (
      <Link to={`/reviewdetails/${this.props.data.id}`} className="review-link">
        <div className="Review">
          <h2>{this.props.data.show_name}</h2>
          <h3>Season {this.props.data.season}</h3>
          <p>{this.props.data.streaming_service}</p>
          <p className="review-text">Review: {this.props.data.review}</p>
          <p>Rating: {this.props.data.rating}</p>
        </div>
      </Link>
    );
  }
}

export default Review;
