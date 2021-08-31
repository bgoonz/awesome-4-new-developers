# Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

# There is only one repeated number in nums, return this repeated number.

# Example 1:

# Input: nums = [1,3,4,2,2]
# Output: 2


def findDuplicate(arr):
    for i in range(len(arr)):
        if arr[i] == arr[i + 1]:
            return arr[i]
        else:
            pass


arr = [1, 3, 4, 2, 2]

print(findDuplicate(arr))
