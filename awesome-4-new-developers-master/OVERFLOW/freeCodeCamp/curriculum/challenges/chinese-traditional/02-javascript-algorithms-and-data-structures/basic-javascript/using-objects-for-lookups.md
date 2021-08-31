---
id: 56533eb9ac21ba0edf2244ca
title: 使用對象進行查找
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

對象和字典一樣，可以用來存儲鍵/值對。 如果數據是扁平的，你可以用對象來查找你想要的值，而不是鏈式使用 `switch` 或 `if/else` 語句。 當你知道你的輸入數據在某個範圍時，這種查找方式極爲有效。

這是簡單的反向字母表：

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

把 switch 語句轉化爲對象 `lookup` 調用。 使用它來查找 `val` 屬性的值，並賦值給 `result` 變量。

# --hints--

`phoneticLookup("alpha")` 應該等於 `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` 應該等於 `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` 應該等於 `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` 應該等於 `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` 應該等於 `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` 應該等於字符串 `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` 應該等於 `undefined`。

```js
assert(typeof phoneticLookup('') === 'undefined');
```

請不要修改 `return` 語句

```js
assert(code.match(/return\sresult;/));
```

請不要使用 `case`、`switch`、`if` 語句

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
