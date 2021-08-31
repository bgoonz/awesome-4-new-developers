def left_search(arr, low, high, x):
    temp = -1

    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] > x:
            high = mid - 1
        elif arr[mid] < x:
            low = mid + 1
        else:
            temp = mid
            high = mid - 1
    return temp


def right_search(arr, low, high, x):
    temp = -1

    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] > x:
            high = mid - 1
        elif arr[mid] < x:
            low = mid + 1
        else:
            temp = mid
            low = mid + 1
    return temp


arr = [1, 4, 4, 4, 5, 6, 7]
l_result = left_search(arr, 0, len(arr), 4)
r_result = right_search(arr, 0, len(arr), 4)

print("first occurance:" + str(l_result))
print("last occurance: " + str(r_result))
