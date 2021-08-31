const chai = require("chai");
chai.use(require("chai-spies"));
const { expect, spy } = chai;
const { TreeNode, BST } = require("../problems/01-bst");
const { findMin } = require("../problems/02-findMin");
const { getHeight } = require("../problems/03-getHeight");

describe("BST", () => {
  describe("#constructor()", () => {
    it("should initialize the `root` property to null", () => {
      let tree = new BST();
      expect(tree).to.have.property("root");
      expect(tree.root).to.equal(null);
    });
  });

  describe("#insert(val)", () => {
    it("should insert a TreeNode with the given value into the BST", () => {
      let tree = new BST();
      tree.insert(10);
      tree.insert(5);
      tree.insert(16);
      tree.insert(1);
      tree.insert(7);
      tree.insert(16);
      expect(tree.root.val).to.equal(10);
      expect(tree.root.left.val).to.equal(5);
      expect(tree.root.right.val).to.equal(16);
      expect(tree.root.left.left.val).to.equal(1);
      expect(tree.root.left.right.val).to.equal(7);
      expect(tree.root.right.right.val).to.equal(16);
    });

    context("when the BST is empty", () => {
      it("should correctly insert a TreeNode with the given val as the root", () => {
        let tree = new BST();
        tree.insert(10);
        expect(tree.root).to.be.instanceOf(TreeNode);
        expect(tree.root.val).to.equal(10);
      });
    });
  });

  describe("#searchRecur(val)", () => {
    let tree;

    beforeEach(() => {
      tree = new BST();
      tree.insert(10);
      tree.insert(5);
      tree.insert(16);
      tree.insert(1);
      tree.insert(7);
      tree.insert(16);
    });

    it("should return false if the BST is empty", () => {
      let emptyTree = new BST();
      expect(emptyTree.searchRecur(10)).to.equal(false);
    });

    it("should be recursive", () => {
      spy.on(tree, "searchRecur");
      tree.searchRecur(7);
      expect(tree.searchRecur).to.have.been.called.above(1);
    });

    context("when the val is contained in the BST", () => {
      it("should return true", () => {
        expect(tree.searchRecur(10)).to.equal(true);
        expect(tree.searchRecur(7)).to.equal(true);
        expect(tree.searchRecur(16)).to.equal(true);
      });
    });

    context("when the val is not contained in the BST", () => {
      it("should return false", () => {
        expect(tree.searchRecur(-4)).to.equal(false);
        expect(tree.searchRecur(1.5)).to.equal(false);
        expect(tree.searchRecur(14)).to.equal(false);
      });
    });
  });

  describe("#searchIter(val)", () => {
    let tree;

    beforeEach(() => {
      tree = new BST();
      tree.insert(10);
      tree.insert(5);
      tree.insert(16);
      tree.insert(1);
      tree.insert(7);
      tree.insert(16);
    });

    it("should return false if the BST is empty", () => {
      let emptyTree = new BST();
      expect(emptyTree.searchIter(10)).to.equal(false);
    });

    it("should be iterative, not recursive", () => {
      spy.on(tree, "searchIter");
      tree.searchIter(7);
      expect(tree.searchIter).to.have.been.called.once;
    });

    context("when the val is contained in the BST", () => {
      it("should return true", () => {
        expect(tree.searchIter(10)).to.equal(true);
        expect(tree.searchIter(7)).to.equal(true);
        expect(tree.searchIter(16)).to.equal(true);
      });
    });

    context("when the val is not contained in the BST", () => {
      it("should return false", () => {
        expect(tree.searchIter(-4)).to.equal(false);
        expect(tree.searchIter(1.5)).to.equal(false);
        expect(tree.searchIter(14)).to.equal(false);
      });
    });
  });
});

describe("findMin()", () => {
  context("when the tree is empty", () => {
    it("should return null", () => {
      expect(findMin(null)).to.equal(null);
    });
  });

  context("when the root has no children", () => {
    it("should return the root", () => {
      let a = new TreeNode(10);
      expect(findMin(a)).to.equal(a);
    });
  });

  context("when the root only has right children", () => {
    it("should return the root", () => {
      let a = new TreeNode(10);
      let b = new TreeNode(15);
      let c = new TreeNode(12);

      a.right = b;
      b.left = c;

      expect(findMin(a)).to.equal(a);
    });
  });

  context("when the root has left children", () => {
    it("should return the leftmost child of the root", () => {
      let a = new TreeNode(10);
      let b = new TreeNode(9);
      let c = new TreeNode(15);
      let d = new TreeNode(1);
      let e = new TreeNode(7);
      let f = new TreeNode(5);
      let g = new TreeNode(12);

      a.left = b;
      a.right = c;
      b.left = d;
      d.right = e;
      e.left = f;
      c.left = g;

      expect(findMin(a)).to.equal(d);
    });
  });
});

describe("getHeight()", () => {
  it("should return -1 for an empty root", () => {
    expect(getHeight(null)).to.equal(-1);
  });

  it("should correctly return the height of a balanced tree", () => {
    let a = new TreeNode("a");
    expect(getHeight(a)).to.equal(0);

    let b = new TreeNode("b");
    let c = new TreeNode("c");
    let d = new TreeNode("d");
    let e = new TreeNode("e");
    let f = new TreeNode("f");
    let g = new TreeNode("g");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    expect(getHeight(a)).to.equal(2);
  });

  it("should correctly return the height of an unbalanced tree", () => {
    let a = new TreeNode("a");
    let c = new TreeNode("c");
    let f = new TreeNode("f");

    a.right = c;
    c.left = f;

    expect(getHeight(a)).to.equal(2);
  });
});

describe("Leet Code #108", () => {
  it(
    "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
  );
});

describe("Leet Code #110", () => {
  it("https://leetcode.com/problems/balanced-binary-tree/");
});

describe("Leet Code #450", () => {
  it("https://leetcode.com/problems/delete-node-in-a-bst/");
});
