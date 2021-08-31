matrix = []

for x in range(6):
    matrix.append([int(x) for x in input().split()])

hourglass = []

for i, row in enumerate(matrix):
    if i >= (len(matrix) - 2):
        break
    for j, e in enumerate(row):
        if j >= (len(row) - 2):
            break
        templist = []
        templist = templist + [matrix[i][j], matrix[i][j + 1], matrix[i][j + 2]]
        templist = templist + [matrix[i + 1][j + 1]]
        templist = templist + [
            matrix[i + 2][j],
            matrix[i + 2][j + 1],
            matrix[i + 2][j + 2],
        ]
        hourglass.append(templist)

hourglasssums = [sum(eachglass) for eachglass in hourglass]
print(max(hourglasssums))
