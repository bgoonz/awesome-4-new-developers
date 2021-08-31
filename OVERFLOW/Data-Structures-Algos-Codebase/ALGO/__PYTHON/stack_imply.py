import sys


class Stack:
    # initialize the constructor of empty array
    def __init__(self, arr, limit):
        self.arr = arr
        self.arr = []
        self.limit = limit

    # defining an method to get all the elements in the que
    def print_elements(self):
        for i in range(len(self.arr)):
            print(self.arr[i])

    # defining an method to append elements in a stack
    def push(self, i):
        # limiting the stack size
        if len(self.arr) <= self.limit - 1:
            self.arr.append(i)
        else:
            # limit of stack exceeds stack overflow
            print("elements are : ")
            for i in range(len(self.arr)):
                print(self.arr[i])
            print("stack overflow occurred")
            sys.exit()

    # defining an method to pop an element from the array
    def pop(self):
        self.arr.pop()

    # defining an method to check if the stack is empty
    def is_empty(self):
        n = len(self.arr)
        if n == 0:
            print("array is empty")
        else:
            print("array is not empty")

    # defining an method to get the top element
    def top(self):
        n = len(self.arr)
        return self.arr[n]


# initialize the object
sta = Stack([], 4)

# pushing an element to the array
sta.push(1)
sta.push(2)
sta.push(1)
sta.push(2)
sta.push(2)
sta.push(2)
# printing all the elements in the stack
sta.print_elements()
# popping the element from the array
sta.pop()

# printing all the elements in the stack
sta.print_elements()

# popping an element from the array
sta.pop()

# checking if the array is empty or not
sta.is_empty()
