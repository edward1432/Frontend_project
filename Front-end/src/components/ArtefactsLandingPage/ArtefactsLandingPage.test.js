import React from 'react';
import ReactDOM from 'react-dom';
import ArtefactsLandingPage from './ArtefactsLandingPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArtefactsLandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});