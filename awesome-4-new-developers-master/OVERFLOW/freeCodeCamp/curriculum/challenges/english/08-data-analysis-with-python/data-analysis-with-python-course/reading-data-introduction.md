---
id: 5e9a093a74c4063ca6f7c161
title: Reading Data Introduction
challengeType: 11
videoId: cDnt02BcHng
dashedName: reading-data-introduction
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/RDP-Reading-Data-with-Python-and-Pandas/tree/master/unit-1-reading-data-with-python-and-pandas/lesson-1-reading-csv-and-txt-files/files)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Given a file named `certificates.csv` with these contents:

<pre>
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
</pre>

Fill in the blanks for the missing arguments below:

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

