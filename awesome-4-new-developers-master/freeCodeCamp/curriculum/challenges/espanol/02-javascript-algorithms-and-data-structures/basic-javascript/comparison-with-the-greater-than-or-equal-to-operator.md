---
id: 56533eb9ac21ba0edf2244d5
title: Comparación con el operador "mayor o igual que"
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

El operador mayor o igual que (`>=`) compara el valor de dos números. Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve `true`. De lo contrario, devuelve `false`.

Al igual que el operador de igualdad, el operador mayor o igual que convertirá los tipos de datos mientras los compara.

**Ejemplos**

```js
6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
```

En orden, estas expresiones se evaluarían como `true`, `true`, `false` y `false`.

# --instructions--

Agrega el operador mayor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.

# --hints--

`testGreaterOrEqual(0)` debe devolver la cadena `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` debe devolver la cadena `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` debe devolver la cadena `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` debe devolver la cadena `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` debe devolver la cadena `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` debe devolver la cadena `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` debe devolver la cadena `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

Debes utilizar el operador `>=` al menos dos veces

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
