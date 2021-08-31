---
id: 587d7fa6367417b2b2512bbf
title: 用等值區域圖可視化數據
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**目標：** 在 [CodePen.io](https://codepen.io) 上實現一個功能類似 <https://codepen.io/freeCodeCamp/full/EZKqza> 的 App。

在滿足以下[需求](https://en.wikipedia.org/wiki/User_story)並能通過所有測試的前提下， 你可以根據自己的喜好來美化你的 app。

你可以使用 HTML、JavaScript、CSS、以及基於 svg 的 D3 可視化庫來完成這個挑戰。 每次測試查詢的元素都必須是非虛擬 DOM。 如果你使用了前端框架（例如 Vue），那麼對於動態的內容測試結果可能不準確。 我們希望最終能夠兼容這些框架，但 D3 項目目前還不支持它們。

**需求 #1：** 等值區域圖包含一個具有 `id="title"` 屬性的標題。

**需求 #2：** 等值區域圖包含一個具有 `id="description"` 屬性的描述內容。

**需求 #3：** 等值區域圖包含一些州縣來展示數據，這些州縣應該具有 `class="county"` 屬性。

**需求 #4：** 這些州縣至少應該有 4 種不同的填充顏色。

**需求 #5：** 每個州縣都應該具有 `data-fips` 和 `data-education` 屬性，分別包含相應的值 `fips` 和 `education`。

**需求 #6：** 在等值區域圖中，每一個提供的數據點都應該有一個對應的州縣。

**需求 #7：** 各個州縣應該具有與樣本數據匹配的 `data-fips` 和 `data-education` 值。

**需求 #8：** 等值區域圖包含一個具有 `id="legend"` 屬性的圖例。

**需求 #9：** 圖例至少應該使用 4 種不同的填充顏色。

**需求 #10：** 將鼠標懸停在某個區域上時，可以看到具有 `id="tooltip"` 屬性的提示框，它會顯示有關該區域的更多信息。

**需求 #11：** 提示框應該有 `data-education` 屬性，它對應了當前激活區域的 `data-education` 屬性。

以下是完成此項目所需的數據集：

-   **US Education Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **US County Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>使用 CodePen 模板</a>來創建你的項目，點擊 `Save` 即可創建你的項目。 或者你可以在任何你喜歡的環境中使用以下 CDN 鏈接來運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

當你完成了本項目，並且該項目所有測試運行通過，請提交項目的 URL。

# --solutions--

```js
// solution required
```
