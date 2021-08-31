---
id: 587d7fb0367417b2b2512bed
title: Conhecer o console do Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Trabalhar nesses desafios vai fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-express/) e complete esses desafios localmente.
- Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-express) para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`.

Durante o processo de desenvolvimento, é importante poder verificar o que está acontecendo no código.

O Node é apenas um ambiente JavaScript. Como o JavaScript lado do client, você pode usar o console para exibir informações úteis de depuração. Em sua máquina local, você veria a saída do console em um terminal. No Replit, um terminal está aberto no painel direito por padrão.

Recomendamos que o terminal continue aberto enquanto você trabalha nesses desafios. Ao ler a saída no terminal, você poderá ver os erros que podem ocorrer.

# --instructions--

Modifique o arquivo `myApp.js` para registrar "Hello World" no console.

# --hints--

`"Hello World"` deve estar no console

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
