describe("binarySearchTree", function () {
  var binarySearchTree;

  beforeEach(function () {
    binarySearchTree = new makeBinarySearchTree(6);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function () {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree
});
