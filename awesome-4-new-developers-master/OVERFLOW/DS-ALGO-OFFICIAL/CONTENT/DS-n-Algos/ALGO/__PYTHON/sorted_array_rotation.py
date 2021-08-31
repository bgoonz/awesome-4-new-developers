def sorted_rotation(arr, low, high, n):
    while low < high:
        if arr[low] <= arr[high]:
            return low
        mid = low + (high - low) // 2
        next = (mid + 1) % n
        prev = (mid + n - 1) % n
        if arr[mid] < arr[next] and arr[mid] < arr[prev]:
            return mid
        elif arr[mid] <= arr[high]:
            high = mid - 1
        elif arr[mid] >= arr[low]:
            low = mid + 1
    return -1


arr = [6, 7, 8, 9, 1, 2, 3, 4, 5]

result = sorted_rotation(arr, 0, len(arr) - 1, len(arr))

print("array is rotated by : " + result)
