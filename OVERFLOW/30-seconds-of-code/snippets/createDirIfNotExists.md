---
title: createDirIfNotExists
tags: node,beginner
firstSeen: 2018-12-12T19:25:16+02:00
lastUpdated: 2020-10-22T20:23:47+03:00
---

Creates a directory, if it does not exist.

- Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

```js
const fs = require("fs");

const createDirIfNotExists = (dir) =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
```

```js
createDirIfNotExists("test");
// creates the directory 'test', if it doesn't exist
```
