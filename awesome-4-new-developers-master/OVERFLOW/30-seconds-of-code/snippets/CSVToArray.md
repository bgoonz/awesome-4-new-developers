---
title: CSVToArray
tags: string,array,intermediate
firstSeen: 2018-06-27T20:57:54+03:00
lastUpdated: 2020-11-03T21:46:13+02:00
---

Converts a comma-separated values (CSV) string to a 2D array.

- Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
- Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
- Omit the second argument, `delimiter`, to use a default delimiter of `,`.
- Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.

```js
const CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));
```

```js
CSVToArray("a,b\nc,d"); // [['a', 'b'], ['c', 'd']];
CSVToArray("a;b\nc;d", ";"); // [['a', 'b'], ['c', 'd']];
CSVToArray("col1,col2\na,b\nc,d", ",", true); // [['a', 'b'], ['c', 'd']];
```
