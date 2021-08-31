---
id: bad87fee1348bd9aec908855
title: 给每个元素一个唯一的 id
challengeType: 0
forumTopicId: 18191
dashedName: give-each-element-a-unique-id
---

# --description--

也可以通过 jQuery 根据每个按钮唯一的 id 来定位出它们。

给每一个按钮设置唯一的 id，以 `target1` 开始，`target6` 结束。

确保 `target1` 到 `target3` 在 `#left-well` 之中，`target4` 到 `target6` 在 `#right-well` 之中。

# --hints--

其中一个 `button` 元素应该有 id `target1`。

```js
assert(
  $('#left-well').children('#target1') &&
    $('#left-well').children('#target1').length > 0
);
```

其中一个 `button` 元素应该有 id `target2`。

```js
assert(
  $('#left-well').children('#target2') &&
    $('#left-well').children('#target2').length > 0
);
```

其中一个 `button` 元素应该有 id `target3`。

```js
assert(
  $('#left-well').children('#target3') &&
    $('#left-well').children('#target3').length > 0
);
```

其中一个 `button` 元素应该有 id `target4`。

```js
assert(
  $('#right-well').children('#target4') &&
    $('#right-well').children('#target4').length > 0
);
```

其中一个 `button` 元素应该有 id `target5`。

```js
assert(
  $('#right-well').children('#target5') &&
    $('#right-well').children('#target5').length > 0
);
```

其中一个 `button` 元素应有 id `target6`。

```js
assert(
  $('#right-well').children('#target6') &&
    $('#right-well').children('#target6').length > 0
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```
