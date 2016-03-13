# boajs-vdom

A virtual dom library for [bouzuya/b-o-a][] using [Matt-Esch/virtual-dom][].

[Matt-Esch/virtual-dom]: https://github.com/Matt-Esch/virtual-dom

## Installation

```
$ npm install boajs-vdom
```

## Usage

```typescript
// VDOM
import { create as h } from 'boajs-vdom';

const vdom1 = h('div#app', [
  h('p', ['hello'])
]);
const vdom2 = h('div#app', [
  h('p', ['world'])
]);
```

```typescript
// render to HTML
import { HTML } from 'boajs-vdom';
const { init } = HTML;

// See: VDOM ...
const vdom1 = /* ... */;
const vdom2 = /* ... */;

const render1 = init();
const {
  result as html1,
  render as render2
} = render1(vdom1); // render to html1
const {
  result as html2,
  render as render3
} = render2(vdom2); // render to html2
```

```typescript
// DOM
import { DOM } from 'boajs-vdom';
const { init } = DOM;

// See: VDOM ...
const vdom1 = /* ... */;
const vdom2 = /* ... */;

const root = document.querySelector('div#app');
const render1 = init({ root }); // (parse root)
const {
  result as rdom1,
  render as render2
} = render1(vdom1); // render vdom1 to rdom1 (root)
const {
  result as rdom2,
  render as render3
} = render2(vdom2); // render vdom2 to rdom2 (root)
```

## Badges

[![Circle CI][circleci-badge-url]][circleci-url]

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
[bouzuya/b-o-a]: https://github.com/bouzuya/b-o-a
[circleci-badge-url]: https://circleci.com/gh/bouzuya/boajs-vdom.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/boajs-vdom
