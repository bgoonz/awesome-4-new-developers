---
id: 5f34a1fd611d003edeafd681
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

That brown background makes it hard to read the text. Change the `body` element's background color to be `burlywood` so it has some color but you are still be able to read the text.

# --hints--

You should set the `background-color` property to `burlywood`.

```js
const hasBackground = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['background-color'] === 'burlywood');
assert(hasBackground);
```

Your `body` element should have a `burlywood` background.

```js
const bodyBackground = new __helpers.CSSHelp(document).getStyle('body')?.getPropertyValue('background-color');
assert(bodyBackground === 'burlywood');
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
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
    <main>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
<html>
```

```css
--fcc-editable-region--
body {
  background-color: brown;
}
--fcc-editable-region--
h1, h2, p {
  text-align: center;
}
```
