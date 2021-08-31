---
id: bad87fee1348bd9aedf08845
title: Usar um span para apontar para elementos na mesma linha
challengeType: 0
forumTopicId: 18370
dashedName: use-a-span-to-target-inline-elements
---

# --description--

Você pode usar spans para criar elementos na mesma linha. Lembra-se de quando usamos a classe `btn-block` para fazer o botão preencher toda a linha?

<button class='btn' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>botão normal</button>

<button class='btn btn-block' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>botão btn-block</button>

Isso ilustra a diferença entre um elemento "em linha" (inline) e de um elemento de "bloco" (block).

Ao usar o elemento inline `span`, você pode colocar diversos elementos na mesma linha, e até estilizar diferentes partes da mesma linha de forma diferente.

Usando um elemento `span`, aninhe a palavra `love` dentro do elemento `p` que atualmente possui o texto `Things cats love`. Em seguida, dê ao `span` a classe `text-danger` para tornar o texto vermelho.

Aqui está como você faria isso para o elemento `p` que possui o texto `Top 3 things cats hate`:

```html
<p>Top 3 things cats <span class="text-danger">hate:</span></p>
```

# --hints--

O elemento `span` deve estar dentro do elemento `p`.

```js
assert($('p span') && $('p span').length > 0);
```

O elemento `span` deve ter apenas o texto `love`.

```js
assert(
  $('p span') &&
    $('p span').text().match(/love/i) &&
    !$('p span')
      .text()
      .match(/Things cats/i)
);
```

O elemento `span` deve ter a classe `text-danger`.

```js
assert($('span').hasClass('text-danger'));
```

O elemento `span` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/span>/g) &&
    code.match(/<span/g) &&
    code.match(/<\/span>/g).length === code.match(/<span/g).length
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>

  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love</span>:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
