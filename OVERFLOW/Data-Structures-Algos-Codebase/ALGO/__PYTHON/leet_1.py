def addTwoNumbers(l1, l2):
    l1.reverse()
    l2.reverse()
    con_1 = ""
    con_2 = ""
    for i in l1:
        con_1 += str(i)
    for i in l2:
        con_2 += str(i)

    result = int(con_1) + int(con_2)

    temp = str(result)

    lis = []
    for i in temp:
        lis.append(i)

    lis.reverse()
    return lis


l1 = [2, 4, 3]
l2 = [5, 6, 4]
result = addTwoNumbers(l1, l2)
print(result)
