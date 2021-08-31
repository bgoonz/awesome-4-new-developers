---
id: 587d7b89367417b2b2512b48
title: Usare l'operatore di propagazione per analizzare gli array in-place
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 introduce l'<dfn>operatore di propagazione</dfn>, che ci permette di espandere array ed altre espressioni in posizioni dove sono attesi più parametri o elementi.

Il codice ES5 qui sotto utilizza `apply()` per calcolare il valore massimo in un array:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` avrà un valore di `89`.

Abbiamo dovuto utilizzare `Math.max.apply(null, arr)` perché `Math.max(arr)` restituisce `NaN`. `Math.max()` si aspetta argomenti separati da virgole, ma non un array. L'operatore di propagazione rende questa sintassi molto migliore da leggere e mantenere.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` avrà un valore di `89`.

`...arr` restituisce un array spacchettato. In altre parole, *propaga* l'array. Tuttavia, l'operatore di propagazione funziona solo sul posto, come argomento di una funzione o in un array letterale (definito usando le parentesi quadre). Il seguente codice non funzionerà:

```js
const spreaded = ...arr;
```

# --instructions--

Copia tutti i contenuti di `arr1` in un altro array `arr2` usando l'operatore di propagazione.

# --hints--

`arr2` dovrebbe essere la copia esatta di `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

L'operatore di propagazione `...` dovrebbe essere usato per duplicare `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` dovrebbe rimanere invariato quando `arr1` viene modificato.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
