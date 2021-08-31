from abc import ABCMeta, abstractmethod
class Book(object, metaclass=ABCMeta):
    def __init__(self,title,author):
        self.title=title
        self.author=author   
    @abstractmethod
    def display(): pass

class MyBook(Book):
    

title=input()
author=input()
price=int(input())
new_novel=MyBook(title,author,price)
new_novel.display()