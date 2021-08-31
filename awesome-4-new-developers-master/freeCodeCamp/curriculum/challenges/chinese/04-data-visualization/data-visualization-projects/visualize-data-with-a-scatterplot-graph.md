---
id: bd7178d8c242eddfaeb5bd13
title: 用散点图可视化数据
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**目标：** 在 [CodePen.io](https://codepen.io) 上实现一个功能类似 <https://codepen.io/freeCodeCamp/full/bgpXyK> 的 App。

在满足以下[需求](https://en.wikipedia.org/wiki/User_story)并能通过所有测试的前提下， 你可以根据自己的喜好来美化你的 app。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。 该任务需要使用 D3 的坐标轴属性生成坐标轴，这个属性会自动生成沿轴的刻度。 这些刻度是通过 D3 测试所必需的，因为它们的位置是用来确定图表元素的对齐方式。 你可以在这里 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 获取关于生成坐标轴的信息。 每次测试查询的元素都必须是非虚拟 DOM。 如果你使用了前端框架（例如 Vue），因为内容是动态渲染的，试结果可能不准确。 我们希望最终能够兼容这些框架，但 D3 框架目前还不支持它们。

**需求 #1：** 散点图包含一个具有 `id="title"` 属性的标题元素。

**需求 #2：** 散点图包含一个具有 `id="x-axis"` 属性的 x 轴。

**需求 #3：** 散点图包含一个具有 `id="y-axis"` 属性的 y 轴。

**需求 #4：** 散点图包含一些点，每个点都有一个值为 `dot` 的 class 属性，它代表了被绘制的数据。

**需求 #5：** 每个点都应具有 `data-xvalue` 属性和 `data-yvalue` 属性，具有相应的属性值 `x` 和 `y`。

**需求 #6：** 每个点的 `data-xvalue` 属性和 `data-yvalue` 属性应该在实际数据的范围内，并且数据格式应该正确无误。 对于`data-xvalue` ，可以接受整数（全年）或 `Date` 对象进行测试评估。 对于 `data-yvalue`（分钟），应使用 `Date` 对象。

**需求 #7：** `data-xvalue` 属性和它对应的点应该和 x 轴上的点或值对齐。

**需求 #8：** `data-yvalue`属性和它对应的点应该和 y 轴上的点或值对齐。

**需求 #9：** 散点图的 y 轴上有多个时间格式为 `%M:%S` 的刻度标签。

**需求 #10：** 散点图的 x 轴上有多个显示年份的刻度标签。

**需求 #11：** 散点图的 x 轴标签的范围在实际 x 轴数据的范围内。

**需求 #12：** 散点图的 y 轴标签的范围在实际 y 轴数据的范围内。

**需求 #13：** 散点图包含一个包含描述性文字的图例，它具有 `id="legend"` 属性。

**需求 #14：** 将鼠标悬停在某个区域上时，可以看到具有 `id="tooltip"` 属性的提示框，它会显示有关该区域的更多信息。

**需求 #15：** 提示框应该有 `data-year` 属性，它对应了当前激活区域的 `data-xvalue` 属性。

以下是完成此项目所需的数据：`https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>使用这个 CodePen 模板</a>来创建你的项目，点击 `Save` 即可创建你的项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

当你完成了本项目，并且项目通过所有测试，请提交项目的 URL。

# --solutions--

```js
// solution required
```
