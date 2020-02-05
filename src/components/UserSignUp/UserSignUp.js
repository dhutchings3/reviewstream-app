import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './UserSignUp.css';

class UserSignUp extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = {
    password:'',
    confirmPassword: '',
    error: null
  }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)
  };

  handleSubmit = e => {
    e.preventDefault()
    const { user_name, first_name, password } = e.target

    AuthApiService.postUser({
      user_name: user_name.value,
      first_name: first_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        first_name.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  render() {
    return (
      <div className='SignUp'>
        <h1>Sign Up</h1>
        <form
          className='signup-form'
          onSubmit={this.handleSubmit}
        >
            <div className='signup-field'>
              <label
                htmlFor='first_name'
                className='signup__label'
              >Name: </label>
              <input
                type='text'
                id='first_name'
                name='first_name'
                placeholder='Name'
              />
            </div>
            <div className='signup-field'>
              <label
                htmlFor='user_name'
                className='signup__label'
              >Username: </label>
              <input
                type='text'
                id='user_name'
                name='user_name'
                placeholder='Username'
              />
            </div>
            <div className='signup-field'>
              <label
                htmlFor='password'
                className='signup__label'
              >Password: </label>
              <input
                className='signup__input'
                type='password'
                id='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <div className='signup__password-req'>
              <strong>
                <span className='error-message'>{this.state.error}</span><br/>
                Password requirements:<br/>
                Must be between 8 and 72 characters<br/>
                Must not begin or end with a space<br/>
                Must contain an uppercase, lowercase, number and special character
              </strong>
            </div>
            <div className='signup__button'>
              <button type='submit' value='Signup' className='signup-button'>
                Sign Up
              </button>
            </div>
            <div className='signup-field'>
              <p className='signup-field'>Already have an account? <Link className='login-link' to='/signin'>Sign In</Link></p>
            </div>
        </form>
      </div>
    )
  }
}

export default UserSignUp;