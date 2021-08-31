---
id: bad87fee1348bd9aed508826
title: Clonar um elemento usando jQuery
challengeType: 6
forumTopicId: 16780
dashedName: clone-an-element-using-jquery
---

# --description--

Além de mover elementos, você também pode copiá-los de um lugar para outro.

O jQuery possui uma função chamada `clone()` que faz uma cópia de um elemento.

Por exemplo, se quiséssemos copiar `target2` do nosso `left-well` para nosso `right-well`, usaríamos:

```js
$("#target2").clone().appendTo("#right-well");
```

Você percebeu que isso envolve colocar duas funções do jQuery juntas? Isso é chamado de <dfn>function chaining</dfn> e é uma forma conveniente para fazer as coisas com jQuery.

Clone seu elemento `target5` e adicione-o ao seu `left-well`.

# --hints--

Seu elemento `target5` deve estar dentro do seu `right-well`.

```js
assert($('#right-well').children('#target5').length > 0);
```

Uma cópia do seu elemento `target5` também deve estar dentro do seu `left-well`.

```js
assert($('#left-well').children('#target5').length > 0);
```

Você deve usar apenas jQuery para mover esses elementos.

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
