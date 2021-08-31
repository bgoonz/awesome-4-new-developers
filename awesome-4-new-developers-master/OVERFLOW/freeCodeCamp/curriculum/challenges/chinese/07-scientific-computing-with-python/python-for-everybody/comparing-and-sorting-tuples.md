---
id: 5e7b9f0b0b6c005b0e76f06d
title: Tuples 的比较和排序
challengeType: 11
videoId: dZXzBXUxxCs
dashedName: comparing-and-sorting-tuples
---

# --description--

更多资源：

\- [练习](https://www.youtube.com/watch?v=EhQxwzyT16E)

# --question--

## --text--

哪个代码与示例代码完成相同的功能？

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

