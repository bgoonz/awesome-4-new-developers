def zeros(arr, n):
    count = 0
    for i in range(n):
        if arr[i] != 0:
            arr[count] = arr[i]
            count += 1

    while count < n:
        arr[count] = 0
        count += 1


def print_arr(arr, n):
    for i in range(n):
        print(arr[i], end=" ")


arr = [1, 0, 0, 2, 5, 0]
zeros(arr, len(arr))
print_arr(arr, len(arr))
