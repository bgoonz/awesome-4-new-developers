---
id: 56533eb9ac21ba0edf2244b6
title: 轉義字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

引號不是字符串中唯一可以被轉義（<dfn>escaped</dfn>）的字符。 使用轉義字符有兩個原因：

1.  首先是可以讓你使用無法輸入的字符，例如退格。
2.  其次是可以讓你在一個字符串中表示多個引號，而不會出錯。

我們在之前的挑戰中學到了這個。

<table class='table table-striped'><thead><tr><th>代碼</th><th>輸出</th></tr></thead><tbody><tr><td><code>\'</code></td><td>單引號</td></tr><tr><td><code>\"</code></td><td>雙引號</td></tr><tr><td><code>\\</code></td><td>反斜槓</td></tr><tr><td><code>\n</code></td><td>換行符</td></tr><tr><td><code>\r</code></td><td>回車符</td></tr><tr><td><code>\t</code></td><td>製表符</td></tr><tr><td><code>\b</code></td><td>退格</td></tr><tr><td><code>\f</code></td><td>換頁符</td></tr></tbody></table>

*請注意，必須對反斜槓本身進行轉義，它才能顯示爲反斜槓。*

# --instructions--

使用轉義序列把下面三行文本賦值給一個變量 `myStr`。

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

你需要使用轉義字符正確地插入特殊字符。 確保間距與上面文本一致，並且單詞或轉義字符之間沒有空格。

**注意：** `SecondLine` 是因爲鍵入了轉義字符（而不是空格），所以在那個位置。

# --hints--

`myStr` 不能包含空格。

```js
assert(!/ /.test(myStr));
```

`myStr` 應包含字符串 `FirstLine`、`SecondLine` 和 `ThirdLine`（記得區分大小寫）。

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` 後面應該是一個換行符 `\n`。

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` 應該包含一個製表符 `\t`，它在換行符後面。

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` 前面應該是反斜槓 `\`。

```js
assert(/\\SecondLine/.test(myStr));
```

`SecondLine` 和 `ThirdLine` 之間應該是換行符。

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` 應該只包含上面要求的字符。

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --after-user-code--

```js
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();
```

## --seed-contents--

```js
var myStr; // Change this line
```

# --solutions--

```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
