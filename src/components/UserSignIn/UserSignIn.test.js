import React from 'react';
import ReactDOM from 'react-dom';
import UserSignIn from './UserSignIn';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserSignIn />, div)
  ReactDOM.unmountComponentAtNode(div)
})