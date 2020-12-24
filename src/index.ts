import React from 'react';
import { render } from 'react-dom';
import { Login } from './login';
import { injectGlobal } from '@emotion/css';
// @ts-ignore
import comic_mono from './assets/comic-mono.ttf';

injectGlobal`
@font-face {
  font-family: comic-mono;
  src: url('${comic_mono}');
}
html {
  --green: #0CF2B4;
  --purple: #966BE8;
}
#root {
  height: 100%;
}
body {
  margin: 0;
  font-family: comic-mono;
}
html, body {
  height: 100%;
}
a, button {
  outline: 0;
}
`;

render(
  React.createElement(Login, {}, null),
  document.querySelector('#root')
);
