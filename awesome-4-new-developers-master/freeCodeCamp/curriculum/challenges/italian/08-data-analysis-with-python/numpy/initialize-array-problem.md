---
id: 5e9a0a8e09c5df3cc3600ed6
title: Problema di inizializzazione degli array
challengeType: 11
videoId: 0jGfH8BPfOk
dashedName: initialize-array-problem
---

# --question--

## --text--

Qual è un altro modo di produrre il seguente array?

```py
[[0. 0. 0. 0. 0. 0. 0.]
[0. 1. 1. 1. 1. 1. 0.]
[0. 1. 1. 1. 1. 1. 0.]
[0. 1. 1. 5. 1. 1. 0.]
[0. 1. 1. 1. 1. 1. 0.]
[0. 1. 1. 1. 1. 1. 0.]
[0. 0. 0. 0. 0. 0. 0.]]
```

## --answers--

```py
output = np.ones((7, 7))

z = np.zeros((5, 5))
z[2, 2] = 5

output[1:1, -1:-1] = z
```

---

```py
output = np.zeros((7,7))

z = np.ones((5, 5))
z[2, 2] = 5

output[1:-1, 1:-1] = z
```

---

```py
output = np.ones((7, 7))

z = np.zeros((5, 5))
z[3, 3] = 5

output[1:-1, 1:-1] = z
```

## --video-solution--

2

