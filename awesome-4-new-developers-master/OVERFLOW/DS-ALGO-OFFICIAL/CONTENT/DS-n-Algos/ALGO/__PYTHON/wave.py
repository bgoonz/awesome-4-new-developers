def wave(arr, n):
    arr.sort()
    for i in range(0, n - 1, 2):
        arr[i], arr[i + 1] = arr[i + 1], arr[i]


arr = [10, 90, 49, 2, 1, 5, 23]

wave(arr, len(arr))

for i in range(len(arr)):
    print(arr[i], end=" ")
