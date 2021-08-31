---
id: 5e7b9f0d0b6c005b0e76f075
title: 'Networking: usare urllib in Python'
challengeType: 11
videoId: 7lFM1T_CxBs
dashedName: networking-using-urllib-in-python
---

# --question--

## --text--

Quale sarà l'output del seguente codice?

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

Solo i contenuti di "romeo.txt".

---

Un'intestazione e il contenuto di "romeo.txt".

---

Un'intestazione, un piè di pagina e il contenuto di "romeo.txt".

## --video-solution--

1

