---
title: yesNo
tags: string,regexp,intermediate
unlisted: true
firstSeen: 2017-12-30T18:35:54+02:00
lastUpdated: 2021-01-04T13:04:15+02:00
---

Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.

- Use `RegExp.prototype.test()` to check if the string evaluates to `y/yes` or `n/no`.
- Omit the second argument, `def` to set the default answer as `no`.

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

```js
yesNo("Y"); // true
yesNo("yes"); // true
yesNo("No"); // false
yesNo("Foo", true); // true
```
