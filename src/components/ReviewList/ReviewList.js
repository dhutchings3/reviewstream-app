import React from 'react';
import Review from '../Review/Review';
import UpdateReviewContext from '../../contexts/UpdateReviewContext';
import ReviewsApiService from '../../services/reviews-api-service';
import TokenService from '../../services/token-service';
import './ReviewList.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  static contextType = UpdateReviewContext

  componentDidMount() {
    console.log(Number(TokenService.getUserId()))
    let userId = Number(TokenService.getUserId())
    console.log(userId)
    // let userId = 1
    ReviewsApiService.getReviewsForUser(userId)
      .then(data => {
        this.context.setReviews(data)
        console.log(data)
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Your Reviews</h1>
        {this.context.reviews.map(i => (
          <li key={i.id}>
            <Review
              id={i.id}
              data={i}
            />
          </li>
        ))}
      </div>
    )
  }
}

export default ReviewList;