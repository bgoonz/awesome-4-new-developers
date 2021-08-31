---
id: 58965611f9fc0f352b528e6c
title: De-autenticare un utente
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Creare la logica per il logout è semplice. La rotta dovrebbe semplicemente de-autenticare l'utente e reindirizzarlo alla home page senza renderizzare alcuna vista.

In passport, per de-autenticare un utente è sufficiente invocare `req.logout();` prima del reindirizzamento.

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

Potresti aver notato che non stiamo gestendo pagine mancanti (404). Il modo comune per gestirle in Node è con il seguente middleware. Prosegui e aggiungilo dopo tutte le tue rotte:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b).

# --hints--

`req.Logout` dovrebbe essere invocato nella tua rotta `/logout`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Il logout dovrebbe reindirizzare alla home page.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
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
