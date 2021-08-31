---
id: 589a69f5f9fc0f352b528e71
title: 实现第二种社交登录
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

设置 GitHub 验证的最后一步是创建策略本身。 为此，你需要在项目中添加 `passport-github@~1.1.0` 依赖，并在 `auth.js` 中请求它，作为 `GithubStrategy`，像这样：`const GitHubStrategy = require('passport-github').Strategy;`。 别忘了请求和配置 `dotenv`，使用你的环境变量。

为了设置 GitHub 策略，我们需要在 Passport 中使用实例化的 `GitHubStrategy`，它可以接收两个参数：一个对象（包括 `clientID`、`clientSecret` 和 `callbackURL`），以及一个回调函数。在这个回调函数中，我们要处理验证成功时，判断用户是否已经在数据库中存在的逻辑，以及在用户数据库对象中最初保存哪些字段。 这种处理方式适用于绝大部分第三方验证策略，但有些策略会需要我们提供更多的信息，详情请参考相关策略的 GitHub README。 例如，Google 的验证策略会要求你提供一个 *scope*，用于标示用户成功登录后，你需要从返回的对象中获取那些信息。以及，这也需要经过用户同意，你才可以获取到。 你可以在[这里](https://github.com/jaredhanson/passport-github/)了解当前我们使用的验证策略的用法，不过我们也会在 freeCodeCamp 课程中进行详细讲解。

你的新策略应该这样去实现：

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing our user object
  }
));
```

目前，你的验证部分不会成功。由于没有数据库的逻辑和回调函数，你的代码目前还会报错。但如果你试一试，就可以在控制台里看到输出了你的 GitHub 个人信息。

完成上述要求后，请提交你的页面链接。 如果你遇到了问题，可以参考[这里](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6)的答案。

# --hints--

应正确添加依赖 passport-github。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-github',
        'Your project should list "passport-github" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应正确请求依赖 passport-github。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-github("|')/gi,
        'You should have required passport-github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

到目前为止，Github 策略应正确设置。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /passport\.use.*new GitHubStrategy/gis,
        'Passport should use a new GitHubStrategy'
      );
      assert.match(
        data,
        /callbackURL:\s*("|').*("|')/gi,
        'You should have a callbackURL'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_SECRET'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_ID'
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
