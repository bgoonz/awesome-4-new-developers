---
id: 587d824e367417b2b2512c55
title: Test if an Object has a Property
challengeType: 2
forumTopicId: 301604
dashedName: test-if-an-object-has-a-property
---

# --description--

As a reminder, this project is being built upon the following starter project on [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

`property` asserts that the actual object has a given property.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#16` in the `Objects` suite, change each `assert` to either `assert.property` or `assert.notProperty` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the first assertion - `property` vs. `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notProperty',
        'A car has not wings'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the second assertion - `property` vs. `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'property',
        'planes have engines'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the third assertion - `property` vs. `notProperty`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=15').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'property', 'Cars have wheels');
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
