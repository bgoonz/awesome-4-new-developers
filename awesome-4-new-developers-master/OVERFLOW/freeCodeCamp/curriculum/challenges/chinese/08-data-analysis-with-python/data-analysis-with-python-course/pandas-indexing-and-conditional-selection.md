---
id: 5e9a093a74c4063ca6f7c159
title: Pandas 索引和条件选择
challengeType: 11
videoId: '-ZOrgV_aA9A'
dashedName: pandas-indexing-and-conditional-selection
---

# --description--

*在视频中我们使用的编辑器工具是在 notebook.ai 这个平台，你也可以选择用其他的平台，比如说 Google Colab 也是一个不错的选择。*

以下有更多的资料：

-   [在 GitHub 平台的 Notebooks](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [如何使用 Google Colab 来打开 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

以下代码会打印出什么？

```py
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned[certificates_earned > 5])
```

## --answers--

<pre>
Tom      True
Kris     False
Ahmad    False
Beau     True
dtype: int64
</pre>

---

<pre>
Tom      8
Ahmad    5
Beau     6
dtype: int64
</pre>

---

<pre>
Tom      8
Beau     6
dtype: int64
</pre>

## --video-solution--

3

