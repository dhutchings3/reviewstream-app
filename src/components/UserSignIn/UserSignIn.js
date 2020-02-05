import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './UserSignIn.css'

class UserSignIn extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/reviewlist'
    history.push(destination)
  };

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = e.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  render() {
    return (
      <div className='Signin'>
        <h1>Sign In</h1>
        <div className='signin__demo-creds'>
          <strong>
            Test login: netflixer / Password1!
          </strong>
        </div>
        <form
          className='signin-form'
          id='sign-in'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='signin-field'>
            <label htmlFor='user_name'>Username: </label>
            <input
              type='text'
              name='user_name'
              id='user_name'
              placeholder='Username'
            ></input>
          </div>
          <div className='signin-field'>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            ></input>
          </div>
          <div className='signin__button'>
            <button type='submit' value='Sign-In' className='signin-button'>
              Sign In
            </button>
          </div>
        </form>
        <div className='error-message'>
          <strong>
            {this.state.error}
          </strong>
        </div>
      </div>
    )
  }
}

export default UserSignIn;