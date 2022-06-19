import React from 'react';
import ReactDOM from 'react-dom';
import Staff from './Staff';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Staff />, div);
  ReactDOM.unmountComponentAtNode(div);
});