def fib_series(count):
    a = 0
    b = 1
    c = 1
    for i in range(count):
        a = b
        b = c
        c = a + b
        print(a)


fib_series(10)
