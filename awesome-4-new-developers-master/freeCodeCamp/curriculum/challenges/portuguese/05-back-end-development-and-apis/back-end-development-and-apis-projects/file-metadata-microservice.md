---
id: bd7158d8c443edefaeb5bd0f
title: Microsserviço de metadados de arquivos
challengeType: 4
forumTopicId: 301506
dashedName: file-metadata-microservice
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <https://file-metadata-microservice.freecodecamp.rocks/>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/) e complete o projeto localmente.
-   Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-filemetadata) para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`. Como opção, envie também um link para o código-fonte do projeto no campo `GitHub Link`.

# --instructions--

**DICA:** você pode usar o pacote `multer` do npm para lidar com o envio de arquivos.

# --hints--

Você deve fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Você pode enviar um formulário que inclua o upload de arquivos.

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[type="file"]'));
};
```

O campo entrada do arquivo de formulário tem o atributo `name` definido como `upfile`.

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[name="upfile"]'));
};
```

Ao enviar um arquivo, você recebe `name` (nome), `type` (tipo) e `size` (tamanho, em bytes) do arquivo dentro da resposta em JSON.

```js
async (getUserInput) => {
  const formData = new FormData();
  const fileData = await fetch(
    'https://cdn.freecodecamp.org/weather-icons/01d.png'
  );
  const file = await fileData.blob();
  formData.append('upfile', file, 'icon');
  const data = await fetch(getUserInput('url') + '/api/fileanalyse', {
    method: 'POST',
    body: formData
  });
  const parsed = await data.json();
  assert.property(parsed, 'size');
  assert.equal(parsed.name, 'icon');
  assert.equal(parsed.type, 'image/png');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
