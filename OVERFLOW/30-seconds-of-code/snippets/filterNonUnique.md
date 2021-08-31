---
title: filterNonUnique
tags: array,beginner
firstSeen: 2017-12-17T17:55:51+02:00
lastUpdated: 2020-11-02T19:40:45+02:00
---

Creates an array with the non-unique values filtered out.

- Use `new Set()` and the spread operator (`...`) to create an array of the unique values in `arr`.
- Use `Array.prototype.filter()` to create an array containing only the unique values.

```js
const filterNonUnique = (arr) =>
  [...new Set(arr)].filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

```js
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
