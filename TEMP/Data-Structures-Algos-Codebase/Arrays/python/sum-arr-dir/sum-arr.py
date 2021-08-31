def sum_arr(n):
    res = 0
    for x in n:
        res += x
    return res

nums = [52345,746587,98589,54398,9348,45887,49856]
test = sum_arr(nums) 

#sum() is Pythons built in method of adding all the elements in a list
if test == sum(nums):
    print("Sum of arr: {}".format(test))
else:
    print("Func dosen't work!")

# [Running] python -u "c:\0-a-A-October\00-weeks\08-my-website\Stable\Public\2-content\Data-Structures\DS-and-Algorithms-Prac\In-Progress\python\sum-arr-dir\sum-arr.py"
# Sum of arr: 1057010
