---
id: 587d824e367417b2b2512c57
title: 测试对象是否是构造函数的实例
challengeType: 2
forumTopicId: 301605
dashedName: test-if-an-object-is-an-instance-of-a-constructor
---

# --description--

请注意，本项目在[这个 Replit 项目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

`#instanceOf` 断言一个对象是一个构造器的实例。

# --instructions--

在 `tests/1_unit-tests.js` 中，`Objects` 套件里标有 `#18` 的测试下，将每个 `assert` 改成 `assert.instanceOf` 或 `assert.notInstanceOf` 方法，通过测试（结果应该返回 `true`）。 不要修改传给断言的参数。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第一个断言选择正确的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notInstanceOf',
        'myCar is not an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第二个断言选择正确的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'instanceOf',
        'airlinePlane is an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第三个断言选择正确的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'instanceOf',
        'everything is an Object in JavaScript...'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第四个断言选择正确的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'notInstanceOf',
        'myCar.wheels is not an instance of String'
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
