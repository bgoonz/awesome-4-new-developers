---
id: 58a25bcef9fc0f352b528e7c
title: Capire la crittografia hash BCrypt
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

Per le seguenti sfide, lavorerai con una nuova bozza di progetto che è diversa da quella precedente. Puoi trovare la nuova bozza di progetto su [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt), o clonarla da [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/).

Gli hash BCrypt sono molto sicuri. Un hash è fondamentalmente un'impronta digitale dei dati originali, sempre unica. Questo si ottiene inserendo i dati originali in un algoritmo e restituendo un risultato di lunghezza fissa. Per complicare ulteriormente questo processo e renderlo più sicuro, puoi anche aggiungere un *salt* al tuo hash. Aggiungere un salt al tuo hash comporta l'aggiunta di dati casuali ai dati originali prima del processo di hashing che rende ancora più difficile crackare l'hash.

Gli hash BCrypt appariranno sempre come `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` che ha una struttura. Il primo pezzettino di dati `$2a` sta definendo che tipo di algoritmo di hash è stato utilizzato. La porzione successiva `$13` definisce il *costo*. Il costo è più o meno quanto potere computazionale è necessario per calcolare l'hash. È su una scala logaritmica di 2^costo e determina quante volte i dati vengono messi attraverso l'algoritmo di hashing. Ad esempio, al costo di 10 sei in grado di crittografare 10 password al secondo su un computer medio, tuttavia al costo di 15 ci vogliono 3 secondi per hash... e per andare oltre, ad un costo di 31 ci vorrebbero più giorni per completare un hash. Un costo di 12 è considerato molto sicuro in questo momento. L'ultima porzione del tuo hash `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, sembra una grande stringa di numeri, punti e lettere, ma sono in realtà due pezzi separati di informazioni. I primi 22 caratteri sono il salt in chiaro, e il resto è la password crittografata!

# --instructions--

Per iniziare a usare BCrypt, aggiungilo come dipendenza nel tuo progetto e richiederlo come 'bcrypt' nel tuo server.

Aggiungi tutto il tuo codice per queste lezioni nel file `server.js` in mezzo al codice con cui ti abbiamo avviato. Non modificare o eliminare il codice che abbiamo aggiunto per te.

Invia la tua pagina quando pensi di averlo fatto correttamente.

# --hints--

BCrypt dovrebbe essere una dipendenza.

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

BCrypt dovrebbe essere richiesto correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
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
