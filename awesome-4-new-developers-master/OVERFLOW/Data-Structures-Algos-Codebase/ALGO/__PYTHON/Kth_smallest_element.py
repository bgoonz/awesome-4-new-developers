# Input:
# N = 6
# arr[] = 7 10 4 3 20 15
# K = 3
# Output : 7
# Explanation :
# 3rd smallest element in the given
# array is 7.

# def kthSmallest(arr, l, r, k):
#     '''
#     arr : given array
#     l : starting index of the array i.e 0
#     r : ending index of the array i.e size-1
#     k : find kth smallest element and return using this function
#     '''
#     arr.sort()
#     return(arr[k-1])

# r=int(input())
# arr=input()
# array=list(map(int,arr.strip().split()))
# k=int(input())
# print(kthSmallest(array,0,r-1,k))


def kthSmallest(arr, l, r, k):

    if k > 0 and k <= r - l + 1:

        pos = randomPartition(arr, l, r)
        if pos - l == k - 1:
            return arr[pos]
        if pos - l > k - 1:

            return kthSmallest(arr, l, pos - 1, k)

        return kthSmallest(arr, pos + 1, r, k - pos + l - 1)

    return 999999999999


def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp


def partition(arr, l, r):
    x = arr[r]
    i = l
    for j in range(l, r):
        if arr[j] <= x:
            swap(arr, i, j)
            i += 1
    swap(arr, i, r)
    return i


def randomPartition(arr, l, r):
    n = r - l + 1
    pivot = int(random.random() % n)
    swap(arr, l + pivot, r)
    return partition(arr, l, r)
