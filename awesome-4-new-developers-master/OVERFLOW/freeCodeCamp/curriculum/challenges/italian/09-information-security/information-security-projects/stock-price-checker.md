---
id: 587d824a367417b2b2512c44
title: Controllo del prezzo delle azioni
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Costruisci un'app JavaScript full-stack che sia funzionalmente simile a questa: <https://stock-price-checker.freecodecamp.rocks/>.

Poiché tutte le API di stock price affidabili richiedono una chiave API, abbiamo costruito una soluzione alternativa. Usa <https://stock-price-checker-proxy.freecodecamp.rocks/> per ottenere informazioni aggiornate sul prezzo delle azioni senza doverti iscrivere per ottenere la tua chiave.

Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) e completare il tuo progetto localmente.
-   Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker) per completare il tuo progetto.
-   Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo `Solution Link`. Facoltativamente, invia anche un link al codice sorgente dei tuoi progetti nel campo `GitHub Link`.

# --instructions--

1.  Imposta `NODE_ENV` a `test` senza virgolette e imposta `DB` alla tua stringa di connessione a MongoDB
2.  Completa il progetto in `routes/api.js` o creando un handler/controller
3.  Aggiungerai tutte le funzionalità di sicurezza a `server.js`
4.  Creerai tutti i test funzionali in `tests/2_functional-tests.js`

Scrivi i seguenti test in `tests/2_functional-tests.js`:

-   Visualizzazione di un'azione: richiesta GET a `/api/stock-prices/`
-   Visualizzazione di un'azione e aggiunta del like: richiesta GET a `/api/stock-prices/`
-   Visualizzazione della stesse azione e nuovo like: richiesta GET a `/api/stock-prices/`
-   Visualizzazione di due azioni: richiesta GET a `/api/stock-prices/`
-   Visualizzazione di due azioni e aggiunta del like: richiesta GET a `/api/stock-prices/`

# --hints--

Puoi fornire il tuo progetto e non l'URL di esempio.

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Dovresti impostare i criteri di sicurezza dei contenuti per consentire il caricamento di script e CSS solo dal tuo server.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

Puoi inviare una richiesta `GET` a `/api/stock-prices`, passando un simbolo azionario NASDAQ a un parametro di query `stock` (azione). L'oggetto restituito conterrà una proprietà denominata `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

La proprietà `stockData` include il simbolo `stock` come stringa, il prezzo `price` come numero e i `likes` come numero.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

Puoi anche passare un campo `like` come `true` (booleano) per avere il tuo like aggiunto alle azioni. Dovrebbe essere accettato solo un like per IP.

```js

```

Se passi 2 azioni, il valore restituito sarà un array con informazioni su entrambe le azioni. Invece di `likes`, mostrerà `rel_likes` (la differenza tra i like delle azioni) per entrambi gli oggetti `stockData`.

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

Tutti i 5 test funzionali sono completi e superati.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
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
