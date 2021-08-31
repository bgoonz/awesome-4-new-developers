class Tree:
    def __init__(self, data):
        self.data = data
        self.children = []
        self.parent = None

    def add_child(self, child):
        child.parent = self
        self.children.append(child)

    def print_elements(self):
        print(self.data)
        for i in self.children:
            print("  !-" + i.data)
            for j in i.children:
                print("    !----" + j.data)


root = Tree("electronics")

laptop = Tree("laptop")
laptop.add_child(Tree("mac"))
laptop.add_child(Tree("windows"))

cell = Tree("cell")
cell.add_child(Tree("LG"))
cell.add_child(Tree("apple"))

root.add_child(laptop)
root.add_child(cell)

root.print_elements()
