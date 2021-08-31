class Stack:
    def __init__(self, limit=10):
        self.stack = []
        self.limit = limit

    def push(self, n):
        if len(self.stack) > self.limit:
            self.doublelimit()
        else:
            self.stack.append(n)

    def pop(self):
        if len(self.stack) > 0:
            self.stack.pop()

    def is_empty(self):
        if len(self.stack) == 0:
            return True
        else:
            return False

    def PrintStack(self):
        for i in self.stack:
            print(i)

    def Length(self):
        n = len(self.stack)
        print(n)

    # logic for douling the stack
    def doublelimit(self):
        newStack = self.stack
        self.limit = 2 * self.limit
        self.stack = newStack


sta = Stack(5)


sta.push(1)
sta.push(2)
sta.push(1)
sta.push(2)
sta.push(2)
sta.push(2)


sta.PrintStack()


sta.Length()
