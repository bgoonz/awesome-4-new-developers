---
id: 5f3ef6e087d56ed3ffdc36be
title: Part 62
challengeType: 0
dashedName: part-62
---

# --description--

Now apply the `established` class to the `Est. 2020` text.

# --hints--

You should set the `class` of the `p` element to `established`.

```js
assert(code.match(/<p class=('|")established\1>/i));
```

Your `established` class should be on the element with the text `Est. 2020`.

```js
const established = $('.established');
assert(established[0].innerText.match(/Est\.\s2020/i));
```

Your `established` class element should have italic text.

```js
assert($('.established').css('font-style') === 'italic');
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
--fcc-editable-region--
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
--fcc-editable-region--
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
          <article class="item">
            <p class="dessert">Donut</p><p class="price">1.50</p>
          </article>
          <article class="item">
            <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
          </article>
          <article class="item">
            <p class="dessert">Cheesecake</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="dessert">Cinammon Roll</p><p class="price">2.50</p>
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
  font-family: sans-serif;
}

.established {
  font-style: italic;
}

h1, h2, p {
  text-align: center;
}

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 500px;
}

h1, h2 {
  font-family: Impact, serif;
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
