---
id: 587d824f367417b2b2512c5a
title: 使用 Chai-HTTP III 的 PUT 方法对 API 请求运行功能测试
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

请注意，本项目在[这个 Replit 项目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

接下来，我们将了解如何使用请求的 payload（body）发送数据。 我们需要测试一个 PUT 请求， `'/travellers'` 接收如下的 JSON 对象：

```json
{
  "surname": [last name of a traveller of the past]
}
```

路由响应如下：

```json
{
  "name": [first name], "surname": [last name], "dates": [birth - death years]
}
```

更多细节请查看服务器代码。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'send {surname: "Colombo"}'` 测试（`// #3`）：

发送以下 JSON 响应作为有效载荷：

```json
{
  "surname": "Colombo"
}
```

在 `request.end` 返回中检查以下情况：

1.  `status`
2.  `type`
3.  `body.name`
4.  `body.surname`

请按照以上顺序书写断言，顺序错误会影响系统判定。 完成后，请务必移除 `assert.fail()`。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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

需要测试 “res.type” 是否为 “application/json”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要测试 “res.body.name” 是否为 “Cristoforo”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要测试 “res.body.surname” 是否为 “Colombo”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
