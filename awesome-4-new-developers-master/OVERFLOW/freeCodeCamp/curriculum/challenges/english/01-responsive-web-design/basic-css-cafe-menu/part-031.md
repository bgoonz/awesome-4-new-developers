---
id: 5f3c866daec9a49519871816
title: Part 31
challengeType: 0
dashedName: part-31
---

# --description--

`article` elements commonly contain multiple elements that have related information. In this case, it will contain a coffee flavor and a price for that flavor. Nest two `p` elements inside your `article` element. The first one's text should be `French Vanilla`, and the second's text `3.00`.

# --hints--

You should not change the existing `article` element.

```js
assert($('article').length === 1);
```

Your `article` element should have two `p` elements.

```js
assert($('article').children('p').length === 2);
```

Your first `p` element should have the text `French Vanilla`.

```js
const firstP = $('article').children('p')[0];
assert(firstP.innerText.match(/French Vanilla/i));
```

Your second `p` element should have the text `3.00`.

```js
const secondP = $('article').children('p')[1];
assert(secondP.innerText.match(/3\.00/i));
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
