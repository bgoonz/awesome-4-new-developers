---
id: 56bbb991ad1ed5201cd392cd
title: Manipolare gli array con shift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` rimuove sempre l'ultimo elemento di un array. E se volessi rimuovere il primo?

È qui che entra in gioco `.shift()`. Funziona proprio come `.pop()`, solo che rimuove il primo elemento invece dell'ultimo.

Esempio:

```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` dovrebbe avere un valore stringa `Stimpson`e `ourArray` dovrebbe valere `["J", ["cat"]]`.

# --instructions--

Utilizza la funzione `.shift()` per rimuovere il primo elemento da `myArray`, assegnando il valore "spostato" a `removedFromMyArray`.

# --hints--

`myArray` dovrebbe ora essere uguale a `[["dog", 3]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` dovrebbe contenere `["John", 23]`.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
```
