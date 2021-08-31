---
id: 587d7da9367417b2b2512b67
title: Aggiungere elementi alla fine di un array usando concat invece di push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

La programmazione funzionale riguarda la creazione e l'utilizzo di funzioni non mutanti.

L'ultima sfida ha introdotto il metodo `concat` come modo per combinare degli array in uno nuovo senza mutare gli array originali. Confronta `concat` con il metodo `push`. `push` aggiunge un elemento alla fine dello stesso array sul quale viene richiamato, mutando quello stesso array. Ecco un esempio:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

`arr` avrà un valore modificato di `[1, 2, 3, [4, 5, 6]]`, che non è in linea con la programmazione funzionale.

`concat` offre un modo per aggiungere nuovi elementi alla fine di un array senza effetti collaterali di mutazione dello stesso.

# --instructions--

Cambia la funzione `nonMutatingPush` in modo da utilizzare `concat` invece di `push` per aggiungere `newItem` alla fine di `original`. La funzione dovrebbe restituire un array.

# --hints--

Dovresti usare il metodo `concat`.

```js
assert(code.match(/\.concat/g));
```

Non dovresti usare il metodo `push`.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

L'array `first` non dovrebbe cambiare.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

L'array `second` non dovrebbe cambiare.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` dovrebbe restituire `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```
