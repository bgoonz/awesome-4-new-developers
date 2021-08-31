---
id: 587d824a367417b2b2512c44
title: 股票價格查看器
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

構建一個 JavaScript 的全棧應用，在功能上與這個應用相似：<https://stock-price-checker.freecodecamp.rocks/>。

由於所有可靠的股票價格 API 都需要一個 API 密鑰，我們已經建立了一個解決方案。 使用 [https://stock-price-checer-proxy.freecodecamp.rocks/](https://stock-price-checker-proxy.freecodecamp.rocks/) 獲取最新的股票價格信息，而無需註冊您自己的密鑰。

可以採用下面的任意一種方式完成這個挑戰：

-   克隆 [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) 並在本地完成項目。
-   使用[我們的 Replit 啓動項目](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker)來完成你的項目。
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後將 URL 提交到 `Solution Link` 中。 此外，還可以將項目的源碼提交到 `GitHub Link` 中。

# --instructions--

1.  將 `NODE_ENV` 設置爲 `test`，不帶引號，並將 `DB` 設爲你的 MongoDB 連接字符串。
2.  在 `routes/api.js` 中完成項目，或者通過創建一個處理程序/控制器來完成項目
3.  添加安全功能到 `server.js`。
4.  在 `tests/2_functional-tests.js` 中創建所有的功能測試

在 `tests/2_functional-tests.js` 中編寫下以下測試：

-   查看股價：發送 GET 請求到 `/api/stock-prices/`
-   查看一個股票並關注它：發送 GET 請求到 `/api/stock-prices/`
-   查看同一只股票並再次發送關注：發送 GET 請求到 `/api/stock-prices/`
-   查看兩隻股票：發送 GET 請求到 `/api/stock-prices/`
-   查看兩隻股票並關注它：發送 GET 請求到 `/api/stock-prices/`

# --hints--

提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

將內容安全策略設置爲僅允許從服務器加載腳本和 CSS。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

你可以向 `/api/stock-prices` 發送一個 `GET` 請求，將納斯達克股票代碼賦值給 `stock` 查詢參數。 返回的對象將包含一個名爲 `stockData` 的屬性。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

`stockData` 屬性包括字符串 `stock` 代碼、數字 `price`，以及數字 `likes`。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

你也可以用作爲 `true`（布爾值）來傳遞 `like` 字段，讓你的偏好添加到股票中。 每個 IP 應該只接受 1 個贊。

```js

```

如果你傳遞了兩隻股票，返回值將是一個包含這兩隻股票信息的數組。 它將會顯示對於兩個 `stockData` 對象的 `rel_likes`（兩隻股票所獲得的贊同數的區別），而不是 `likes`。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

所有 5 項功能測試都已完成並通過。

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
