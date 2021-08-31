class node:
    def __init__(self, val):
        self.right = None
        self.left = None
        self.val = val


root = node(1)
root.left = node(2)
root.right = node(3)
root.left.right = node(5)
root.left.left = node(4)


def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val)
        inorder_traversal(root.right)


def preorder_traversal(root):
    if root:
        print(root.val)
        preorder_traversal(root.left)
        preorder_traversal(root.right)


def postorder_traversal(root):
    if root:
        postorder_traversal(root.left)
        postorder_traversal(root.right)
        print(root.val)


print("########################")
print("inorder traversal: L N R ")
inorder_traversal(root)

print("########################")
print("preorder traversal: N L R ")
preorder_traversal(root)

print("########################")
print("postorder traversal: N R L")
postorder_traversal(root)
