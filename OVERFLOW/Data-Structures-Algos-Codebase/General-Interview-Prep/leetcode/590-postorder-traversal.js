/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function TreeNode(val, children) {
  this.val = val;
  this.children = children;
}

const postorderTraversal = (root) => {
  let result = [];
  if (!root) {
    return result;
  }
  const innerPostorderTraversal = (root) => {
    if (root == null) {
      return;
    }
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        innerPostorderTraversal(root.children[i]);
      }
    }
    result.push(root.val);
  };
  innerPostorderTraversal(root);
  return result;
};

test("postorderTraversal", () => {
  const t1 = new TreeNode(1);
  t1.children = [
    new TreeNode(3, [new TreeNode(5), new TreeNode(6)]),
    new TreeNode(2),
    new TreeNode(4),
  ];
  expect(postorderTraversal(t1)).toEqual([5, 6, 3, 2, 4, 1]);
});
