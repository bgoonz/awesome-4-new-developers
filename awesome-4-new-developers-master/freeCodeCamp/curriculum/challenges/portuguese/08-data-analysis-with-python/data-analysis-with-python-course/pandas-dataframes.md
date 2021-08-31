---
id: 5e9a093a74c4063ca6f7c15a
title: DataFrames do Pandas
challengeType: 11
videoId: 7SgFBYXaiH0
dashedName: pandas-dataframes
---

# --description--

*Ao invés de usar notebooks.ai como foi mostrado no vídeo, você pode usar o Google Colab como substituto.*

Mais recursos:

-   [Notebooks no GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [Como abrir notebooks do GitHub usando o Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

O que será impresso pelo código a seguir?

```py
import pandas as pd

certificates_earned = pd.DataFrame({
    'Certificates': [8, 2, 5, 6],
    'Time (in months)': [16, 5, 9, 12]
})

certificates_earned.index = ['Tom', 'Kris', 'Ahmad', 'Beau']

print(certificates_earned.iloc[2])
```

## --answers--

<pre>
Tom 16
Kris 5
Ahmad 9
Beau 12
Nome: Tempo (em meses), dtype: int64
</pre>

---

<pre>
Certificados 6
Tempo (em meses) 12
Nome: Beau, dtype: int64
</pre>

---

<pre>
Certificados 5
Tempo (em meses) 9
Nome: Ahmad, dtype: int64
</pre>

## --video-solution--

3

