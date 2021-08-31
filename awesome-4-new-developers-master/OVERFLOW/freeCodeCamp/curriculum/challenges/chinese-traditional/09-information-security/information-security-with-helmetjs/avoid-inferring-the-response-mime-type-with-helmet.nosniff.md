---
id: 587d8248367417b2b2512c3a
title: 用 helmet.noSniff() 避免推斷出響應的 MIME 類型。
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

請注意，本項目在[這個 Repl.it 項目](https://replit.com/github/freeCodeCamp/boilerplate-infosec)的基礎上進行開發。你也可以從 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。 瀏覽器可以使用內容或 MIME 嗅探來覆蓋響應的 `Content-Type` 頭，猜測並使用隱含的內容類型來處理數據。 雖然這在某些情況下可能很方便，但也可能導致一些危險的攻擊。 該中間件將 X-Content-Type-Options 頭設置爲 `nosniff`，指示瀏覽器不要繞過所提供的 `Content-Type`。

# --instructions--

在你的服務器上使用 `helmet.noSniff()` 方法。

# --hints--

helmet.noSniff() 中間件應該被正確安裝

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
