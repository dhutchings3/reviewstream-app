import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class UserSignup extends Component {

  render () {
    return (
      <div className='UserSignIn'>
        <header>
            <h3>Already have an account? Sign in:</h3>
        </header>
        <form className='signin-form' id='signin-form'>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
              <NavLink
                className='reviewView'
                to={`/ReviewView`}
              >
                Sign-In
              </NavLink>
        </form>
    </div>
    );
  }

}

export default UserSignup; 