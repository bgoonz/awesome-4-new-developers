---
title: cloneRegExp
tags: type,intermediate
firstSeen: 2018-01-01T19:45:47+02:00
lastUpdated: 2020-10-22T20:23:47+03:00
---

Clones a regular expression.

- Use `new RegExp()`, `RegExp.prototype.source` and `RegExp.prototype.flags` to clone the given regular expression.

```js
const cloneRegExp = (regExp) => new RegExp(regExp.source, regExp.flags);
```

```js
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // regExp !== regExp2
```
