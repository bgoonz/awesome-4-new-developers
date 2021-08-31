---
id: 587d8247367417b2b2512c36
title: Installare e richiedere Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) e completare queste sfide localmente.
- Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) per completare queste sfide.
- Usare un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo `Solution Link`.

Helmet ti aiuta a proteggere le tue app Express impostando varie intestazioni HTTP.

# --instructions--

Tutto il tuo codice per queste lezioni va nel file `myApp.js` tra le righe di codice con cui ti abbiamo avviato. Non modificare o eliminare il codice che abbiamo aggiunto per te.

Installa la versione di Helmet `3.21.3`, poi richiedila. È possibile installare una versione specifica di un pacchetto con `npm install --save-exact package@version`, o aggiungendolo al tuo `package.json` direttamente.

# --hints--

`helmet` versione `3.21.3` dovrebbe essere in `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
    },
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
