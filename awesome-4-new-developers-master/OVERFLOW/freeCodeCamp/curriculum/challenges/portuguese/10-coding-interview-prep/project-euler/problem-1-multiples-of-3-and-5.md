---
id: 5900f36e1000cf542c50fe80
title: 'Problema 1: Múltiplos de 3 e 5'
challengeType: 5
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obteremos 3, 5, 6 e 9. A soma destes múltiplos é 23.

Calcule a soma de todos os múltiplos de 3 ou 5 menor que o parâmetro `number`.

# --hints--

`multiplesOf3and5(10)` deve retornar um número.

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` deve retornar 543.

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` deve retornar 233168.

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` deve retornar 16687353.

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` deve retornar 89301183.

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```
