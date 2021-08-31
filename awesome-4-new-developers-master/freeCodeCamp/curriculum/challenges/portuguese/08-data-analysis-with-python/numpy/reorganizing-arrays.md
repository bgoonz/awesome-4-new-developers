---
id: 5e9a0a8e09c5df3cc3600ed9
title: Reorganizar arrays
challengeType: 11
videoId: VNWAQbEM-C8
dashedName: reorganizing-arrays
---

# --question--

## --text--

Qual código produziria o array a seguir?

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

