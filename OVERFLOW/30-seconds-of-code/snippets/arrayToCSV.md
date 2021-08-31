---
title: arrayToCSV
tags: array,string,intermediate
firstSeen: 2018-06-27T20:26:43+03:00
lastUpdated: 2020-11-03T21:55:08+02:00
---

Converts a 2D array to a comma-separated values (CSV) string.

- Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
- Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
- Omit the second argument, `delimiter`, to use a default delimiter of `,`.

```js
const arrayToCSV = (arr, delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");
```

```js
arrayToCSV([
  ["a", "b"],
  ["c", "d"],
]); // '"a","b"\n"c","d"'
arrayToCSV(
  [
    ["a", "b"],
    ["c", "d"],
  ],
  ";"
); // '"a";"b"\n"c";"d"'
arrayToCSV([
  ["a", '"b" great'],
  ["c", 3.1415],
]);
// '"a","""b"" great"\n"c",3.1415'
```
