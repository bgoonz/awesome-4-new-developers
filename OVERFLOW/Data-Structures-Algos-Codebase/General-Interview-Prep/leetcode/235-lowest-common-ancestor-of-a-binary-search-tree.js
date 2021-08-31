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

const lowestCommonAncestorOfABinarySearchTree = (root, p, q) => {
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestorOfABinarySearchTree(root.left, p, q);
  else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestorOfABinarySearchTree(root.right, p, q);
  else return root;
};

test("lowestCommonAncestorOfABinarySearchTree", () => {
  const t1 = new TreeNode(6);
  t1.left = new TreeNode(2);
  t1.right = new TreeNode(8);
  t1.left.left = new TreeNode(0);
  t1.left.right = new TreeNode(4);
  t1.left.right.left = new TreeNode(3);
  t1.left.right.right = new TreeNode(5);
  t1.right.left = new TreeNode(7);
  t1.right.right = new TreeNode(9);
  console.log(
    lowestCommonAncestorOfABinarySearchTree(
      t1,
      new TreeNode(2),
      new TreeNode(8)
    )
  );
});
