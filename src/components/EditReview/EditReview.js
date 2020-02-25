import React from "react";
import UpdateReviewContext from "../../contexts/UpdateReviewContext";
import ReviewsApiService from "../../services/reviews-api-service";
import TokenService from "../../services/token-service";
import "./EditReview.css";

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    this.updateReview = this.updateReview.bind(this);
  }

  static contextType = UpdateReviewContext;

  componentDidMount() {
    let id = this.props.match.params.id;
    ReviewsApiService.getReviewById(id)
      // console.log(data)
      .then(data => {
        console.log(data);
        this.context.setSingleReview(data);
        console.log(this.context.singleReview);
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  }

  updateReview = e => {
    e.preventDefault();
    const userId = Number(TokenService.getUserId());
    console.log(userId);
    const id = this.props.match.params.id;
    console.log(id);
    const { show_name, season, streaming_service, review, rating } = e.target;
    let updatedReview = {};

    if (show_name.value !== "" && show_name.value !== null) {
      updatedReview.show_name = show_name.value;
    }

    if (season.value !== "" && season.value !== null) {
      updatedReview.season = season.value;
    }

    if (streaming_service.value !== "" && streaming_service.value !== null) {
      updatedReview.streaming_service = streaming_service.value;
    }

    if (review.value !== "" && review.value !== null) {
      updatedReview.review = review.value;
    }

    if (rating.value !== "" && rating.value !== null) {
      updatedReview.rating = rating.value;
    }

    updatedReview.id = id;

    ReviewsApiService.updateReview(id, updatedReview);
    ReviewsApiService.getReviewsForUser(userId)
      .then(data => {
        this.context.setReviews(data);
      })
      .then(() => {
        this.props.history.push(`/reviewdetails/${id}`);
      })
      .catch(error => {
        this.context.setError(error);
      });
  };

  render() {
    const review = this.context.singleReview;
    return (
      <div className="EditReview">
        <h2>Edit Review</h2>
        <form className="edit-review-form" onSubmit={e => this.updateReview(e)}>
          <div>
            <label htmlFor="show_name">Show Name</label>
            <input
              type="text"
              name="show_name"
              id="show_name"
              defaultValue={review.show_name}
            ></input>
          </div>
          <div>
            <label htmlFor="season">Season</label>
            <input
              type="text"
              name="season"
              id="season"
              defaultValue={review.season}
            ></input>
          </div>
          <div>
            <label htmlFor="streaming_service">Streaming Service</label>
            <select
              defaultValue={review.streaming_service}
              name="streaming_service"
            >
              <option value="">Select a Streaming Service</option>
              <option value="HBO">HBO Now</option>
              <option value="Netflix">Netflix</option>
              <option value="Hulu">Hulu</option>
              <option value="Amazon Prime">Amazon Prime</option>
              <option value="Disney Plus">Disney Plus</option>
              <option value="Apple TV">Apple TV</option>
            </select>
          </div>
          <div>
            <label htmlFor="review">Review</label>
            <input
              type="text"
              name="review"
              id="review"
              defaultValue={review.review}
            ></input>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <select defaultValue={review.rating} name="rating">
              <option value="">Select a Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <div className="add__button">
            <button
              type="submit"
              value="Update Review"
              className="update-button"
            >
              Update Review
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditReview;
