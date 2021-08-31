---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Sometimes you will need to build a string, [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) style. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.

Example:

```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` would have a value of the string `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Set `myName` to a string equal to your name and build `myStr` with `myName` between the strings `My name is ` and ` and I am well!`

# --hints--

`myName` should be set to a string at least 3 characters long.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

You should use two `+` operators to build `myStr` with `myName` inside it.

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Only change code below this line
var myName;
var myStr;
```

# --solutions--

```js
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";
```
