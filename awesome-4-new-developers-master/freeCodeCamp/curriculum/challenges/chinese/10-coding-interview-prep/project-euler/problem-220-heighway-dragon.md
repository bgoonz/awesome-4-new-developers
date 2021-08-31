---
id: 5900f4481000cf542c50ff5b
title: 'Problem 220: Heighway Dragon'
challengeType: 5
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Let D0 be the two-letter string "Fa". For n≥1, derive Dn from Dn-1 by the string-rewriting rules:

"a" → "aRbFR" "b" → "LFaLb"

Thus, D0 = "Fa", D1 = "FaRbFR", D2 = "FaRbFRRLFaLbFR", and so on.

These strings can be interpreted as instructions to a computer graphics program, with "F" meaning "draw forward one unit", "L" meaning "turn left 90 degrees", "R" meaning "turn right 90 degrees", and "a" and "b" being ignored. The initial position of the computer cursor is (0,0), pointing up towards (0,1).

Then Dn is an exotic drawing known as the Heighway Dragon of order n. For example, D10 is shown below; counting each "F" as one step, the highlighted spot at (18,16) is the position reached after 500 steps.

What is the position of the cursor after 1012 steps in D50 ? Give your answer in the form x,y with no spaces.

# --hints--

`euler220()` should return 139776, 963904.

```js
assert.strictEqual(euler220(), 139776, 963904);
```

# --seed--

## --seed-contents--

```js
function euler220() {

  return true;
}

euler220();
```

# --solutions--

```js
// solution required
```
