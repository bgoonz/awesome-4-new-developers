def orangesRotting(elemnts):
    if not elemnts or len(elemnts) == 0:
        return 0
    n = len(elemnts)
    m = len(elemnts[0])
    rotten = []
    for i in range(n):
        for j in range(m):
            if elemnts[i][j] == 2:
                rotten.append((i, j))
    mins = 0

    def dfs(rotten):
        count = []
        for i, j in rotten:
            if i > 0 and rotten[i - 1][j] == 1:
                count.append((i - 1, j))
                elemnts[i - 1][j] = 2

            if j > 0 and rotten[i][j - 1] == 1:
                count.append((i, j - 1))
                elemnts[i][j - 1] = 2

            if i < n - 1 and rotten[i][j] == 1:
                count.append((i, j))
                elemnts[i][j] = 2

            if j < m - 1 and rotten[i][j] == 1:
                count.append((i, j))
                elemnts[i][j] = 2

        return count

    while rotten:
        rotten = dfs(rotten)
        if not rotten:
            break
        mins += 1

    for i in range(n):
        for j in range(m):
            if elemnts[i][j] == 1:
                return -1

    return mins
