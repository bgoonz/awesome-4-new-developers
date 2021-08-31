---
id: 56533eb9ac21ba0edf2244bb
title: Palabra en blanco
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

Ahora usaremos nuestros conocimientos de cadenas para construir un juego de palabras estilo "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" que llamamos "Palabra en blanco". Crearás una frase (opcionalmente humorística) del estilo: Rellena los espacios vacíos.

En un juego de "Mad Libs", se te proporcionan oraciones con algunas palabras faltantes, como sustantivos, verbos, adjetivos y adverbios. Luego, rellenas las piezas que faltan con palabras de tu elección de una manera que la frase completa tenga sentido.

Considera esta oración: It was really **\_\_\_\_**, and we **\_\_\_\_** ourselves **\_\_\_\_**. Esta oración tiene tres piezas faltantes: un adjetivo, un verbo y un adverbio, y podemos añadir palabras de nuestra elección para completarla. A continuación, podemos asignar la oración completa a una variable de la siguiente manera:

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

En este desafío, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Necesita formar una oración completa usando palabras de tu elección, junto con las palabras que te proporcionamos.

Necesitarás usar el operador de concatenación de cadenas `+` para construir una nueva cadena, usando las variables proporcionadas: `myNoun`, `myAdjective`, `myVerb`, y `myAdverb`. Luego asignarás la cadena formada a la variable `wordBlanks`. No debes cambiar las palabras asignadas a las variables.

También tendrás que tener en cuenta los espacios en tu cadena, para que la frase final tenga espacios entre todas las palabras. El resultado debe ser una oración completa.

# --hints--

`wordBlanks` debe ser una cadena.

```js
assert(typeof wordBlanks === 'string');
```

No debes cambiar los valores asignados a `myNoun`, `myVerb`, `myAdjective` o `myAdverb`.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

No debes utilizar directamente los valores `dog`, `ran`, `big` o `quickly` para crear `wordBlanks`.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` debe contener todas las palabras asignadas a las variables `myNoun`, `myVerb`, `myAdjective` y `myAdverb` separados por espacios (y cualquier palabra adicional en tu madlib).

```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
