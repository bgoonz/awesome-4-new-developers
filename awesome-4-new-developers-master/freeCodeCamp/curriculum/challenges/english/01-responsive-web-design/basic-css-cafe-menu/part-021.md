---
id: 5f356ed6cf6eab5f15f5cfe6
title: Part 21
challengeType: 0
dashedName: part-21
---

# --description--

The `div` element is used mainly for design layout purposes unlike the other content elements you have used so far. Add a `div` element inside the `body` element and then move all the other elements inside the new `div`.

# --hints--

You should have an opening `<div>` tag.

```js
assert(code.match(/<div>/i));
```

You should have a closing `</div>` tag.

```js
assert(code.match(/<\/div>/i));
```

You should not change your existing `body` element. Make sure you did not delete the closing tag.

```js
assert($('body').length === 1);
```

Your `div` tag should be nested in the `body`.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camper Cafe Menu</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
--fcc-editable-region--
  <body>
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
    <main>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
<html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

