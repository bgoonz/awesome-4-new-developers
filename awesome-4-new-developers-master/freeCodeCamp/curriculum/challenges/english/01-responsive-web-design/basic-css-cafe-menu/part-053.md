---
id: 5f716bee5838c354c728a7c5
title: Part 53
challengeType: 0
dashedName: part-53
---

# --description--

Below the dessert you just added, add the rest of the desserts and prices using three more `article` elements, each with two nested `p` elements. Each element should have the correct dessert and price text, and all of them should have the correct classes.

```bash
Cherry Pie 2.75
Cheesecake 3.00
Cinammon Roll 2.50
```

# --hints--

You should have four `.dessert` elements.

```js
assert($('.dessert').length === 4);
```

You should have four new `.price` elements.

```js
assert($('section').last().find('.price').length === 4);
```

Your `section` element should have eight `p` elements.

```js
assert($('section').last().find('p').length === 8);
```

Your `.dessert` elements should have the text `Donut`, `Cherry Pie`, `Cheesecake`, and `Cinammon Roll`.

```js
const dessert = $('.dessert');
assert(dessert[0].innerText.match(/donut/i));
assert(dessert[1].innerText.match(/cherry pie/i));
assert(dessert[2].innerText.match(/cheesecake/i));
assert(dessert[3].innerText.match(/cinammon roll/i));
```

Your new `.price` elements should have the text `1.50`, `2.75`, `3.00`, and `2.50`.

```js
const prices = $('section').last().find('.price');
assert(prices[0].innerText.match(/1\.50/));
assert(prices[1].innerText.match(/2\.75/));
assert(prices[2].innerText.match(/3\.00/));
assert(prices[3].innerText.match(/2\.50/));
```

You should not have any spaces between your `p` elements.

```js
assert(!code.match(/<\/p>\s+<p/));
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
        <section>
          <h2>Desserts</h2>
--fcc-editable-region--
          <article class="item">
            <p class="dessert">Donut</p><p class="price">1.50</p>
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

.flavor, .dessert {
  text-align: left;
  width: 75%;
}

.price {
  text-align: right;
  width: 25%
}
```
