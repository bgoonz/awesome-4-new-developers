---
id: 56533eb9ac21ba0edf2244a9
title: Inicializa variables con el operador de asignación
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
forumTopicId: 301171
dashedName: initializing-variables-with-the-assignment-operator
---

# --description--

Es común <dfn>inicializar</dfn> una variable a un valor inicial en la misma línea que es declarada.

```js
var myVar = 0;
```

Crea una nueva variable llamada `myVar` y le asigna un valor inicial de `0`.

# --instructions--

Define una variable `a` con `var` e inicialízala con un valor de `9`.

# --hints--

Debes inicializar `a` con un valor de `9`.

```js
assert(/var\s+a\s*=\s*9(\s*;?\s*)$/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

## --seed-contents--

```js

```

# --solutions--

```js
var a = 9;
```
