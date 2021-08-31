---
id: 5f331e55dfab7a896e53c3a1
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

The `title` is one of several elements that provide extra information not visible on the web page, but could be useful for search engines or how the page gets displayed.

Inside the `head` element, nest a `meta` element with an attribute named `charset` set to the value `utf-8` to tell the browser how to encode characters for the page. Note that `meta` elements are self-closing.

# --hints--

You should have a `meta` tag.

```js
assert(code.match(/<meta\s.*>/i));
```

Your `meta` tag should have a `charset` attribute.

```js
assert(code.match(/<meta charset=/i));
```

Your `charset` attribute should have a value of `utf-8`.

```js
assert(code.match(/charset=('|")utf-8\1/i));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <title>Camper Cafe Menu</title>
  </head>
--fcc-editable-region--
<html>
```
