---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

The inequality operator (`!=`) is the opposite of the equality operator. It means not equal and returns `false` where equality would return `true` and *vice versa*. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

```js
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
```

In order, these expressions would evaluate to `true`, `false`, `false`, `false`, and `false`.

# --instructions--

Add the inequality operator `!=` in the `if` statement so that the function will return the string `Not Equal` when `val` is not equivalent to `99`

# --hints--

`testNotEqual(99)` should return the string `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` should return the string `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` should return the string `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` should return the string `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` should return the string `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

You should use the `!=` operator

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
