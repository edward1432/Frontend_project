import React from 'react';
import ReactDOM from 'react-dom';
import ExhibitLandingPage from './ExhibitLandingPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExhibitLandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});