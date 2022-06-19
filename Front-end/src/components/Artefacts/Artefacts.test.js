import React from 'react';
import ReactDOM from 'react-dom';
import Artefacts from './Artefacts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Artefacts />, div);
  ReactDOM.unmountComponentAtNode(div);
});