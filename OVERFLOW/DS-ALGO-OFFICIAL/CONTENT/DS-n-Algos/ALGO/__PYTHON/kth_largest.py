def kth_array(arr, n):
    arr.sort(reverse=True)

    for i in range(n):
        print(arr[i])


arr = [1, 23, 12, 9, 30, 2, 50]

kth_array(arr, 3)
