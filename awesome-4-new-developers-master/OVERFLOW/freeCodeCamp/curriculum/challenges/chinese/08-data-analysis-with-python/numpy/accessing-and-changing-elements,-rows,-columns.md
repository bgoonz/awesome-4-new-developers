---
id: 5e9a0a8e09c5df3cc3600ed4
title: '访问与更改元素、行和列'
challengeType: 11
videoId: v-7Y7koJ_N0
dashedName: accessing-and-changing-elements-rows-columns
---

# --question--

## --text--

以下哪行代码将下面的 Numpy 数组的第三行的数值都更改成 20？

```py
a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

# Output:
# [[ 1  2  20  4  5]
# [ 6  7 20  9 10]]
```

## --answers--

```python
a[:, 3] = 20
```

---

```python
a[2, :] = 20
```

---

```python
a[:, 2] = 20
```

---

```python
a[1, 2] = 20
```

## --video-solution--

3

