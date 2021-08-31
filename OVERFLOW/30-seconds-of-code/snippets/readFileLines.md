---
title: readFileLines
tags: node,array,beginner
firstSeen: 2017-12-17T17:55:51+02:00
lastUpdated: 2020-10-22T20:24:04+03:00
---

Returns an array of lines from the specified file.

- Use `fs.readFileSync()` to create a `Buffer` from a file.
- Convert buffer to string using `buf.toString(encoding)` function.
- Use `String.prototype.split(\n)` to create an array of lines from the contents of the file.

```js
const fs = require("fs");

const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");
```

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines("test.txt");
console.log(arr); // ['line1', 'line2', 'line3']
```
