import React from 'react';
import UpdateReviewContext from '../../contexts/UpdateReviewContext';
import ReviewsApiService from '../../services/reviews-api-service';
import TokenService from '../../services/token-service';
import './AddReview.css';

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
    this.addReview = this.addReview.bind(this)
  }

  static contextType = UpdateReviewContext

  addReview = (e) => {
    e.preventDefault()
    const userId = Number(TokenService.getUserId())
    let newReview = {
      show_name: e.target.show_name.value,
      season: e.target.season.value,
      streaming_service: e.target.streaming_service.value,
      review: e.target.review.value,
      rating: e.target.rating.value,
      user_id: userId,
    }

    ReviewsApiService.postReview(newReview)
      .then(data => {
        this.props.history.push('/reviewlist')
      })
      .catch(this.context.setError)
  }

  render() {

    return (
      <div className='AddListing'>
        <h2>Add a Review</h2>
        <form className='add-listing-form' onSubmit={(e) => this.addReview(e)}>
          <div>
            <label htmlFor='show_name'>Show Name</label>
            <input
              type='text'
              name='show_name'
              id='show_name'
              placeholder='Game of Thrones'
            ></input>
          </div>
          <div>
            <label htmlFor='season'>Season</label>
            <input
              type='text'
              name='season'
              id='season'
              placeholder='4'
            ></input>
          </div>
          <div>
            <label htmlFor='streaming_service'>Streaming Service</label>
            <select name='streaming_service'>
              <option value=''>Select a Streaming Service</option>
              <option value='HBO'>HBO Now</option>
              <option value='Netflix'>Netflix</option>
              <option value='Hulu'>Hulu</option>
              <option value='Amazon Prime'>Amazon Prime</option>
              <option value='Disney Plus'>Disney Plus</option>
              <option value='Apple TV'>Apple TV</option>
            </select>
          </div>
          <div>
            <label htmlFor='review'>Review</label>
            <input
              type='text'
              name='review'
              id='review'
              placeholder='It was one of my favorites...'
            ></input>
          </div>
          <div>
            <label htmlFor='rating'>Rating</label>
            <select name='rating'>
              <option value=''>Select a Rating</option>
              <option value='1'>1 Star</option>
              <option value='2'>2 Stars</option>
              <option value='3'>3 Stars</option>
              <option value='4'>4 Stars</option>
              <option value='5'>5 Stars</option>
            </select>
          </div>
          <div className='add__button'>
            <button type='submit' value='Add Review' className='add-button'>
              Add Review
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddReview;