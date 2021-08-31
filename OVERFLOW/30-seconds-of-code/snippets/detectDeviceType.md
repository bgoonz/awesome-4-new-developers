---
title: detectDeviceType
tags: browser,regexp,intermediate
firstSeen: 2017-12-24T09:39:23+02:00
lastUpdated: 2020-10-22T20:23:47+03:00
---

Detects whether the page is being viewed on a mobile device or a desktop.

- Use a regular expression to test the `navigator.userAgent` property to figure out if the device is a mobile device or a desktop.

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
```

```js
detectDeviceType(); // 'Mobile' or 'Desktop'
```
