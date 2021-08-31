def find(arr, search, n):
    for i in range(n):
        if arr[i] == search:
            return True
            break


arr = [1, 2, 3, 4, 5, 6]
search = 4

print(find(arr, search, 6))
