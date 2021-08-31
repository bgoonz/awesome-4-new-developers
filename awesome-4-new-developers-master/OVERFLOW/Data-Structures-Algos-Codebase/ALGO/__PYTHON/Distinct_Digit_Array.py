# Input: nums = [131, 11, 48]
# Output: 1 3 4 8
# Explanation: 1, 3, 4, and 8 are only distinct
# digits that can be extracted from the numbers
# of the array.


def Dis_array(arr):
    dup = []
    for i in arr:
        length = len(str(i))
        i = str(i)
        for j in range(length):
            if i[j] in dup:
                pass
            else:
                dup.append(i[j])

    print(dup)


arr = [131, 11, 48]
Dis_array(arr)
