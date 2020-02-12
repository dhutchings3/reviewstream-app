import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div className='LandingPage'>
        <h1>Reviewstream</h1>
        <h3>Review all of your favorite (and not so favorite) shows in one place.</h3>
        <p>With all the streaming services today, I'm sure you've got quite a long list of favorites. With Reviewstream you can review all your favorite shows in one place and save them to your account. You can also visit your review at any time and make an update.</p>
        
        <p>Create an account or login below:</p>

        <Link to='signup'>
          Sign-Up
        </Link>
        {' | '}
        <Link to='signin'>
          Sign-In
        </Link>
      </div>
    )
  }
}

export default LandingPage;