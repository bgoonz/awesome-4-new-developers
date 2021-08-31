---
id: 5f3cade9993019e26313fa8e
title: Part 43
challengeType: 0
dashedName: part-43
---

# --description--

Now that you know it works, you can change the remaining `article` and `p` elements to match the first set. Start by adding the class `item` to the other `article` elements.

# --hints--

You should only have five `article` elements.

```js
assert($('article').length === 5);
```

You should only have five `.item` elements.

```js
assert($('.item').length === 5);
```

Your `.item` elements should be your `article` elements.


```js
const articles = $('article');
const items = $('.item');
assert(articles[0] === items[0]);
assert(articles[1] === items[1]);
assert(articles[2] === items[2]);
assert(articles[3] === items[3]);
assert(articles[4] === items[4]);
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
          <article>
            <p>Caramel Macchiato</p>
            <p>3.75</p>
          </article>
          <article>
            <p>Pumpkin Spice</p>
            <p>3.50</p>
          </article>
          <article>
            <p>Hazelnut</p>
            <p>4.00</p>
          </article>
          <article>
            <p>Mocha</p>
            <p>4.50</p>
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

