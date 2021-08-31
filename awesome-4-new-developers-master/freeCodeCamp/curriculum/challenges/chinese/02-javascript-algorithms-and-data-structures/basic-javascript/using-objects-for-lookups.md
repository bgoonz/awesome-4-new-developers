---
id: 56533eb9ac21ba0edf2244ca
title: 使用对象进行查找
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

对象和字典一样，可以用来存储键/值对。 如果数据是扁平的，你可以用对象来查找你想要的值，而不是链式使用 `switch` 或 `if/else` 语句。 当你知道你的输入数据在某个范围时，这种查找方式极为有效。

这是简单的反向字母表：

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
```

`alpha[2]` 是字符串 `Y`，`alpha[24]` 是字符串 `C`，`alpha[value]` 是字符串 `Y`。

# --instructions--

把 switch 语句转化为对象 `lookup` 调用。 使用它来查找 `val` 属性的值，并赋值给 `result` 变量。

# --hints--

`phoneticLookup("alpha")` 应该等于 `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` 应该等于 `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` 应该等于 `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` 应该等于 `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` 应该等于 `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` 应该等于字符串 `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` 应该等于 `undefined`。

```js
assert(typeof phoneticLookup('') === 'undefined');
```

请不要修改 `return` 语句

```js
assert(code.match(/return\sresult;/));
```

请不要使用 `case`、`switch`、`if` 语句

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
