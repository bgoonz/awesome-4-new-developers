---
id: 56533eb9ac21ba0edf2244e2
title: 凯撒密码
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

凯撒密码（ <dfn>Caesar cipher</dfn>）是最简单且最广为人知的密码（<dfn>ciphers</dfn>），也被称为移位密码（<dfn>shift cipher</dfn>）。 在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。

[ROT13](https://en.wikipedia.org/wiki/ROT13) 是一个被广泛使用的加密技术，明文中的所有字母都被移动 13 位。 也就是， `A ↔ N`，`B ↔ O` 等等。

编写一个函数，它将 [ROT13](https://en.wikipedia.org/wiki/ROT13) 编码的字符串作为输入并返回解码字符串。

所有解码后的字母都必须为字母大写。 请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。

# --hints--

`rot13("SERR PBQR PNZC")` 应解码为 `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` 应解码为 `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` 应解码为 `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` 应解码为 `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --seed--

## --seed-contents--

```js
function rot13(str) {

  return str;
}

rot13("SERR PBQR PNZC");
```

# --solutions--

```js
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
```
