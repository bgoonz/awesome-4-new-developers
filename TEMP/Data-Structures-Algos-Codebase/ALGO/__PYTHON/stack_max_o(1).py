class Stack:
    # initialize the constructor of empty array
    def __init__(self, arr, limit):
        self.arr = arr
        self.arr = []
        self.limit = limit
        self.max_array = []

    # defining an method to get all the elements in the que
    def print_elements(self):
        for i in range(len(self.arr)):
            print(self.arr[i])

    # defining an method to append elements in a stack
    def push(self, i):
        # limiting the stack size
        if len(self.arr) <= self.limit - 1:
            self.arr.append(i)

    def maxPush(self):

        # if len(self.arr) <= self.limit - 1:
        if len(self.arr) == 1:
            self.max_array.append(self.arr[len(self.arr)-1])
        elif self.arr[len(self.arr)-1] < self.max_array[len(self.max_array)-1]:
            self.max_array.append(self.max_array[len(self.max_array)-1])
        else:
            self.max_array.append(self.arr[len(self.arr)-1])

        print("max value is : "+str(self.max_array[len(self.max_array)-1]))

    # defining an method to pop an element from the array
    def pop(self):
        self.arr.pop()
        max_array.pop()

    # defining an method to get the top element
    def top(self):
        n = len(self.arr)
        return self.arr[n]



# initialize the object
sta = Stack([], 6)


# pushing an element to the array
sta.push(10)
sta.maxPush()
print("-------------------")
sta.push(2)
sta.maxPush()
print("-------------------")
sta.push(3)
sta.maxPush()
print("-------------------")
sta.push(4)
sta.maxPush()
print("-------------------")
sta.push(5)
sta.maxPush()
print("-------------------")
sta.push(6)
sta.maxPush()
print("-------------------")
# printing all the elements in the stack
# sta.print_elements()
# popping the element from the array
# sta.pop()


