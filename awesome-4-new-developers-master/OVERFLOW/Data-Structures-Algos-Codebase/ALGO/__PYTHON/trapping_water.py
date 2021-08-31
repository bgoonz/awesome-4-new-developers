def LeftMax(array, i):
    left = array[i]
    for j in range(i):
        # left=max(left,array[j])
        if left < array[j]:
            left = array[j]
        else:
            left = left
    return left


def RightMax(array, i):
    right = array[i]
    for j in range(i + 1, len(array)):
        # right=max(right,array[j])
        if right < array[j]:
            right = array[j]
        else:
            right = right
    return right


def TrappingWater(array):
    totalwater = 0
    for i in range(1, len(array) - 1):
        leftMax = LeftMax(array, i)
        rightMax = RightMax(array, i)
        totalwater = totalwater + (min(leftMax, rightMax) - array[i])
    return totalwater


array = [2, 0, 2]

print(TrappingWater(array))
