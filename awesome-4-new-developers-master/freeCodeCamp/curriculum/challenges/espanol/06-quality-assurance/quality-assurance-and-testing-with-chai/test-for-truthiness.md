---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

As a reminder, this project is being built upon the following starter project on [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

`isTrue()` will test for the boolean value `true` and `isNotTrue()` will pass when given anything but the boolean value of `true`.

```js
assert.isTrue(true, 'this will pass with the boolean value true');
assert.isTrue('true', 'this will NOT pass with the string value "true"');
assert.isTrue(1, 'this will NOT pass with the number value 1');
```

`isFalse()` and `isNotFalse()` also exist, and behave similarly to their true counterparts except they look for the boolean value of `false`.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#4` in the `Basic Assertions` suite, change each `assert` to either `assert.isTrue` or `assert.isNotTrue` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the first assertion - `isTrue` vs. `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isTrue', 'True is true');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the second assertion - `isTrue` vs. `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isTrue',
        'Double negation of a truthy value is true'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the third assertion - `isTrue` vs. `isNotTrue`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isNotTrue',
        'A truthy object is not true - neither is a false one'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
