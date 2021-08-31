---
id: 5f332a88dc25a0fd25c7687a
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

To let visitors know the cafe was founded in 2020, add a `p` element below the `h1` element with the text `Est. 2020`.

# --hints--

You should have an opening `<p>` tag.

```js
assert(code.match(/<p>/i));
```

You should have a closing `</p>` tag.

```js
assert(code.match(/<\/p>/i));
```

You should not change your existing `h1` element. Make sure you did not delete the closing tag.

```js
assert($('h1').length === 1);
```

Your `p` element should be below your `h1` element.

```js
assert($('p')[0].previousElementSibling.tagName === 'H1');
```

Your `p` element should have the text `Est. 2020`.

```js
assert(code.match(/<p>Est. 2020<\/p>/i));
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
--fcc-editable-region--
  </body>
<html>
```

