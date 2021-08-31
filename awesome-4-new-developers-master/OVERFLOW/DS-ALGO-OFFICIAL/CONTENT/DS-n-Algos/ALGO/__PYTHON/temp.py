# class human():
#     def __init__(self,name,age):
#         self.name=name
#         self.age=age


# class rohan(human):
#     def __init__(self, name, age,year):
#         super().__init__(name,age)
#         self.year=year

#     def welcome(self):
#         print("hello "+str(self.name) + " "+str(self.age)+" " + str(self.year))



# ron=rohan("rohan",22,2019)
# ron.welcome()


# class incr():
#     def itr(self):
#         self.a=1

    
#     def next(self):
#         if self.a <=5:
#             print(self.a)
#             self.a+=1
#         else:
#             raise StopIteration

# zip=incr()
# zip.itr()
# zip.next()
# zip.next()
# zip.next()
# zip.next()
# zip.next()
theBoard = [' '] * 10

print(theBoard)



((bo[7] == le and bo[8] == le and bo[9] == le) or # across the top
    (bo[4] == le and bo[5] == le and bo[6] == le) or # across the middle
    (bo[1] == le and bo[2] == le and bo[3] == le) or # across the bottom
    (bo[7] == le and bo[4] == le and bo[1] == le) or # down the left side
    (bo[8] == le and bo[5] == le and bo[2] == le) or # down the middle
    (bo[9] == le and bo[6] == le and bo[3] == le) or # down the right side
    (bo[7] == le and bo[5] == le and bo[3] == le) or # diagonal
    (bo[9] == le and bo[5] == le and bo[1] == le)) 


    print('   |   |')
    print(' ' + board[7] + ' | ' + board[8] + ' | ' + board[9])
    print('   |   |')
    print('-----------')
    print('   |   |')
    print(' ' + board[4] + ' | ' + board[5] + ' | ' + board[6])
    print('   |   |')
    print('-----------')
    print('   |   |')
    print(' ' + board[1] + ' | ' + board[2] + ' | ' + board[3])
    print('   |   |')    