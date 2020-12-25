import React from 'react';
import { css } from '@emotion/css';
import CatGuy from './assets/catguy';
import { Link } from "react-router-dom";
import { button_style } from './assets/form-styles';

export const BrushBackground = ({ className }) => {
  return <svg viewBox="0 0 366 299" fill="none" className={className}>
    <path d="M234.084 198.165C155.533 241.558 -13.4296 260.512 -13.4296 260.512L-15.2757 173.621C-15.2757 173.621 \
    74.797 169.977 154.818 136.005C234.839 102.033 292.996 6.07355 292.996 6.07355C292.996 6.07355 339.365 48.8537 \
    335.59 96.3861C333.951 117.122 302.444 162.836 234.084 198.165Z"/>
  </svg>
}


export const Welcome = () => {
  return <div className={style}>
    <BrushBackground className={'brush-background'} />
    <CatGuy className={'cat-guy'} />

    <div className={'content'}>
      <p className={'hero'}>
        Follow our tips<br />to achieve success!<br />
        <span>Start trading any instrument.</span>
      </p>
      <Link className={button_style} to="/home">START</Link>
    </div>

  </div>
}

const style = css`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;

  .brush-background {
    z-index: -1;
    position: absolute;
    max-height: 50vh;
    path {
      fill: var(--green, green);
    }
  }
  .cat-guy {
    max-height: 70vh;
  }
  .content {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    flex: 1;
  }
  .hero {
    font-size: 1.8em;
    font-weight: bold;
    text-align: left;
    span {
      font-size: 0.5em;
      font-weight: normal;
    }
  }
  a {
    align-self: flex-end;
    margin-right: 20%;
    margin-bottom: 2em;
  }
`;