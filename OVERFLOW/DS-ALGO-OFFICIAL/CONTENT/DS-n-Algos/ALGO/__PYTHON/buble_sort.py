# sample input : 4
#                 -1,0,3,57,89,9
# output        : -1,0,3,9,57,89


def bubble_sort(arr, n):
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


arr = [64, 34, 25, 12, 22, 11, 90]

result = bubble_sort(arr, len(arr))

print(result)
