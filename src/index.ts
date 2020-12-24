import React from 'react';
import { render } from 'react-dom';
import { Login } from './login';

render(
  React.createElement(Login, {}, null),
  document.querySelector('#root')
);
