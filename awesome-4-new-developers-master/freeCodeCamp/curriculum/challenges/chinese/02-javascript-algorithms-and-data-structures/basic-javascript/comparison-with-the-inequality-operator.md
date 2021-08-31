---
id: 56533eb9ac21ba0edf2244d2
title: 不等运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

不相等运算符（`!=`）与相等运算符是相反的。 这意味着不相等并返回 `false` 的地方，用相等运算符会返回 `true`，*反之亦然*。 与相等运算符类似，不相等运算符在比较的时候也会转换值的数据类型。

**例如**

```js
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
```

按顺序，这些表达式会返回 `true`、`false`、`false`、`false` 和 `false`。

# --instructions--

在 `if` 语句中，添加不相等运算符 `!=`，这样函数在当 `val` 不等于 `99` 的时候，会返回 `Not Equal`。

# --hints--

`testNotEqual(99)` 应该返回字符串 `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` 应该返回字符串 `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` 应该返回字符串 `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` 应该返回字符串 `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` 应该返回字符串 `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

你应该使用 `!=` 运算符。

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```
