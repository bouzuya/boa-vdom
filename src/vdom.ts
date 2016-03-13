import { diff as originalDiff } from 'virtual-dom';

export type VDOM = any;
export type Patches = any;

const diff = (current: VDOM, next: VDOM): Patches =>
  originalDiff(current, next);

export { diff }; // Patches, VDOM
