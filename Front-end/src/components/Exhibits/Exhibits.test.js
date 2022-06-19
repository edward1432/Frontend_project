import React from 'react';
import ReactDOM from 'react-dom';
import Exhibits from './Exhibits';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Exhibits />, div);
  ReactDOM.unmountComponentAtNode(div);
});