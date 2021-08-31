---
id: 5f3c866d28d7ad0de6470505
title: Part 33
challengeType: 0
dashedName: part-33
---

# --description--

The flavors and prices are currently stacked on top of each other and centered with their respectable `p` elements. It would be nice if the flavor was on the left and the price was on the right.

Add the class name `flavor` to the `French Vanilla` `p` element.

# --hints--

You should add the `flavor` class to your `p` element.

```js
assert(code.match(/<p\s*class=('|")flavor\1\s*>/i));
```

You should only have one element with the `flavor` class.

```js
assert($('.flavor').length === 1);
```

Your `flavor` class should be on the `p` element with the text `French Vanilla`.

```js
assert($('.flavor')[0].innerText.match(/French Vanilla/i));
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
          <article>
--fcc-editable-region--
            <p>French Vanilla</p>
            <p>3.00</p>
--fcc-editable-region--
          </article>
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
```
