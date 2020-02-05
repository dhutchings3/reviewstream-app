import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const data = {
      id: 1
  }
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><Review data={data} /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})