# average of sum of lists
m = [1,43,656,8,54,908,4,5,23,78,435,89,45,476,89]
n = [234,56,90,675,56,786,90,564,8,657,87,64,354,2,75]
q = [34,76,76,564,34,32,16,67,25,98,90,345,235,64,134,76]
def avgSums(a,b,c):
	summingUp = sum(a) + sum(b) + sum(c)
	summed = summingUp / 3
	return(summed)
print(avgSums(m,n,q))
# [Running] python -u "c:\0-a-A-October\00-weeks\08-my-website\Stable\Public\2-content\Data-Structures\DS-and-Algorithms-Prac\DS-n-Algos\Arrays\python\sum-avg\avg.py"
# 2892.6666666666665
# 
# [Done] exited with code=0 in 0.186 seconds
