def cyclic_rotation(arr, n):
    temp = arr[n - 1]
    for i in range(n - 1, 0, -1):
        arr[i] = arr[i - 1]
    arr[0] = temp


def print_array(arr, n):
    for i in range(n):
        print(arr[i])


arr = [1, 2, 3, 4, 5]

cyclic_rotation(arr, 5)

print_array(arr, 5)
