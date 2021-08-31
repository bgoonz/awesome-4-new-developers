---
id: 5e9a093a74c4063ca6f7c15d
title: Introduzione alla pulizia dei dati
challengeType: 11
videoId: ovYNhnltVxY
dashedName: data-cleaning-introduction
---

# --description--

*Invece di usare notebooks.ai come mostrato nel video, puoi usare Google Colab.*

Altre risorse:

-   [Notebook su GitHub](https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp)
-   [Come aprire Notebooks da GitHub usando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Cosa verrà visualizzato nella console con il seguente codice?

```py
import pandas as pd
import numpy as np

s = pd.Series(['a', 3, np.nan, 1, np.nan])

print(s.notnull().sum())
```

## --answers--

3

---

<pre>0     True
1     True
2    False
3     True
4    False
dtype: bool</pre>

---

<pre>0    False
1    False
2     True
3    False
4     True
dtype: bool</pre>

## --video-solution--

1

