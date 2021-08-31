---
id: 5e6dd1278e6ca105cde40ea9
title: Longest common subsequence
challengeType: 5
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

The **longest common subsequence** (or [**LCS**](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem)) of groups A and B is the longest group of elements from A and B that are common between the two groups and in the same order in each group. For example, the sequences "1234" and "1224533324" have an LCS of "1234":

***1234***

***12***245***3***332***4***

For a string example, consider the sequences "thisisatest" and "testing123testing". An LCS would be "tsitest":

***t***hi***si***sa***test***

***t***e***s***t***i***ng123***test***ing.

Your code only needs to deal with strings.

For more information on this problem please see [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

# --instructions--

Write a case-sensitive function that returns the LCS of two strings. You don't need to show multiple LCS's.

# --hints--

`lcs` should be a function.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` should return a string.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` should return `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` should return `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` should return `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` should return `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` should return `"ABAD"`.

```js
assert.equal(lcs('ABAZDC', 'BACBAD'), 'ABAD');
```

# --seed--

## --seed-contents--

```js
function lcs(a, b) {

}
```

# --solutions--

```js
function lcs(a, b) {
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);

  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return lcs(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    var x = lcs(a, bSub);
    var y = lcs(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}
```
