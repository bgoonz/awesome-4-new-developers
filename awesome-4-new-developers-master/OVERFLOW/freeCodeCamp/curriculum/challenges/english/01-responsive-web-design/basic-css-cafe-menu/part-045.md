---
id: 5f7692f7c5b3ce22a57788b6
title: Part 45
challengeType: 0
dashedName: part-45
---

# --description--

To complete the styling, add the applicable class names `flavor` and `price` to all the remaining `p` elements.

# --hints--

You should have five `.flavor` elements.

```js
assert($('.flavor').length === 5);
```

You should have five `.price` elements.

```js
assert($('.price').length === 5);
```

Your `.flavor` elements should be your `p` elements with the text `French Vanilla`, `Caramel Macchiato`, `Pumpkin Spice`, `Hazelnut`, and `Mocha`.

```js
const p = $('p');
const flavor = $('.flavor');
assert(p[1] === flavor[0]);
assert(p[3] === flavor[1]);
assert(p[5] === flavor[2]);
assert(p[7] === flavor[3]);
assert(p[9] === flavor[4]);
```

Your `.price` elements should be your `p` elements with the text `3.00`, `3.75`, `3.50`, `4.00`, and `4.50`.

```js
const p = $('p');
const price = $('.price');
assert(p[2] === price[0]);
assert(p[4] === price[1]);
assert(p[6] === price[2]);
assert(p[8] === price[3]);
assert(p[10] === price[4]);
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
--fcc-editable-region--
          <article class="item">
            <p>Caramel Macchiato</p><p>3.75</p>
          </article>
          <article class="item">
            <p>Pumpkin Spice</p><p>3.50</p>
          </article>
          <article class="item">
            <p>Hazelnut</p><p>4.00</p>
          </article>
          <article class="item">
            <p>Mocha</p><p>4.50</p>
          </article>
--fcc-editable-region--
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

.flavor {
  text-align: left;
  width: 50%;
}

.price {
  text-align: right;
  width: 50%;
}
```

