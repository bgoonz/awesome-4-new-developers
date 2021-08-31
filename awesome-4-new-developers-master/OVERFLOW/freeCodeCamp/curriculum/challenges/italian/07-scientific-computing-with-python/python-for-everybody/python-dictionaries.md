---
id: 5e7b9f090b6c005b0e76f067
title: Dizionari in Python
challengeType: 11
videoId: dnzvfimrRMg
dashedName: python-dictionaries
---

# --question--

## --text--

Quanto vale dict dopo l'esecuzione di questo codice?

```python
dict = {"Fri": 20, "Thu": 6, "Sat": 1}
dict["Thu"] = 13
dict["Sat"] = 2
dict["Sun"] = 9
```

## --answers--

```python
{'Fri': 20, 'Thu': 6, 'Sat': 1}
```

---

```python
{'Fri': 20, 'Thu': 6, 'Sat': 1, 'Thu': 13, 'Sat': 2, 'Sun': 9}
```

---

```python
{'Sun': 9}
```

---

```python
{'Thu': 13, 'Sat': 2, 'Sun': 9}
```

---

```python
{'Fri': 20, 'Thu': 13, 'Sat': 2, 'Sun': 9}
```

## --video-solution--

5

