---
id: 5f47633757ae3469f2d33d2e
title: Part 46
challengeType: 0
dashedName: part-46
---

# --description--

If you make the width of the page preview smaller, you will notice at some point, some of the text on the left starts wrapping around to the next line. This is because the width of the `p` elements on the left side can only take up `50%` of the space.

Since you know the prices on the right have significantly fewer characters, change the `flavor` class `width` value to be `75%` and then `price` class `width` value to be `25%`.

# --hints--

You should set the `width` property to `75%` in your `.flavor` selector.

```js
const flavorWidth = new __helpers.CSSHelp(document).getStyle('.flavor')?.getPropertyValue('width');
assert(flavorWidth === '75%');
```

You should set the `width` property to `25%` in your `.price` selector.

```js
const priceWidth = new __helpers.CSSHelp(document).getStyle('.price')?.getPropertyValue('width');
assert(priceWidth === '25%');
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
    <div class="menu">
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffee</h2>
          <article class="item">
            <p class="flavor">French Vanilla</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
          </article>
          <article class="item">
            <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
          </article>
          <article class="item">
            <p class="flavor">Hazelnut</p><p class="price">4.00</p>
          </article>
          <article class="item">
            <p class="flavor">Mocha</p><p class="price">4.50</p>
          </article>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
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

.item p {
  display: inline-block;
}

--fcc-editable-region--
.flavor {
  text-align: left;
  width: 50%;
}

.price {
  text-align: right;
  width: 50%;
}
--fcc-editable-region--
```

