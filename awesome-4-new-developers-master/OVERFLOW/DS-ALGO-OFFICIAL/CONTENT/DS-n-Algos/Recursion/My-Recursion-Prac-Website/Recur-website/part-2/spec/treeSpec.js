describe("tree", function () {
  var tree;

  beforeEach(function () {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function () {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect("value" in tree).toBe(true);
  });

  it("should add a child when add child is called", function () {
    tree.addChild("first");
    expect(tree.children.length).toEqual(1);
  });

  it("should add a child to another child", function () {
    tree.addChild("first");
    tree.children[0].addChild("second");
    expect(tree.children[0].children.length).toEqual(1);
  });

  it("should return true if the passed in value exists", function () {
    tree.addChild("first");
    expect(tree.contains("first")).toEqual(true);
  });

  it("should return false if the passed in value does not exist", function () {
    tree.addChild("first");
    expect(tree.contains("second")).toEqual(false);
  });

  //parent links tests
  it("should set parent property when addChild is called", function () {
    tree.addChild("first");
    expect(tree.children[0].parent).toBe(tree);
    tree.addChild("second");
    expect(tree.children[1].parent).toBe(tree);
    tree.children[0].addChild("first's first");
    expect(tree.children[0].children[0].parent).toBe(tree.children[0]);
  });

  //removeFromParent tests

  it("should disassociate the parent and child from each other when the child calls removeFromParent", function () {
    tree.addChild("first");
    tree.removeFromParent(0);
    expect(tree.children).toEqual([]);
  });
});
