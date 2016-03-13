import * as originalParse from 'vdom-virtualize';
import { patch as originalPatch } from 'virtual-dom';
import { VDOM, Patches, diff } from './vdom';

export type RDOM = any;

export type Render = (vdom: VDOM) => {
  result: RDOM;
  render: Render;
};

const parse = (rdom: RDOM): VDOM => originalParse(rdom);

const patch = (rdom: RDOM, patches: Patches): VDOM =>
  originalPatch(rdom, patches);

const makeRender = (r: RDOM, v: VDOM): Render => {
  return (vdom: VDOM): { result: RDOM; render: Render; } => {
    const patches = diff(v, vdom);
    const newVDOM = vdom;
    const newRDOM = patch(r, patches);
    return {
      result: newRDOM,
      render: makeRender(newRDOM, newVDOM)
    };
  };
};

const init = (options: { root: RDOM }): Render => {
  const { root } = options;
  const rdom: RDOM = root;
  const vdom: VDOM = parse(rdom);
  return makeRender(rdom, vdom);
};

export { init }; // Render, RDOM
