import React from 'react';
import ReactDOM from 'react-dom';
import StaffLandingPage from './StaffLandingPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StaffLandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});