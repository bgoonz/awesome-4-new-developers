---
id: 587d78b1367417b2b2512b0c
title: 使排版根据设备尺寸自如响应
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

除了使用 `em` 或 `px` 设置文本大小，你还可以用视窗单位来做响应式排版。 视窗单位和百分比都是相对单位，但它们是基于不同的参照物。 视窗单位是相对于设备的视窗尺寸（宽度或高度），百分比是相对于父级元素的大小。

四个不同的视窗单位分别是：

<ul><li><code>vw</code>：如 <code>10vw</code> 的意思是视窗宽度的 10%。</li><li><code>vh：</code> 如 <code>3vh</code> 的意思是视窗高度的 3%。</li><li><code>vmin：</code> 如 <code>70vmin</code> 的意思是视窗的高度和宽度中较小一个的 70%。</li><li><code>vmax：</code> 如 <code>100vmax</code> 的意思是视窗的高度和宽度中较大一个的 100%。</li></ul>

下面这个例子是设置 `body` 标签的宽度为视窗宽度的 30%。

```css
body { width: 30vw; }
```

# --instructions--

请将 `h2` 标签的 `width` 设置为视窗宽度的 80%，将段落的 `width` 设置为视窗高度和宽度中较小值的 75%。

# --hints--

`h2` 元素的 `width` 应为 80vw。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

`p` 元素的 `width` 应为 75vmin。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
