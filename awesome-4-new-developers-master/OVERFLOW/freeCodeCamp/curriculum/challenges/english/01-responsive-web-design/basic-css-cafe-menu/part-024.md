---
id: 5f356ed63e0fa262326eef05
title: Part 24
challengeType: 0
dashedName: part-24
---

# --description--

Now make the background color of the `div` element to be `burlywood`.

# --hints--

You should set the `background-color` property to `burlywood`.

```js
const hasBackgroundColor = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['background-color'] === 'burlywood');
assert(hasBackgroundColor);
```

Your `div` should have a burlywood background.

```js
const divBackground = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('background-color');
assert(divBackground === 'burlywood');
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
  <body>
    <div>
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffee</h2>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  /*
  background-color: burlywood;
  */
}

h1, h2, p {
  text-align: center;
}

--fcc-editable-region--
div {
  width: 300px;
}
--fcc-editable-region--
```

