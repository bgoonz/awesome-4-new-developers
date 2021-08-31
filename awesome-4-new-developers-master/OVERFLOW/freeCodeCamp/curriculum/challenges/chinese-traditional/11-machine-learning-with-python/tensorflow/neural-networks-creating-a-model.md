---
id: 5e8f2f13c4cdbe86b5c72d95
title: '神經網絡：創建模型'
challengeType: 11
videoId: K8bz1bmOCTw
dashedName: neural-networks-creating-a-model
---

# --question--

## --text--

填寫下面的空白，建立一個密集層的順序模型。

```py
model = __A__.__B__([
    __A__.layers.Flatten(input_shape=(28, 28)),
    __A__.layers.__C__(128, activation='relu'),
    __A__.layers.__C__(10, activation='softmax')
])
```

## --answers--

A: `keras`

B: `Sequential`

C: `Dense`

---

A: `tf`

B: `Sequential`

C: `Categorical`

---

A: `keras`

B: `sequential`

C: `dense`

## --video-solution--

1

