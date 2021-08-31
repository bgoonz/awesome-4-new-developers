arr = [1, 2, 3, 4, 5, 6]
x = 5

print("iterative approach to find element using")


def binary_search_iterative(arr, l, r, x):
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            l = mid + 1
        else:
            l = r - 1
    return -1


result_iterative = binary_search_iterative(arr, 0, len(arr) - 1, x)
if result_iterative != -1:
    print("element found: " + str(result_iterative))
else:
    print("not found")


print("#########################################")
print("recursive approach to find element using")


def binary_search_recursive(arr, l, r, x):
    if l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            return binary_search_recursive(arr, mid + 1, r, x)
        else:
            return binary_search_recursive(arr, l, mid - 1, x)
    else:
        return -1


result_recursive = binary_search_recursive(arr, 0, len(arr) - 1, x)

if result_iterative != -1:
    print("element found: " + str(result_recursive))
else:
    print("not found")
