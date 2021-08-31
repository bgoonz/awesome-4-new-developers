---
id: 587d824f367417b2b2512c59
title: 使用 Chai-HTTP II 在 API 端上运行功能测试
challengeType: 2
forumTopicId: 301592
dashedName: run-functional-tests-on-api-endpoints-using-chai-http-ii
---

# --description--

请注意，本项目在[这个 Replit 项目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'Test GET /hello with your name'` 测试（`// #2`），对 `status` 和 `text` 断言。

在查询中发送 name，将 `?name=<your_name>` 添加到路由。 端点响应 `'hello <your_name>'`。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应测试 “res.status” 是否为 200。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应测试 “res.text“ 是否为 ”hello Guest“。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /hello [\w\d_-]/);
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
