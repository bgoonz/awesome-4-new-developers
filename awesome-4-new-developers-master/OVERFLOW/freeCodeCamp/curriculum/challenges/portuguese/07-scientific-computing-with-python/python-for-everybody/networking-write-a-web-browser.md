---
id: 5e7b9f0c0b6c005b0e76f073
title: 'Redes: Escreva um navegador da Web'
challengeType: 11
videoId: zjyT9DaAjx4
dashedName: networking-write-a-web-browser
---

# --question--

## --text--

O que será criado pelo código abaixo?

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

Um servidor web simples.

---

Um client de e-mail simples.

---

Uma lista de tarefas simples.

---

Um navegador web simples.

## --video-solution--

4

