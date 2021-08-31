---
id: 587d824a367417b2b2512c45
title: Quadro de mensagens anônimas
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <https://anonymous-message-board.freecodecamp.rocks/>.

Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) e complete o projeto localmente.
-   Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard) para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`. Como opção, envie também um link para o código-fonte do projeto no campo `GitHub Link`.

# --instructions--

1.  Defina `NODE_ENV` para testar sem aspas quando estiver pronto para escrever testes e BD para a string de conexão dos bancos de dados (em `.env`)
2.  Esse é o recomendado para criar controladores/manipuladores e lidar com roteamento em `routes/api.js`
3.  Você adicionará todas as funcionalidades de segurança ao `server.js`

Escreva os testes a seguir em `tests/2_functional-tests.js`:

-   Criar um novo tópico: solicitação de POST para `/api/threads/{board}`
-   Visualizar os 10 tópicos mais recentes com 3 respostas cada: solicitação GET para `/api/threads/{board}`
-   Excluir um tópico com a senha incorreta: solicitação DELETE para `/api/threads/{board}` com uma `delete_password` inválida
-   Excluir um tópico com a senha correta: solicitação DELETE para `/api/threads/{board}` com uma `delete_password` válida
-   Denunciar um tópico: solicitação de PUT para `/api/threads/{board}`
-   Criar uma nova resposta: solicitação de POST para `/api/replies/{board}`
-   Visualizar um único tópico com todas as respostas: solicitação GET para `/api/replies/{board}`
-   Excluir uma resposta com a senha incorreta: solicitação DELETE para `/api/replies/{board}` com uma `delete_password` inválida
-   Excluir uma resposta com a senha correta: solicitação DELETE para `/api/replies/{board}` com uma `delete_password` válida
-   Denunciar uma resposta: solicitação de PUT para `/api/replies/{board}`

# --hints--

Você pode fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Permita apenas que o site seja carregado em um iFrame em suas próprias páginas.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

Não permita o pré-carregamento de DNS.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Permita apenas que seu site envie o encaminhador para suas próprias páginas.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

Você pode enviar uma solicitação POST para `/api/threads/{board}` com dados de formulário, incluindo `text` e `delete_password`. O registro salvo do banco de dados terá pelo menos os campos `_id`, `text`, `created_on` (data e hora), `bumped_on`(data e hora, começa igual a `created_on`), `reported` (booleano), `delete_password` e `replies` (array).

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de POST para `/api/replies/{board}` com dados de formulário, incluindo `text`, `delete_password` e `thread_id`. Isto atualizará a data de `bumped_on` para a data do comentário. No array `replies` do tópico, um objeto será salvo com pelo menos as propriedades `_id`, `text`, `created_on`, `delete_password` e `reported`.

```js

```

Você pode enviar uma solicitação de GET para `/api/threads/{board}`. O conteúdo retornado será um array dos 10 tópicos que mais subiram no quadro apenas com as 3 respostas mais recentes para cada um deles. Os campos `reported` e `delete_password` não serão enviados ao client.

```js

```

Você pode enviar uma solicitação de GET para `/api/replies/{board}?thread_id={thread_id}`. O conteúdo retornado será o tópico inteiro com todas as suas respostas, também excluindo os mesmos campos do client do teste anterior.

```js

```

Você pode enviar uma solicitação de DELETE para `/api/threads/{board}` e passar adiante `thread_id` e `delete_password` para excluir o tópico. O conteúdo retornado será a string `incorrect password` ou `success`.

```js

```

Você pode enviar uma solicitação de DELETE para `/api/replies/{board}` e passar adiante `thread_id`, `reply_id` e `delete_password`. O conteúdo retornado será a string `incorrect password` ou `success`. Em caso de sucesso, o texto de `reply_id` será alterado para `[deleted]`.

```js

```

Você pode enviar uma solicitação de PUT para `/api/threads/{board}` e passar adiante a `thread_id`. O conteúdo retornado será a string `success`. O valor `reported` de `thread_id` será alterado para `true`.

```js

```

Você pode enviar uma solicitação de PUT para `/api/replies/{board}` e passar adiante `thread_id` e `reply_id`. O conteúdo retornado será a string `success`. O valor `reported` de `reply_id` será alterado para `true`.

```js

```

Todos os 10 testes funcionais foram concluídos e deram aprovação.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
