---
id: 589a69f5f9fc0f352b528e71
title: Implementar a autenticação social II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

A última parte da configuração da autenticação no GitHub é criar a própria estratégia. Para isso, você precisará adicionar a dependência do `passport-github@~1.1.0` ao projeto e solicitá-la no `auth.js` como `GithubStrategy` assim: `const GitHubStrategy = require('passport-github').Strategy;`. Não se esqueça de solicitar e configurar o `dotenv` para usar as variáveis de ambiente.

Para configurar a estratégia do GitHub, você precisa dizer ao Passport para usar uma `GitHubStrategy` instanciada, que aceite 2 argumentos: um objeto (contendo `clientID`, `clientSecret` e `callbackURL`) e uma função a ser chamada quando um usuário é autenticado com sucesso, que determinará se o usuário é novo e quais campos salvar inicialmente no objeto do banco de dados do usuário. Isto é comum em muitas estratégias, mas algumas podem exigir mais informações, conforme descrito no README do GitHub da estratégia específica. Por exemplo, O Google também requer um *scope*, o qual determina que tipo de informação a solicitação está pedindo que seja devolvida e pede ao usuário que aprove esse acesso. A estratégia atual que estamos implementando tem seu uso delineado [aqui](https://github.com/jaredhanson/passport-github/), mas nós a examinaremos bem aqui, no freeCodeCamp!

Saiba como a nova estratégia deve se parecer nesse momento:

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

A autenticação ainda não será bem-sucedida e realmente lançará um erro sem a lógica e a função de callback do banco de dados, mas ela deverá fazer o login com o seu perfil do GitHub no console se você tentar!

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6).

# --hints--

A dependência do passport-github deve ser adicionada.

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

O passport-github deve ser solicitado.

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

A estratégia do GitHub deve estar configurada corretamente até aqui.

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
