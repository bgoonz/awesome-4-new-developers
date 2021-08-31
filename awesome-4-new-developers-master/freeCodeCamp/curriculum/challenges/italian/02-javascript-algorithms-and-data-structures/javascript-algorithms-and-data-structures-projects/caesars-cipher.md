---
id: 56533eb9ac21ba0edf2244e2
title: Cifrario di Cesare
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

Uno dei più semplici e più conosciuti <dfn>cifrari</dfn> è il <dfn>cifrario di Cesare</dfn>, noto anche come <dfn>cifrario a scorrimento</dfn>. In un cifrario a scorrimento i significati delle lettere sono spostati di un certo numero di posizioni.

Un uso moderno comune è il cifrario [ROT13](https://it.wikipedia.org/wiki/ROT13), dove i valori delle lettere sono spostati di 13 posti. Così `A ↔ N`, `B ↔ O` e così via.

Scrivi una funzione che prenda una stringa codificata [ROT13](https://it.wikipedia.org/wiki/ROT13) come input e restituisca una stringa decodificata.

Tutte le lettere saranno maiuscole. Non trasformare alcun carattere non alfabetico (cioè spazi, punteggiatura), ma passali come sono.

# --hints--

`rot13("SERR PBQR PNZC")` dovrebbe decodificare la stringa `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` dovrebbe decodificare la stringa `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` dovrebbe decodificare la stringa `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` dovrebbe decodificare la stringa `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --seed--

## --seed-contents--

```js
function rot13(str) {

  return str;
}

rot13("SERR PBQR PNZC");
```

# --solutions--

```js
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
```
