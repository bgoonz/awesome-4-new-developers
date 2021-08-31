# https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/

# o(n^3)

# def Triplet(arr):
#     n = len(arr)
#     found = False
#     for i in range(0, n - 2):
#         for j in range(i + 1, n - 1):
#             for k in range(j + 1, n):
#                 if arr[i] + arr[j] + arr[k] == 0:
#                     print(arr[i], arr[j], arr[k])
#                     found=True
#
#     if not found:
#         print("element not found")
#
#
# arr=[0, -1, 2, -3, 1]
#
# Triplet(arr)

# optimal soultion
# o(n^2)


def Triplet(arr):
    n = len(arr)
    found = True
    for i in range(n - 1):
        l = i + 1
        r = n - 1
        x = arr[i]
        while l < r:
            if arr[l] + arr[r] + x == 0:
                print(arr[l], arr[r], x)
                l += 1
                r -= 1
                found = True
            elif arr[l] + arr[r] + x < 0:
                l += 1
            else:
                r -= 1

    if not found:
        print("triplet not found")


arr = [0, -1, 2, -3, 1]

Triplet(arr)
