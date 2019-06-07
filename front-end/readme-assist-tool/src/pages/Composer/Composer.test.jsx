import React from 'react';
import ReactDOM from 'react-dom';
import Composer from './Composer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Composer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
