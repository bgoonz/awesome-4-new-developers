---
id: 5f356ed69db0a491745e2bb6
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

To apply the class's styling to the `div` element, add a `class` attribute to the `div` element's opening tag and set its value to `menu`.

# --hints--

Your `div` should still render. Make sure you haven't malformed the `<div>` tag.

```js
assert($('div').length === 1);
```

Your `div` element should have the `menu` class.

```js
assert($('div').attr('class').includes('menu'));
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
--fcc-editable-region--
    <div>
--fcc-editable-region--
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

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
```

