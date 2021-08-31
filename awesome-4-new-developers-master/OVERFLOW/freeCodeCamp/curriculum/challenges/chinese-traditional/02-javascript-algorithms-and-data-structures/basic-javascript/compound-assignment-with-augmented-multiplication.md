---
id: 56533eb9ac21ba0edf2244b1
title: 複合賦值之 *=
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

`*=` 操作符是讓變量與一個數相乘並賦值。

```js
myVar = myVar * 5;
```

將 `myVar` 乘以 `5`。 等價於：

```js
myVar *= 5;
```

# --instructions--

使用 `*=` 操作符對 `a`、`b` 和 `c` 實現賦值相乘操作。

# --hints--

`a` 應該等於`25`。

```js
assert(a === 25);
```

`b` 應該等於`36`。

```js
assert(b === 36);
```

`c` 應該等於`46`。

```js
assert(c === 46);
```

應該對每個變量使用 `*=` 操作符。

```js
assert(code.match(/\*=/g).length === 3);
```

不要修改註釋上面的代碼。

```js
assert(
  /var a = 5;/.test(code) &&
    /var b = 12;/.test(code) &&
    /var c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
