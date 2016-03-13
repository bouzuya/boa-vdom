import * as originalRender from 'vdom-to-html';
import { VDOM } from './vdom';

export type HTML = string;

export type Render = (vdom: VDOM) => {
  result: HTML;
  render: Render;
};

const render = (vdom: VDOM): HTML => originalRender(vdom);

const makeRender = (): Render => {
  return (vdom: VDOM): { result: HTML; render: Render; } => {
    const html = render(vdom);
    return {
      result: html,
      render: makeRender()
    };
  };
};

const init = (): Render => {
  return makeRender();
};

export { init }; // HTML, Render
