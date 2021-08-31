---
id: 5e9a093a74c4063ca6f7c161
title: Introduzione alla lettura dei dati
challengeType: 11
videoId: cDnt02BcHng
dashedName: reading-data-introduction
---

# --description--

*Invece di usare notebooks.ai come mostrato nel video, puoi usare Google Colab.*

Altre risorse:

-   [Notebook su GitHub](https://github.com/ine-rmotr-curriculum/RDP-Reading-Data-with-Python-and-Pandas/tree/master/unit-1-reading-data-with-python-and-pandas/lesson-1-reading-csv-and-txt-files/files)
-   [Come aprire Notebooks da GitHub usando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Dato un file chiamato `certificates.csv` con questi contenuti:

<pre>
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
</pre>

Riempi gli spazi vuoti per gli argomenti mancanti qui sotto:

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

