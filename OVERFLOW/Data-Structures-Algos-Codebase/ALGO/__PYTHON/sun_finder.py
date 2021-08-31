# def twoSum(arr,n,target):
#     for i in range(n):
#         for j in range(1,n):
#             result=arr[i]+arr[j]
#             if result==target:
#                 print("["+str(i)+","+str(j)+"]")


# arr=[2,7,11,15]

# twoSum(arr,len(arr),9)


class Solution:
    # def __init__(self,arr,n,target):
    #     self.arr=arr
    #     self.n=n
    #     self.target=target
    def twoSum(self, arr, n, target):
        for i in range(self.n):
            for j in range(1, self.n):
                result = self.arr[i] + self.arr[j]
                if result == self.target:
                    print("[" + str(i) + "," + str(j) + "]")


temp = Solution([2, 7, 11, 15], len([2, 7, 11, 15]), 9)

temp.twoSum()
