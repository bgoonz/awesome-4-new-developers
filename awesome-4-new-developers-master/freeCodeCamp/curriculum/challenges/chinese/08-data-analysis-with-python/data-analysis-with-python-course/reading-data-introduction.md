---
id: 5e9a093a74c4063ca6f7c161
title: 读取数据简介
challengeType: 11
videoId: cDnt02BcHng
dashedName: reading-data-introduction
---

# --description--

*在视频中我们使用的编辑器工具是在 notebook.ai 这个平台，你也可以选择用其他的平台，比如说 Google Colab 也是一个不错的选择。*

以下有更多的资料：

-   [在 GitHub 平台的 Notebooks](https://github.com/ine-rmotr-curriculum/RDP-Reading-Data-with-Python-and-Pandas/tree/master/unit-1-reading-data-with-python-and-pandas/lesson-1-reading-csv-and-txt-files/files)
-   [如何使用 Google Colab 来打开 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

文件 `certificates.csv` 有以下内容：

<pre>
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
</pre>

请填写以下缺失的参数：

```py
import csv

with open(__A__, 'r') as fp:
    reader = csv.reader(fp, delimiter=__B__)
    next(reader)
    for index, values in enumerate(reader):
        name, certs_num, months_num = values
        print(f"{name} earned {__C__} certificates in {months_num} months")
```

## --answers--

A: `'certificates.csv'`

B: `'-'`

C: `values`

---

A: `'certificates.csv'`

B: `'$'`

C: `certs_num`

---

A: `'certificates'`

B: `'$'`

C: `certs_num`

## --video-solution--

2

