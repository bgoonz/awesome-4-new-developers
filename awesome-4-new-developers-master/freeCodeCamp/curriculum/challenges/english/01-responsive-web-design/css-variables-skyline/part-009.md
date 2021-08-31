---
id: 5d822fd413a79914d39e98d1
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

Give your background buildings element a `width` and `height` of `100%` to make it the full width and height of its parent, the `body`.

# --hints--

You should use the `background-buildings` class to select the correct element.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.background-buildings'));
```

Your `.background-buildings` element should have a `width` of `100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.background-buildings')?.width, '100%');
```

Your `.background-buildings` element should have a `height` of `100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.background-buildings')?.height, '100%');
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

  <body>
    <div class="background-buildings"></div>
  </body>
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
--fcc-editable-region--


--fcc-editable-region--
    
```

