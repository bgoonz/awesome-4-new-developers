def xor(arr, n):

    xor_val = 0
    for i in range(n):
        xor_val = xor_val ^ arr[i]
    return xor_val


arr = [3, 9, 12, 13, 15]
n = len(arr)
print(xor(arr, n))
