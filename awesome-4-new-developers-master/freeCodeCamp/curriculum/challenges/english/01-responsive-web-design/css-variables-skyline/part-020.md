---
id: 5d822fd413a79914d39e98dc
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

The buildings are stacked on top of each other and running off the screen. Let's fix that. Add the properties `display: flex;`, `align-items: flex-end;`, and `justify-content: space-evenly;` to the `background-buildings` class. This will use flexbox again to evenly space the buildings across the bottom of the element.

# --hints--

You should add a `display` of `flex` to the `background-buildings` class.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.background-buildings')?.display, 'flex');
```

You should add an `align-items` of `flex-end` to the `background-buildings` class.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.background-buildings')?.alignItems, 'flex-end');
```

You should add a `justify-content` of `space-evenly` to the `background-buildings` class.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.background-buildings')?.justifyContent, 'space-evenly');
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
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div class="bb4"></div>
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
--fcc-editable-region--
.background-buildings {
  width: 100%;
  height: 100%;
}
--fcc-editable-region--
.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  --building-color1: #aa80ff;
}

.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1b {
  width: 80%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1c {
  width: 90%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1d {
  width: 100%;
  height: 70%;
  background-color: var(--building-color1);
}

.bb2 {
  width: 10%;
  height: 50%;
}

.bb3 {
  width: 10%;
  height: 55%;
}

.bb4 {
  width: 11%;
  height: 58%;
}
    
```

