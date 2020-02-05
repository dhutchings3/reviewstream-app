import React from 'react';
import ReactDOM from 'react-dom';
import EditReview from './EditReview';

it('renders without crashing', () => {
  const match = {
    params: {
      id: 1
    }
  }
  const div = document.createElement('div')
  ReactDOM.render(<EditReview match={match} />, div)
  ReactDOM.unmountComponentAtNode(div)
})