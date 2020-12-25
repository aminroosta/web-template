import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from '@emotion/css';
// @ts-ignore
import comic_mono from './assets/comic-mono.ttf';
import App from './app';

injectGlobal`
@font-face {
  font-family: comic-mono;
  src: url('${comic_mono}');
}
html {
  --green: #0CF2B4;
  --purple: #8013e6;
  --pink: #F020D8;
  --blue: #370BF0;
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
  React.createElement(App, {}, null),
  document.querySelector('#root')
);
