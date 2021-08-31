---
id: bad82fee1348bd9aedf08721
title: Usar RGB para misturar cores
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

Assim como com o código hexadecimal, você pode misturar cores em RGB usando combinações de valores diferentes.

# --instructions--

Substitua os códigos hexadecimais em nosso elemento `style` por seus valores RGB corretos.

<table class='table table-striped'><tbody><tr><th>Cor</th><th>RGB</th></tr><tr><td>Azul</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Vermelho</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orquídea</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Siena</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

O elemento `h1` com o texto `I am red!` deve ter a propriedade `color` com um valor red (vermelho).

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Você deve usar `rgb` para inserir a cor vermelha.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

O elemento `h1` com o texto `I am orchid!` deve ter a propriedade `color` com um valor orchid (orquídea).

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

Você deve usar `rgb` para inserir a cor orquídea.

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

O elemento `h1` com o texto `I am blue!` deve ter a propriedade `color` com um valor blue (azul).

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

Você deve usar `rgb` para inserir a cor azul.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

O elemento `h1` com o texto `I am sienna!` deve ter a propriedade `color` com um valor sienna (siena).

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

Você deve usar `rgb` para inserir a cor siena.

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
