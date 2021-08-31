---
id: 5d822fd413a79914d39e98d0
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

It's tough to see now, but there's a border at the edge of your preview, that's the `body`. Create a `div` element in the `body` with a class of `background-buildings`. This will be a container for a group of buildings.

# --hints--

You should create a `div` element.

```js
assert.exists(document.querySelector('div'));
```

Your `div` element should be within the `body`.

```js
assert(document.querySelector('div')?.parentElement?.localName === 'body');
```

Your `div` element should have a class of `background-buildings`

```js
assert([...document.querySelector('div')?.classList]?.includes('background-buildings'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
--fcc-editable-region--
</html>
```

```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

```

