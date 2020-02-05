import React from 'react';
import ReactDOM from 'react-dom';
import ReviewDetails from './ReviewDetails';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const match = {
    params: {
      id: 1
    }
  }
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><ReviewDetails match={match} /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})