---
id: 56533eb9ac21ba0edf2244ba
title: 了解字符串的不变性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

在 JavaScript 中，字符串（`String`）的值是不可变的（<dfn>immutable</dfn>），这意味着一旦字符串被创建就不能被改变。

例如，下面的代码：

```js
var myStr = "Bob";
myStr[0] = "J";
```

是不会把变量 `myStr` 的值改变成 `Job` 的，因为变量 `myStr` 是不可变的。 注意，这*并不*意味着 `myStr` 永远不能被改变，只是字符串字面量 <dfn>string literal</dfn> 的各个字符不能被改变。 改变 `myStr` 的唯一方法是重新给它赋一个值，例如：

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

更正对 `myStr` 的分配，使用上面示例中的方法包含 `Hello World` 字符串。

# --hints--

`myStr` 的值应该是字符串 `Hello World`。

```js
assert(myStr === 'Hello World');
```

不要修改注释上面的代码。

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
