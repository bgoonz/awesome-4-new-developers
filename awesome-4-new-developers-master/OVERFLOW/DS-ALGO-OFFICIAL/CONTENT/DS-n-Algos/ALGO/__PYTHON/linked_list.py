# linked list creation
# singly linked list


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def PrintList(self):
        if self.head is not None:
            itr = self.head
            while itr:
                print(itr.data, end="-->")
                itr = itr.next


if __name__ == "__main__":
    # creating empty linked list
    l = LinkedList()
    # assigning the first node to head of linked list
    l.head = Node(1)
    # assigining the second node
    l2 = Node(2)
    # assigining the third node
    l3 = Node(3)

    # linking the first node to the second
    l.head.next = l2
    # linking the second node to the third
    l2.next = l3

    # printing the list
    l.PrintList()
