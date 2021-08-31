---
id: 5e9a093a74c4063ca6f7c15a
title: I DataFrame di Panda
challengeType: 11
videoId: 7SgFBYXaiH0
dashedName: pandas-dataframes
---

# --description--

*Invece di usare notebooks.ai come mostrato nel video, puoi usare Google Colab.*

Altre risorse:

-   [Notebook su GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [Come aprire Notebooks da GitHub usando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Cosa verrà visualizzato nella console con il seguente codice?

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
Tom      16
Kris      5
Ahmad     9
Beau     12
Name: Time (in months), dtype: int64
</pre>

---

<pre>
Certificates         6
Time (in months)    12
Name: Beau, dtype: int64
</pre>

---

<pre>
Certificates        5
Time (in months)    9
Name: Ahmad, dtype: int64
</pre>

## --video-solution--

3

