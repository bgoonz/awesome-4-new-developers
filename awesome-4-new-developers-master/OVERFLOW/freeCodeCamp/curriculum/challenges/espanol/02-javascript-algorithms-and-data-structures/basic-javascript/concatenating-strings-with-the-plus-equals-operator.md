---
id: 56533eb9ac21ba0edf2244b8
title: Concatena cadenas con el operador "más igual"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

También podemos utilizar el operador `+=` para <dfn>concatenar</dfn> una cadena al final de una variable de cadena existente. Esto puede ser muy útil para romper una cadena larga en varias líneas.

**Nota:** Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que tendrás que añadirlos por tu cuenta.

Ejemplo:

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` ahora tiene un valor de la cadena `I come first. I come second.`.

# --instructions--

Construye `myStr` en varias líneas concatenando estas dos cadenas: `This is the first sentence.` y `This is the second sentence.` usando el operador `+=`. Utiliza el operador `+=` de forma similar a como se muestra en el editor. Comienza asignando la primera cadena a `myStr`, luego añade la segunda cadena.

# --hints--

`myStr` debe tener una cadena con valor `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

Debes usar el operador `+=` para construir `myStr`.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
// Only change code below this line

var myStr;
```

# --solutions--

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
