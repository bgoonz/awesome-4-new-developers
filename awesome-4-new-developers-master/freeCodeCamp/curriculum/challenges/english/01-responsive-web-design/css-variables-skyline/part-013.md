---
id: 5d822fd413a79914d39e98d5
title: Part 13
challengeType: 0
dashedName: part-13
---

# --description--

Give your `.bb1` element these style properties: `display: flex;`, `flex-direction: column;`, and `align-items: center;`. This will center the parts of the building using "flex" or "flexbox". You will learn about it in more detail on another project.

# --hints--

You should not change the `.bb1` `width` or `height` properties.

```js
const bb1Style = new __helpers.CSSHelp(document).getStyle('.bb1');
assert.equal(bb1Style?.width, '10%');
assert.equal(bb1Style?.height, '70%');
```

You should give the `.bb1` element a `display` of `flex`.

```js
const bb1Style = new __helpers.CSSHelp(document).getStyle('.bb1');
assert.equal(bb1Style?.display, 'flex');
```

You should give the `.bb1` element a `flex-direction` of `column`.

```js
const bb1Style = new __helpers.CSSHelp(document).getStyle('.bb1');
assert.equal(bb1Style?.flexDirection, 'column');
```

You should give the `.bb1` element a `align-items` of `center`.

```js
const bb1Style = new __helpers.CSSHelp(document).getStyle('.bb1');
assert.equal(bb1Style?.alignItems, 'center');
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
    <div class="background-buildings">
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
    </div>
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

.background-buildings {
  width: 100%;
  height: 100%;
}
--fcc-editable-region--
.bb1 {
  width: 10%;
  height: 70%;
}
--fcc-editable-region--
.bb1a {
  width: 70%;
  height: 10%;
}

.bb1b {
  width: 80%;
  height: 10%;
}

.bb1c {
  width: 90%;
  height: 10%;
}

.bb1d {
  width: 100%;
  height: 70%;
}
    
```

