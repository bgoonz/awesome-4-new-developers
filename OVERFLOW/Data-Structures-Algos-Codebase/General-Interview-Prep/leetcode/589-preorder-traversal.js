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

const preorderTraversal = (root) => {
  let result = [];
  if (!root) {
    return result;
  }
  const innerPreorderTraversal = (root) => {
    if (root == null) {
      return;
    }
    result.push(root.val);
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        innerPreorderTraversal(root.children[i]);
      }
    }
  };
  innerPreorderTraversal(root);
  return result;
};

test("preorderTraversal", () => {
  const t1 = new TreeNode(1);
  t1.children = [
    new TreeNode(3, [new TreeNode(5), new TreeNode(6)]),
    new TreeNode(2),
    new TreeNode(4),
  ];
  expect(preorderTraversal(t1)).toEqual([1, 3, 5, 6, 2, 4]);
});
