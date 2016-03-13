import test from 'ava';
import { create as h } from '../src/create';

test(t => {
  const vdom1 = h('div#app', [
    h('p', ['hello'])
  ]);
  t.ok(vdom1.tagName === 'DIV');
});
