---
title: getTimestamp
tags: date,beginner
firstSeen: 2020-10-08T17:15:56+03:00
lastUpdated: 2020-10-19T22:49:51+03:00
---

Gets the Unix timestamp from a `Date` object.

- Use `Date.prototype.getTime()` to get the timestamp in milliseconds and divide by `1000` to get the timestamp in seconds.
- Use `Math.floor()` to appropriately round the resulting timestamp to an integer.
- Omit the argument, `date`, to use the current date.

```js
const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);
```

```js
getTimestamp(); // 1602162242
```
