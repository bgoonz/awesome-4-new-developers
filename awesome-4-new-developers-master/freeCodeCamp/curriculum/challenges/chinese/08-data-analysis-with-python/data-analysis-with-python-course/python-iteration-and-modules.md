---
id: 5e9a093a74c4063ca6f7c167
title: Python 迭代和模块
challengeType: 11
videoId: XzosGWLafrY
dashedName: python-iteration-and-modules
---

# --description--

*在视频中我们使用的编辑器工具是在 notebook.ai 这个平台，你也可以选择用其他的平台，比如说 Google Colab 也是一个不错的选择。*

更多资源：

-   [在 GitHub 平台的 Notebooks](https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes)
-   [如何使用 Google Colab 来打开 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

您将如何迭代并打印名为 `user` 的字典的键和值？

## --answers--

```python
for key in user.items():
    print(key)
```

---

```python
for key, value in user.all():
    print(key, value)
    print(value)
```

---

```python
for key, value in user.items():
    print(key, value)
```

---

```python
for key, value in user
    print(key, value)
```

## --video-solution--

3

