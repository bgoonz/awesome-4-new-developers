---
id: 58a25c98f9fc0f352b528e7f
title: Fazer o hashing de senhas
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Voltando à seção de segurança da informação, você poderá ver que armazenar senhas em texto simples (plain text) *nunca* é uma boa ideia. Agora é a hora de implementar o BCrypt para resolver este problema.

Adicione o `bcrypt@~5.0.0` como dependência e solicite-o no servidor. Você precisará lidar com hashing em 2 áreas principais: onde você trata do registro/salvamento de uma nova conta e onde você verifica se uma senha está correta no login.

No momento, na rota de registro, você insere a senha de um usuário no banco de dados, da seguinte forma: `password: req.body.password`. Uma maneira fácil de implementar o salvamento de um hash, em vez disso, é adicionar a instrução `const hash = bcrypt.hashSync(req.body.password, 12);` antes da lógica do seu banco de dados e substituir o `req.body.password` no banco de dados, salvando apenas `password: hash`.

Por fim, na estratégia de autenticação, verificamos o seguinte no código antes de concluir o processo: `if (password !== user.password) { return done(null, false); }`. Depois de fazer as alterações acima, `user.password` passa a ser um hash. Antes de fazer uma alteração no código existente, observe como a instrução está verificando se a senha **não** é igual. Se não for, deve retornar não autenticada. Com isso em mente, o código pode se parecer assim para verificar corretamente a senha inserida com relação ao hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

Isso é tudo o que precisamos para implementar um dos mais importantes recursos de segurança quando você tem que armazenar senhas!

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564).

# --hints--

O BCrypt deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O BCrypt deverá ser corretamente solicitado e implementado.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')bcrypt\1/gi,
        'You should have required bcrypt'
      );
      assert.match(
        data,
        /bcrypt.hashSync/gi,
        'You should use hash the password in the registration'
      );
      assert.match(
        data,
        /bcrypt.compareSync/gi,
        'You should compare the password to the hash in your strategy'
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
