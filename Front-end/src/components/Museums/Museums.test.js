import React from 'react';
import ReactDOM from 'react-dom';
import Museums from './Museums';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Museums />, div);
  ReactDOM.unmountComponentAtNode(div);
});