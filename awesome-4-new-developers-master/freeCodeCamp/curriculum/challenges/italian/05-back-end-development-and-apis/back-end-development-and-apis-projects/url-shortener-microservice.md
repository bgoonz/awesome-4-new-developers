---
id: bd7158d8c443edefaeb5bd0e
title: Microservizio di Abbreviazione URL
challengeType: 4
forumTopicId: 301509
dashedName: url-shortener-microservice
---

# --description--

Costruisci un'app JavaScript full-stack che sia funzionalmente simile a questa: <https://url-shortener-microservice.freecodecamp.rocks/>. Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare [questa repository GitHub](https://github.com/freeCodeCamp/boilerplate-project-urlshortener/) e completare il tuo progetto localmente.
-   Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-urlshortener) per completare il tuo progetto.
-   Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file della nostra repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata da qualche parte di pubblico. Quindi invia l'URL nel campo `Solution Link`. Facoltativamente, invia anche un link al codice sorgente dei tuoi progetti nel campo `GitHub Link`.

# --instructions--

**SUGGERIMENTO:** Non dimenticare di utilizzare un middleware di analisi del body per gestire le richieste POST. Inoltre, potrai utilizzare la funzione `dns.lookup(host, cb)` dal modulo core `dns` per verificare un URL inviato.

# --hints--

È necessario fornire il proprio progetto, non l'URL di esempio.

```js
(getUserInput) => {
  assert(
    !/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Puoi inviare via POST un URL a `/api/shorturl` e ottenere una risposta JSON con le proprietà `original_url` e `short_url`. Ecco un esempio: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (res.ok) {
    const { short_url, original_url } = await res.json();
    assert.isNotNull(short_url);
    assert.strictEqual(original_url, `${url}/?v=${urlVariable}`);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Quando visiti `/api/shorturl/<short_url>`, verrai reindirizzato all'URL originale.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  let shortenedUrlVariable;
  const postResponse = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (postResponse.ok) {
    const { short_url } = await postResponse.json();
    shortenedUrlVariable = short_url;
  } else {
    throw new Error(`${postResponse.status} ${postResponse.statusText}`);
  }
  const getResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable
  );
  if (getResponse) {
    const { redirected, url } = getResponse;
    assert.isTrue(redirected);
    assert.strictEqual(url,fullUrl);
  } else {
    throw new Error(`${getResponse.status} ${getResponse.statusText}`);
  }
};
```

Se passi un URL non valido che non segue il formato valido `http://www.example.com`, la risposta JSON conterrà `{ error: 'invalid url' }`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=ftp:/john-doe.org`
  });
  if (res.ok) {
    const { error } = await res.json();
    assert.isNotNull(error);
    assert.strictEqual(error.toLowerCase(), 'invalid url');
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
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
