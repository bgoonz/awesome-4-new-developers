---
id: 5e7b9f0b0b6c005b0e76f06d
title: Comparação e ordenação de tuplas
challengeType: 11
videoId: dZXzBXUxxCs
dashedName: comparing-and-sorting-tuples
---

# --description--

Mais recursos:

\- [Exercício](https://www.youtube.com/watch?v=EhQxwzyT16E)

# --question--

## --text--

Qual das alternativas produz o mesmo resultado que o código seguinte?:

```python
lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)
```

## --answers--

```python
print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
```

---

```python
print( [ (k,v) for k,v in counts.items().sorted() ] )
```

---

```python
print( sorted( [ (v,k) for k,v in counts.keys() ] ) )
```

---

```python
print( [ (k,v) for k,v in counts.values().sort() ] )
```

## --video-solution--

1

