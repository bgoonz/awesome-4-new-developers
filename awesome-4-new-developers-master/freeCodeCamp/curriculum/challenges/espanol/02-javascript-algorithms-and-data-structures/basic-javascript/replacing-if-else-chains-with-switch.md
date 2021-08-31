---
id: 56533eb9ac21ba0edf2244e0
title: Reemplazando cadenas de "If Else" por "Switch"
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

Si tienes muchas opciones entre las que elegir, una sentencia `switch` puede ser más fácil de escribir que muchas sentencias `if`/`else if` encadenadas. Lo siguiente:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

puede reemplazarse por:

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

Cambia la cadena de sentencias `if`/`else if` por una sentencia `switch`.

# --hints--

No debes utilizar sentencias `else` en ningún lugar en el editor

```js
assert(!/else/g.test(code));
```

No debes utilizar sentencias `if` en ningún lugar en el editor

```js
assert(!/if/g.test(code));
```

Debes tener al menos cuatro sentencias `break`

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` debe ser la cadena `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` debe ser la cadena `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` debe ser la cadena `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` debe ser la cadena `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` debe ser la cadena `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` debe ser `""` (cadena vacía)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` debe ser `""` (cadena vacía)

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```
