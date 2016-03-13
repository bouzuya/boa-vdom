import { h } from 'virtual-dom';
import { VDOM } from './vdom';

export type Properties = { [x: string]: any; };

export interface Create {
  (name: string): VDOM;
  (name: string, properties: Properties): VDOM;
  (name: string, children: VDOM[]): VDOM;
  (name: string, properties: Properties, children: VDOM[]): VDOM;
}

const create: Create = <any> h;

export { create };
