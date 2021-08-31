---
title: initializeArrayWithRangeRight
tags: array,intermediate
firstSeen: 2018-01-16T17:09:39+02:00
lastUpdated: 2020-10-20T23:02:01+03:00
---

Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.

- Use `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.prototype.map()` to fill with the desired values in a range.
- Omit the second argument, `start`, to use a default value of `0`.
- Omit the last argument, `step`, to use a default value of `1`.

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

```js
initializeArrayWithRangeRight(5); // [5, 4, 3, 2, 1, 0]
initializeArrayWithRangeRight(7, 3); // [7, 6, 5, 4, 3]
initializeArrayWithRangeRight(9, 0, 2); // [8, 6, 4, 2, 0]
```
