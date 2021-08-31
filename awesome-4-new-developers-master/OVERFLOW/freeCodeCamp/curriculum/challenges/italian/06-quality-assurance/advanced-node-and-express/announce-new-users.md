---
id: 589fc832f9fc0f352b528e78
title: Annunciare nuovi utenti
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Molte chat room sono in grado di annunciare quando un utente si connette o si disconnette e mostrarlo a tutti gli utenti connessi nella chat. Considerando che stai già emettendo un evento alla connessione e alla disconnessione, dovrai solo modificare questo evento per supportare questa caratteristica. Il modo più logico di farlo è inviare di 3 pezzi di dati con l'evento: il nome dell'utente che si è connesso/disconnesso, il conteggio corrente degli utenti, e se questo nome si è connesso o disconnesso.

Cambia il nome dell'evento in `'user'` e passa insieme ad esso un oggetto contenente i campi 'name', 'currentUsers', e 'connected' (`true` in caso di connessione, o `false` per la disconnessione dell'utente inviato). Assicurati di modificare entrambi gli eventi 'user count' e impostare quello per la disconnessione in modo che invii `false` per il campo 'connected' invece di `true` come fa l'evento emesso alla connessione.

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

Ora il tuo client avrà tutte le informazioni necessarie per visualizzare correttamente il conteggio attuale degli utenti e annunciare quando un utente si connette o si disconnette! Per gestire questo evento sul lato client dovremmo rimanere in ascolto di `'user'`, poi aggiornare il conteggio degli utenti attuali usando jQuery per cambiare il testo di `#num-users` a `'{NUMBER} users online'`, oltre ad aggiungere un `<li>` alla lista non ordinata con id `messages` con `'{NAME} has {joined/left} the chat.'`.

Un'implementazione di questo tipo potrebbe essere la seguente:

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Invia la tua pagina quando pensi di averlo fatto bene. Se incontri degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286).

# --hints--

L'evento `'user'` dovrebbe essere emesso con name, currentUsers, e connected.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis,
        'You should have an event emitted named user sending name, currentUsers, and connected'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Il client dovrebbe gestire e visualizzare correttamente i nuovi dati dall'evento `'user'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*num-users/gi,
        'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
      );
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*messages.*li/gi,
        'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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
