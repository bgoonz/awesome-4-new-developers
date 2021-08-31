---
id: bd7158d8c443edefaeb5bdff
title: Microsserviço conversor de requisição de cabeçalho
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <https://request-header-parser-microservice.freecodecamp.rocks/>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-project-headerparser/) e complete o projeto localmente.
-   Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-headerparser) para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`. Como opção, envie também um link para o código-fonte do projeto no campo `GitHub Link`.

# --hints--

Você deve fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Uma solicitação a `/api/whoami` deve retornar um objeto JSON com o seu endereço IP na chave `ipaddress`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Uma solicitação a `/api/whoami` deve retornar um objeto JSON com o seu idioma preferido na chave `language`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Uma solicitação a `/api/whoami` deve retornar um objeto JSON com o seu software na chave `software`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.software && data.software.length > 0),
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
