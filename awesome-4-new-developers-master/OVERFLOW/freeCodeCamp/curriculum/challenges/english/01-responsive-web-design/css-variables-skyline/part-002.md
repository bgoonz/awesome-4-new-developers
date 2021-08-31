---
id: 5d822fd413a79914d39e98ca
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

Add opening and closing `html` tags below the `DOCTYPE` so you have a place to start putting some code.

# --hints--

Your `html` element should be below the `DOCTYPE` declaration.

```js
assert(code.match(/(?<!<html\s*>)<!DOCTYPE\s+html\s*>/gi));
```

Your `html` element should have an opening tag.

```js
assert(code.match(/<html\s*>/gi));
```

Your `html` element should have a closing tag.

```js
assert(code.match(/<\/html\s*>/));
```

Your `html` tags should be in the correct order.

```js
assert(code.match(/<html\s*>\s*<\/html\s*>/));
```

You should only have one `html` element.

```js
assert(document.querySelectorAll('html').length === 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
--fcc-editable-region--

--fcc-editable-region--

```
