import React from 'react';
import { Link } from 'react-router-dom';
import UpdateReviewContext from '../../contexts/UpdateReviewContext';
import ReviewsApiService from '../../services/reviews-api-service';
import TokenService from '../../services/token-service';

class ReviewDetails extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  static contextType = UpdateReviewContext

  componentDidMount() {
    let id = this.props.match.params.id
    ReviewsApiService.getReviewById(id)
      .then(data => {
        this.context.setSingleReview(data)
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  deleteReview = (id) => {
    const userId = Number(TokenService.getUserId())
    ReviewsApiService.deleteReview(id)
    ReviewsApiService.getReviewsForUser(userId)
      .then(data => {
        this.context.setReviews(data)
      })
      .then(this.props.history.push('/reviewlist'))
      .catch(error => {
        this.context.setError(error)
      })
  }

  render() {

    return (
      <div>
        <div className='review-details'>
          <h2>{this.context.singleReview.show_name}</h2>
          <h3>Season {this.context.singleReview.season}</h3>
          <h3>{this.context.singleReview.streaming_service}</h3>
          <p>Review: {this.context.singleReview.review}</p>
          <p>Rating: {this.context.singleReview.rating}</p>
          <Link to={`/editreview/${this.props.match.params.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => this.deleteReview(this.props.match.params.id)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default ReviewDetails;