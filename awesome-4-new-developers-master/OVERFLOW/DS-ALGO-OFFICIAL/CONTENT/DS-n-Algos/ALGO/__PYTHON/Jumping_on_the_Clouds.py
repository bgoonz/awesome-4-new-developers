def jumpingOnClouds(c):
    i = counter = 0
    length = len(c)

    while i < length - 1:
        if c[i + 2] == 0:
            i += 2
        else:
            i += 1
        counter += 1
    return counter


arr = [0, 0, 0, 0, 1, 0]

print(jumpingOnClouds(arr))
