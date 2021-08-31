---
id: 587d7dba367417b2b2512ba9
title: Usar lookaheads positivos e negativos
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookaheads</dfn> ("olhar à frente") são padrões que dizem ao JavaScript para procurar outros padrões ao longo da string sem capturá-los. Eles podem ser úteis quando é necessário fazer diversas verificações na mesma string.

Existem dois tipos de lookahead: o <dfn>lookahead positivo</dfn> e o <dfn>lookahead negativo</dfn>.

Lookaheads positivos garantem que o padrão especificado se encontra à frente, mas não o capturam. Usa-se `(?=...)`, onde `...` é o padrão a ser procurado, para escrever lookaheads positivos.

Lookaheads negativos, por outro lado, garantem que o padrão especificado não se encontra à sua frente na string. Para usar lookaheads negativos, escrevemos `(?!...)` onde `...` é o padrão que você quer ter certeza que não está lá. O restante do padrão é validado se o padrão do lookahead negativo estiver ausente.

É fácil se confundir com lookaheads, mas uns exemplos podem ajudar.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

As duas chamadas a `match` retornam `["q"]`.

Validar dois padrões diferentes em uma string é considerado um uso mais prático de lookaheads. Neste não tão aprimorado validador de senhas, os lookaheads procuram por 3 a 6 caracteres e pelo menos um número, respectivamente, na string:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Faça com que `pwRegex` capture senhas que têm 5 ou mais caracteres e dois dígitos consecutivos usando lookaheads.

# --hints--

A regex deve usar dois `lookaheads` positivos.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

A regex não deve encontrar a string `astronaut`

```js
assert(!pwRegex.test('astronaut'));
```

A regex não deve encontrar a string `banan1`

```js
assert(!pwRegex.test('banan1'));
```

A regex deve encontrar a string `bana12`

```js
assert(pwRegex.test('bana12'));
```

A regex deve encontrar a string `abc123`

```js
assert(pwRegex.test('abc123'));
```

A regex não deve encontrar a string `12345`

```js
assert(!pwRegex.test('12345'));
```

A regex deve encontrar a string `8pass99`

```js
assert(pwRegex.test('8pass99'));
```

A regex não deve encontrar a string `1a2bcde`

```js
assert(!pwRegex.test('1a2bcde'));
```

A regex deve encontrar a string `astr1on11aut`

```js
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
