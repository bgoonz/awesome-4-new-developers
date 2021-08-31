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

const constructBinaryTreeFromPreorderAndInorderTraversal = (
  preorder,
  inorder
) => {
  const divideAndConquer = (start, end) => {
    if (start > end) {
      return null;
    }
    const mid = inorder.indexOf(preorder.shift());
    const node = new TreeNode(inorder[mid]);
    node.left = divideAndConquer(start, mid - 1);
    node.right = divideAndConquer(mid + 1, end);
    return node;
  };
  const tree = divideAndConquer(0, inorder.length - 1);
  return tree;
};

test("constructBinaryTreeFromPreorderAndInorderTraversal", () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);
  expect(
    constructBinaryTreeFromPreorderAndInorderTraversal(
      [3, 9, 20, 15, 7],
      [9, 3, 15, 20, 7]
    )
  ).toEqual(t1);
});
