---
title: uniqueElementsBy
tags: array,intermediate
firstSeen: 2018-07-18T20:49:07+03:00
lastUpdated: 2020-10-22T20:24:44+03:00
---

Finds all unique values of an array, based on a provided comparator function.

- Use `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.
- The comparator function takes two arguments: the values of the two elements being compared.

```js
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

```js
uniqueElementsBy(
  [
    { id: 0, value: "a" },
    { id: 1, value: "b" },
    { id: 2, value: "c" },
    { id: 1, value: "d" },
    { id: 0, value: "e" },
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
```
