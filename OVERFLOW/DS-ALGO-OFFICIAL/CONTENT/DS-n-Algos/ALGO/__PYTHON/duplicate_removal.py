def duplicate_removal(arr):
    dictonary = {}
    for i in arr:
        if i in dictonary:
            dictonary[i] = dictonary[i] + 1
        else:
            dictonary[i] = 1
    return dictonary.keys()


arr = [1, 2, 2, 3, 4, 5, 5, 6, 7]

print(int(len(list(duplicate_removal(arr)))))
