def sort_num(arr, n):
    cnt0 = 0
    cnt1 = 0
    cnt2 = 0
    for i in range(n):
        if arr[i] == 0:
            cnt0 += 1
        elif arr[i] == 1:
            cnt1 += 1
        elif arr[i] == 2:
            cnt2 += 1

    i = 0

    while cnt0 > 0:
        arr[i] = 0
        i += 1
        cnt0 -= 1
    while cnt1 > 0:
        arr[i] = 1
        i += 1
        cnt1 -= 1
    while cnt2 > 0:
        arr[i] = 2
        i += 1
        cnt2 -= 1


def print_arr(arr, n):
    for i in range(n):
        print(arr[i], end=" ")


arr = [0, 1, 2, 0, 1, 2]
n = len(arr)
sort_num(arr, n)
print_arr(arr, n)
