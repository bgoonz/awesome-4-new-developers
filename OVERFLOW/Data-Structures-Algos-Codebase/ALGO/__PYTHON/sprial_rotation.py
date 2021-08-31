def sprialMatrix(arr, m, n):
    k = 0
    l = 0
    while k < m and l < n:

        for i in range(l, n):
            print(arr[k][i], end=" ")
        k += 1

        for i in range(k, m):
            print(arr[i][n - 1], end=" ")
        n -= 1

        if k < m:
            for i in range(n - 1, l - 1, -1):
                print(arr[m - 1][i], end=" ")
            m -= 1
        if l < n:
            for i in range(m - 1, k - 1, -1):
                print(arr[i][l], end=" ")
            l += 1


# function calling
sprialMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 3)
