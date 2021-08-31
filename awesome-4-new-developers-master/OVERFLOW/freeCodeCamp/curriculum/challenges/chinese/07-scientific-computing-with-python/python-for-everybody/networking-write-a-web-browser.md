---
id: 5e7b9f0c0b6c005b0e76f073
title: '联网：编写一个 Web 浏览器'
challengeType: 11
videoId: zjyT9DaAjx4
dashedName: networking-write-a-web-browser
---

# --question--

## --text--

以下代码创建了什么？

```py
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')
mysock.close()
```

## --answers--

一个简单的 web 服务器

---

一个简单的 email 客户端

---

一个简单的待办事项列表

---

一个简单的 web 浏览器

## --video-solution--

4

