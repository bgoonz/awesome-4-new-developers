def SortAnagram(arr):
    temp = []
    stage = []
    dic = []

    for i in arr:
        for j in i:
            stage.append(j)
        stage.sort()
        temp.append("".join(stage))
        stage = []

    for index, value in enumerate(temp):
        dic.append([index, value])

    temp = []
    dic = sorted(dic, key=lambda x: x[1])
    for i in range(len(dic)):
        stage.append(dic[i][0])

    for i in stage:
        temp.append(arr[i])

    print(temp)


arr = ["cat", "dog", "tac", "god", "act"]

SortAnagram(arr)
