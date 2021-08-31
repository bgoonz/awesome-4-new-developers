---
id: 587d7fab367417b2b2512bda
title: 用 D3 創建線性比例
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

條形圖和散點圖都直接在 SVG 畫布上繪製數據。 但是，如果一組的高或者其中一個數據點比 SVG 的高或寬更大，它將跑到 SVG 區域外。

D3 中，比例尺可幫助佈局數據。 `scales` 是函數，它告訴程序如何將一組原始數據點映射到 SVG 畫布上。

例如，假設你有一個 100x500 大小的 SVG 畫布，你想爲許多國家繪製國內生產總值（GDP）的圖表。 這組數據將在十億美元或萬億美元的範圍內。 你給 D3 提供一種縮放方法，告訴它如何將大的 GDP 值放置在 100x500 大小的區域。

你不太可能按數據原本的大小來繪製圖表。 在繪製之前，將整個數據集縮放，讓 `x` 和 `y` 值適合畫布的寬高。

D3 有幾種縮放類型。 對於線性縮放（通常使用於定量數據），使用 D3 的 `scaleLinear()` 方法：

```js
const scale = d3.scaleLinear()
```

默認情況下，比例尺使用一對一關係（identity relationship）。 輸入的值和輸出的值相同。 後面的挑戰將涉及如何改變默認比例。

# --instructions--

更改 `scale` 變量，以創建線性比例。 然後將 `output` 變量設置爲 scale 函數，調用函數時傳入參數 `50`。

# --hints--

`h2` 的文本應爲 `50`。

```js
assert($('h2').text() == '50');
```

應使用 `scaleLinear()` 方法。

```js
assert(code.match(/\.scaleLinear/g));
```

`output` 變量應調用 `scale`，傳入參數 `50`。

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
