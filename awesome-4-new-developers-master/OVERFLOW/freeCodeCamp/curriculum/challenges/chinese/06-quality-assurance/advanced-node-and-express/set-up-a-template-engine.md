---
id: 5895f700f9fc0f352b528e63
title: 设置模板引擎
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

你可以采用下面的任意一种方式完成这些挑战：

- 克隆[这个 GitHub 仓库](https://github.com/freeCodeCamp/boilerplate-advancednode/)，在本地完成这些挑战。
- 使用[我们的 Replit 上的初始化项目](https://replit.com/github/freeCodeCamp/boilerplate-advancednode)来完成项目。
- 使用一个你选择的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

完成本项目后，请将一个正常运行的 demo（项目演示）托管在可以公开访问的平台。 然后在 `Solution Link` 框中提交你的项目 URL。

你可以在应用的模版引擎中使用静态模板文件（如那些写在 *Pug* 里的）。 在运行时，模版引擎会用服务端的真实数据替换掉模版文件中的变量， 然后将模版转译成发送给客户端的 HTML 静态文件。 这样可以轻松地构造 HTML 页面，允许在页面直接显示变量内容而不需要从客户端发送 API 请求。

在 `package.json` 文件中添加依赖 `pug@~3.0.0`。

Express 需要知道你正在使用哪个模板引擎。 我们将使用 `set` 方法来分配 `pug` 作为 `view engine` 属性的值： `app.set('view engine', 'pug')`。

在正确渲染 `views/pug` 目录中的索引文件之后，加载页面。

修改 `/` 路由中 `res.render()` 声明的参数为 `views/pug` 目录的文件路径。 这个路径可以是相对路径（相对于 views），也可以是绝对路径，不需要文件扩展。

如果一切顺利，那么你的应用主页不会再显示信息 “`Pug template is not defined.`”，而是会显示一个信息表明你已经成功渲染 Pug 模版！

完成以上要求后，请提交你的页面链接。 如果你遇到问题，可以查看[这里](https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791)的答案。

# --hints--

项目中应使用 Pug 作为依赖。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

View 引擎应该是 Pug。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

使用正确的 ExpressJS 方法渲染来自响应的索引页。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Pug 应该正常运行。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
