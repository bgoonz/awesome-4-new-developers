---
id: 5e9a093a74c4063ca6f7c15c
title: Creazione di colonne con Panda
challengeType: 11
videoId: _sSo2XZoB3E
dashedName: pandas-creating-columns
---

# --description--

*Invece di usare notebooks.ai come mostrato nel video, puoi usare Google Colab.*

Altre risorse:

-   [Notebook su GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [Come aprire Notebooks da GitHub usando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Quale codice aggiungerebbe una colonna "Certificates per month" al DataFrame `certificates_earned` come mostrato sotto?

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

