import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

class Footer extends React.Component {

  toReviewList() {
    return (
      <Link to={'/reviewlist'} className='text-link'>
        Job Thing<span className='keep-white'>.</span>
      </Link>
    )
  }

  toLandingPage() {
    return (
      <Link to={'/'} className='text-link'>
        Job Thing<span className='keep-white'>.</span>
      </Link>
    )
  }

  render() {
    return (
      <div className='footer-logo'>
        {TokenService.hasAuthToken()
          ? this.toJobList()
          : this.toLandingPage()
        }
      </div>
    )
  }
}

export default Footer;