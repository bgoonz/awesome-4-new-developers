---
id: 5f332b23c2045fb843337579
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

Since the `p` element added in the previous step provides supplemental information about the cafe, nest both the `h1` and `p` elements in a `header` element.

# --hints--

You should have an opening `<header>` tag.

```js
assert(code.match(/<header>/i));
```

You should have a closing `</header>` tag.

```js
assert(code.match(/<\/header>/i));
```

Your `h1` element should be nested in your `header` element.

```js
const header = document.querySelectorAll('header')[0];
assert(header.children[0].tagName === 'H1');
```

Your `p` element should be nested in your `header` element.

```js
const header = document.querySelectorAll('header')[0];
assert(header.children[1].tagName === "P");
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
  <body>
--fcc-editable-region--
    <h1>CAMPER CAFE</h1>
    <p>Est. 2020</p>
--fcc-editable-region--
  </body>
<html>
```

