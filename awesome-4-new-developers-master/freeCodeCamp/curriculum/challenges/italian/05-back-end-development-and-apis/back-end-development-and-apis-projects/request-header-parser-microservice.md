---
id: bd7158d8c443edefaeb5bdff
title: Microservizio Parser di header della richiesta
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

Costruisci un'app JavaScript full-stack che sia funzionalmente simile a questa: <https://request-header-parser-microservice.freecodecamp.rocks/>. Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare [questa repository GitHub](https://github.com/freeCodeCamp/boilerplate-project-headerparser/) e completare il tuo progetto localmente.
-   Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-headerparser) per completare il tuo progetto.
-   Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file della nostra repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata da qualche parte di pubblico. Quindi invia l'URL nel campo `Solution Link`. Facoltativamente, invia anche un link al codice sorgente del tuo progetto nel campo `GitHub Link`.

# --hints--

È necessario fornire il proprio progetto, non l'URL di esempio.

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Una richiesta a `/api/whoami` dovrebbe restituire un oggetto JSON con il tuo indirizzo IP nella chiave `ipaddress`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Una richiesta a `/api/whoami` dovrebbe restituire un oggetto JSON con la tua lingua preferita nella chiave `language`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Una richiesta a `/api/whoami` dovrebbe restituire un oggetto JSON con il tuo software nella chiave `software`.

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
