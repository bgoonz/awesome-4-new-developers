---
id: 587d7fb4367417b2b2512c00
title: Espandere il tuo progetto con pacchetti esterni di npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

Uno dei più grandi motivi per utilizzare un gestore di pacchetti, è la loro potente gestione delle dipendenze. Invece di dover fare manualmente in modo di ottenere tutte le dipendenze ogni volta che si imposta un progetto su un nuovo computer, npm installa tutto per te automaticamente. Ma come può npm sapere esattamente di cosa ha bisogno il tuo progetto? Vai a vedere la sezione `dependencies` del tuo file package.json.

In questa sezione, i pacchetti richiesti dal progetto vengono memorizzati nel seguente formato:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Aggiungi la versione "2.14.0" del pacchetto "moment" al campo `dependencies` del tuo file package.json.

**Nota:** Moment è una comoda libreria per lavorare con l'ora e le date.

# --hints--

"dependencies" dovrebbe includere "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La versione di "moment" dovrebbe essere "2.14.0"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^[\^\~]?2\.14\.0/,
        'Wrong version of "moment" installed. It should be 2.14.0'
      );
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
