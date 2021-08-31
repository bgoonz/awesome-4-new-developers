---
id: 587d8248367417b2b2512c3a
title: 用 helmet.noSniff() 避免推断出响应的 MIME 类型。
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

请注意，本项目在[这个 Repl.it 项目](https://replit.com/github/freeCodeCamp/boilerplate-infosec)的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。 浏览器可以使用内容或 MIME 嗅探来覆盖响应的 `Content-Type` 头，猜测并使用隐含的内容类型来处理数据。 虽然这在某些情况下可能很方便，但也可能导致一些危险的攻击。 该中间件将 X-Content-Type-Options 头设置为 `nosniff`，指示浏览器不要绕过所提供的 `Content-Type`。

# --instructions--

在你的服务器上使用 `helmet.noSniff()` 方法。

# --hints--

helmet.noSniff() 中间件应该被正确安装

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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
