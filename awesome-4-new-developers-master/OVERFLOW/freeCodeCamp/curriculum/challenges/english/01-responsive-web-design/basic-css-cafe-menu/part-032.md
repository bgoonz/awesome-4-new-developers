---
id: 5f3c866d5414453fc2d7b480
title: Part 32
challengeType: 0
dashedName: part-32
---

# --description--

Starting below the existing coffee/price pair, add the following coffee and prices using `article` elements with two nested `p` elements inside each. As before, the first `p` element's text should contain the coffee flavor and the second `p` element's text should contain the price.

```bash
Caramel Macchiato 3.75
Pumpkin Spice 3.50
Hazelnut 4.00
Mocha 4.50
```

# --hints--

You should have five `article` elements.

```js
assert($('article').length === 5);
```

Each `article` element should have two `p` elements.

```js
const articles = $('article');
assert(articles[0].children.length === 2);
assert(articles[1].children.length === 2);
assert(articles[2].children.length === 2);
assert(articles[3].children.length === 2);
assert(articles[4].children.length === 2);
```

Your first `article` element should have `p` elements with the text `French Vanilla` and `3.00`.

```js
const children = $('article')[0].children;
assert(children[0].innerText.match(/French Vanilla/i));
assert(children[1].innerText.match(/3\.00/i));
```

Your second `article` element should have `p` elements with the text `Caramel Macchiato` and `3.75`.

```js
const children = $('article')[1].children;
assert(children[0].innerText.match(/Caramel Macchiato/i));
assert(children[1].innerText.match(/3\.75/i));
```

Your third `article` element should have `p` elements with the text `Pumpkin Spice` and `3.50`.

```js
const children = $('article')[2].children;
assert(children[0].innerText.match(/Pumpkin Spice/i));
assert(children[1].innerText.match(/3\.50/i));
```

Your fourth `article` element should have `p` elements with the text `Hazelnut` and `4.00`.

```js
const children = $('article')[3].children;
assert(children[0].innerText.match(/Hazelnut/i));
assert(children[1].innerText.match(/4\.00/i));
```

Your fifth `article` element should have `p` elements with the text `Mocha` and `4.50`.

```js
const children = $('article')[4].children;
assert(children[0].innerText.match(/Mocha/i));
assert(children[1].innerText.match(/4\.50/i));
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
--fcc-editable-region--
          <article>
            <p>French Vanilla</p>
            <p>3.00</p>
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
```
