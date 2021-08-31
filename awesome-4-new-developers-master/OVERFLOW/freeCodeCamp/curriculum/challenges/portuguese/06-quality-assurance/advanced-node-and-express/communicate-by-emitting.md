---
id: 589fc831f9fc0f352b528e75
title: Comunicar por envio
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Enviar</dfn> é a forma mais comum de comunicação que você usará. Quando você envia algo do servidor para 'io', está enviando o nome e os dados de um evento para todos os sockets conectados. Um bom exemplo deste conceito seria enviar a contagem atual de usuários conectados a cada vez que um novo usuário se conecta!

Comece adicionando uma variável para manter o controle dos usuários, logo antes do local onde você está escutando as conexões no momento.

```js
let currentUsers = 0;
```

Agora, quando alguém se conecta, você deve incrementar a contagem antes de enviá-la. Então, você vai querer adicionar o incrementador dentro do listener de conexões.

```js
++currentUsers;
```

Por fim, depois de incrementar a contagem, você deve enviar o evento (ainda dentro do listener de conexão). O evento deve ser nomeado 'user count' e o dado devem ser simplesmente `currentUsers`.

```js
io.emit('user count', currentUsers);
```

Agora, você pode implementar uma maneira de o client escutar este evento! De modo semelhante a escutar uma conexão no servidor, você usará a palavra-chave `on`.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Agora, tente carregar o seu aplicativo, autentique-se e você deve ver no console do client '1', representando a contagem de usuários no momento! Tente carregar mais clients, e autenticar para ver o número subir.

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/28ef7f1078f56eb48c7b1aeea35ba1f5).

# --hints--

currentUsers deve estar definido.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /currentUsers/gi,
        'You should have variable currentUsers defined'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O servidor deve enviar o contador atual a cada nova conexão.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user count('|").*currentUsers/gi,
        'You should emit "user count" with data currentUsers'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O client deve estar escutando o evento 'user count'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user count('|")/gi,
        'Your client should be connection to server with the connection defined as socket'
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
