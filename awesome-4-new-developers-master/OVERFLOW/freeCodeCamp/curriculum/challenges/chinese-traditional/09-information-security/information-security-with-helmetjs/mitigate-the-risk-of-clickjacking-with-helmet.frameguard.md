---
id: 587d8247367417b2b2512c38
title: 使用 helmet.frameguard() 降低點擊劫持的風險
challengeType: 2
forumTopicId: 301582
dashedName: mitigate-the-risk-of-clickjacking-with-helmet-frameguard
---

# --description--

請注意，本項目在 [這個 Repl.it 項目](https://replit.com/github/freeCodeCamp/boilerplate-infosec) 的基礎上進行開發。 你也可以從 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

你的網頁可能在未經你同意的情況下被放在 `<frame>` 或 `<iframe>` 中。 這可能會導致點擊劫持攻擊等情況。 點擊劫持是一種欺騙用戶的技術，使其與用戶認爲不同的頁面進行互動。 這可以通過使用 iframe 的方式，在一個惡意的環境中執行你的頁面而獲得。 在這種情況下，黑客可以在你的頁面上設置一個隱藏層。 隱藏的按鈕可以被用來運行壞的腳本。 該中間件設置 X-Frame-Options 頭。 它限制了誰可以把你的網站放在一個框架裏。 它有三種模式：DENY、SAMEORIGIN 和 ALLOW-FROM。

我們不需要讓我們的應用程序可以被嵌入。

# --instructions--

使用 `helmet.frameguard()` 時應傳遞配置對象 `{action: 'deny'}`。

# --hints--

應正確加載 helmet.frameguard() 中間件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(
        data.appStack,
        'frameguard',
        'helmet.frameguard() middleware is not mounted correctly'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

helmet.frameguard() 'action' 應該設置爲 “DENY”

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.property(data.headers, 'x-frame-options');
      assert.equal(data.headers['x-frame-options'], 'DENY');
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
