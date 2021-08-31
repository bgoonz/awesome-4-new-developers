---
id: 5e9a093a74c4063ca6f7c15c
title: Pandas 創建列
challengeType: 11
videoId: _sSo2XZoB3E
dashedName: pandas-creating-columns
---

# --description--

*在視頻中我們使用的編輯器工具是在 notebook.ai 這個平臺，你也可以選擇用其他的平臺，比如說 Google Colab 也是一個不錯的選擇。*

以下有更多的資料：

-   [在 GitHub 平臺的 Notebooks](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [如何使用 Google Colab 來打開 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

哪段代碼可以向 DataFrame `certificates_earned` 中添加一個 “Certificates per month” 列，就像下面所展示的？

<pre>      Certificates  Time (in months)  Certificates per month
Tom               8                16                    0.50
Kris              2                 5                    0.40
Ahmad             5                 9                    0.56
Beau              6                12                    0.50</pre>

## --answers--

```py
certificates_earned['Certificates'] /
certificates_earned['Time (in months)']
```

---

```py
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)']
)
```

---

```py
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)'], 2
)
```

## --video-solution--

3

