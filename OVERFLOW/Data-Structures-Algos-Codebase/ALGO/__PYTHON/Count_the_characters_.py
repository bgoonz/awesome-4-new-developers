# Input:
# S = "geeksforgeeks", N = 2
# Output: 4
# Explanation: 'g', 'e', 'k' and 's' have
# 2 occurrences.


def CountChar(String, Occurance):
    STROCR = {}
    RESULT = []
    for i in range(len(String)):
        if String[i] in STROCR.keys():
            STROCR[String[i]] += 1
        else:
            STROCR[String[i]] = 1
    for j in STROCR.keys():
        if STROCR[j] == Occurance:
            RESULT.append(j)
        elif STROCR[j] > Occurance:
            RESULT.append(j)
        else:
            pass
    print(RESULT)


String = "geeksforgeeks"
Occurance = 2
CountChar(String, Occurance)
