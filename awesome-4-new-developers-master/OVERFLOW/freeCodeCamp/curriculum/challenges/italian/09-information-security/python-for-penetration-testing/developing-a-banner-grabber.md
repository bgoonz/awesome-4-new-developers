---
id: 5ea9997bbec2e9bc47e94db3
title: Sviluppare un Banner Grabber
challengeType: 11
videoId: CeGW761BIsA
dashedName: developing-a-banner-grabber
---

# --question--

## --text--

Riempi gli spazi vuoti per completare la funzione `banner` qui sotto:

```py
def banner(ip, port):
    s = socket.socket()
    s.__A__((ip, __B__))
    print(s.recv(1024))
```

## --answers--

A: `connect`

B: `port`

---

A: `getsockname`

B: `'1-1024'`

---

A: `connect`

B: `int(port)`

## --video-solution--

3

