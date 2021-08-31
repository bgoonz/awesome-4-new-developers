/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const increasingOrderSearchTree = (t1) => {
  let newTree = new TreeNode(0);
  let current = newTree;
  const inOrder = (t1) => {
    if (t1 == null) {
      return;
    }
    inOrder(t1.left);
    if (current) {
      current.right = new TreeNode(t1.val);
      current = current.right;
    }
    inOrder(t1.right);
  };
  inOrder(t1);
  return newTree.right;
};

test("increasingOrderSearchTree", () => {
  const t1 = new TreeNode(5);
  t1.right = new TreeNode(6);
  t1.left = new TreeNode(3);
  t1.left.left = new TreeNode(2);

  const t2 = new TreeNode(2);
  t2.right = new TreeNode(3);
  t2.right.right = new TreeNode(5);
  t2.right.right.right = new TreeNode(6);

  expect(increasingOrderSearchTree(t1)).toEqual(t2);
});
