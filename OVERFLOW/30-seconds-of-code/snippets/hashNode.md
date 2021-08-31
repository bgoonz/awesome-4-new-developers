---
title: hashNode
tags: node,promise,advanced
firstSeen: 2018-01-17T14:09:01+02:00
lastUpdated: 2020-10-19T22:30:46+03:00
---

Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm.
Returns a promise.

- Use `crypto.createHash()` to create a `Hash` object with the appropriate algorithm.
- Use `hash.update()` to add the data from `val` to the `Hash`, `hash.digest()` to calculate the digest of the data.
- Use `setTimeout()` to prevent blocking on a long operation, and return a `Promise` to give it a familiar interface.

```js
const crypto = require("crypto");

const hashNode = (val) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(crypto.createHash("sha256").update(val).digest("hex")),
      0
    )
  );
```

```js
hashNode(JSON.stringify({ a: "a", b: [1, 2, 3, 4], foo: { c: "bar" } })).then(
  console.log
);
// '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```
