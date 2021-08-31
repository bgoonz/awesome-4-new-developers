---
id: 5f344fad8bf01691e71a30eb
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

Up until now, you have been limited regarding the presentation and appearance of the content you create. To start taking control, add a `style` element within the `head` element.

# --hints--

Your code should have an opening `<style>` tag.

```js
assert(code.match(/<style\s*>/i));
```

Your code should have a closing `</style>` tag.

```js
assert(code.match(/<\/style\s*>/));
```

Your `style` element should be nested in your `head` element.

```js
assert(code.match(/<head\s*>[\w\W\s]*<style\s*>[\w\W\s]*<\/style\s*>[\w\W\s]*<\/head\s*>/i))
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
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
--fcc-editable-region--
<html>
```
