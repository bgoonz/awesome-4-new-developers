---
title: pad
tags: string,beginner
firstSeen: 2018-02-24T11:51:27+02:00
lastUpdated: 2020-10-22T20:24:04+03:00
---

Pads a string on both sides with the specified character, if it's shorter than the specified `length`.

- Use `String.prototype.padStart()` and `String.prototype.padEnd()` to pad both sides of the given string.
- Omit the third argument, `char`, to use the whitespace character as the default padding character.

```js
const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
```

```js
pad("cat", 8); // '  cat   '
pad(String(42), 6, "0"); // '004200'
pad("foobar", 3); // 'foobar'
```
