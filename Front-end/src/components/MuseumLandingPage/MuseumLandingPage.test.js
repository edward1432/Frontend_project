import React from 'react';
import ReactDOM from 'react-dom';
import MuseumLandingPage from './MuseumLandingPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuseumLandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});