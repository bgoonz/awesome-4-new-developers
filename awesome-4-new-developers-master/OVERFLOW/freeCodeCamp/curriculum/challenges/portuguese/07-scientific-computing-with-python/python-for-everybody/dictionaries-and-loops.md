---
id: 5e7b9f0a0b6c005b0e76f069
title: Dicionários e laços de repetição
challengeType: 11
videoId: EEmekKiKG70
dashedName: dictionaries-and-loops
---

# --description--

Mais recursos:

\- [Exercício](https://www.youtube.com/watch?v=PrhZ9qwBDD8)

# --question--

## --text--

O que será impresso pelo código a seguir?:

```python
counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key in counts:
    if counts[key] > 10:
        print(key, counts[key])
```

## --answers--

<pre>annie 42
jan 100</pre>

---

<pre>chuck 1
annie 42
jan 100</pre>

---

<pre>chuck 1</pre>

---

<pre>[Error]</pre>

## --video-solution--

1
