---
id: 5e9a093a74c4063ca6f7c15e
title: DataFrames 中的數據清理
challengeType: 11
videoId: sTMN_pdI6S0
dashedName: data-cleaning-with-dataframes
---

# --description--

*在視頻中我們使用的編輯器工具是在 notebook.ai 這個平臺，你也可以選擇用其他的平臺，比如說 Google Colab 也是一個不錯的選擇。*

以下有更多的資料：

-   [在 GitHub 平臺的 Notebooks](https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp)
-   [如何使用 Google Colab 來打開 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

以下代碼會打印出什麼？

```py
import pandas as pd
import numpy as np

s = pd.Series([np.nan, 1, 2, np.nan, 3])
s = s.fillna(method='ffill')

print(s)
```

## --answers--

<pre>
0    1.0
1    1.0
2    2.0
3    3.0
4    3.0
dtype: float64
</pre>

---

<pre>
0    NaN
1    1.0
2    2.0
3    2.0
4    3.0
dtype: float64
</pre>

---

<pre>
0    NaN
1    1.0
2    2.0
3    NaN
4    3.0
dtype: float64
</pre>

## --video-solution--

2

