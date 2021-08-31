---
id: 5e9a0a8e09c5df3cc3600ed9
title: Riorganizzazione degli array
challengeType: 11
videoId: VNWAQbEM-C8
dashedName: reorganizing-arrays
---

# --question--

## --text--

Quale codice produrrebbe il seguente array?

```py
[[1. 1.]
[1. 1.]
[1. 1.]
[1. 1.]]
```

## --answers--

```py
a = np.ones((2, 4))
b = a.reshape((4, 2))
print(b)
```

---

```py
a = np.ones((2, 4))
b = a.reshape((2, 4))
print(b)
```

---

```py
a = np.ones((2, 4))
b = a.reshape((8, 1))
print(b)
```

## --video-solution--

1

