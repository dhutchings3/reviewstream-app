import React, { Component } from "react";
import "./AddReview.css";

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      showName: '',
      text: '',
      rating: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      showName: '',
      text: '',
      rating: ''
    });
  };

  render() {
    console.log(this.state)
    return (
      <form
      className='reviewForm'
      onSubmit={this.handleSubmit}
      value={
        this.state.showName, 
        this.state.text, 
        this.state.rating
      }
    >
        <div className='showName'>
          <label>Name of Show:</label>
          <input
            onChange={this.handleChange}
            value={this.state.showName}
            required
            type='text'
            name='showName'
            id='showName'
            placeholder='Mad Men'
          />

        </div>

        <div className='text'>
        <textarea
          onChange={this.handleChange}
          value={this.state.text}
          required
          aria-label='Type a review...'
          name='text'
          id='text'
          cols='30'
          rows='3'
          placeholder='Type a review..'>
        </textarea>
      </div>

      <div className='select'>
        <label htmlFor='rating'>Rate this show!</label>
        <select
          onChange={this.handleChange}
          value={this.state.rating}
          required
          aria-label='Rate the show!'
          name='rating'
          id='rating'
        > 
          <option value=''>Make a selection</option>
          <option value='1'>1 Star</option>
          <option value='2'>2 Stars</option>
          <option value='3'>3 Stars</option>
          <option value='4'>4 Stars</option>
          <option value='5'>5 Stars</option>
        </select>
      </div>

      <button type='submit'>
        Post review
      </button>
    </form>
    );
  }
}

export default AddReview;