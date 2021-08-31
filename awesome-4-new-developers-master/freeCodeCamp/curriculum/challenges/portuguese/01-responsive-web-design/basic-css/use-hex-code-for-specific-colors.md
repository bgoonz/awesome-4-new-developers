---
id: bad87fee1348bd9aedf08726
title: Usar códigos hexadecimais para selecionar cores específicas
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

Você sabia que existem outras maneiras de representar cores no CSS? Uma dessas formas é chamada de código hexadecimal ou, abreviadamente, hex code (em inglês).

Normalmente, usamos <dfn>decimais</dfn>, ou números de base 10, que usam os símbolos de 0 a 9 para cada dígito. <dfn>Hexadecimais</dfn> (ou <dfn>hex</dfn>) são números de base 16. Isso significa que eles usam dezesseis símbolos diferentes. Como os decimais, os símbolos de 0 a 9 representam os valores de zero a nove. Além deles, temos A, B, C, D, E e F, que representam os valores de dez a quinze. Ao todo, números de 0 a F podem representar um dígito em hexadecimal, com 16 valores possíveis. Você pode encontrar mais informações sobre [números hexadecimais aqui](https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal).

No CSS, podemos usar 6 dígitos hexadecimais para representar as cores, dois de cada para os componentes vermelho (R), verde (G) e azul (B). Por exemplo, `#000000` é preto e também é o valor mais baixo possível. Você pode encontrar mais informações sobre o [sistema de cores RGB aqui](https://pt.wikipedia.org/wiki/RGB).

```css
body {
  color: #000000;
}
```

# --instructions--

Substitua a palavra `black` na cor de fundo do elemento `body` por sua representação em código hexadecimal, `#000000`.

# --hints--

O elemento `body` deve ter a cor de fundo preta.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

O código hexadecimal (`hex code`) para a cor preta deve ser usado no lugar da palavra `black`.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
