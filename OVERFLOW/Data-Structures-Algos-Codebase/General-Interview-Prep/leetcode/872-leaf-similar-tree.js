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

const leafSimilarTree = (t1, t2) => {
  const traverse = (root, result) => {
    if (root && !root.left && !root.right) {
      result.push(root.val);
    }
    root.left && traverse(root.left, result);
    root.right && traverse(root.right, result);
    return result;
  };
  let t1LeafNodes = traverse(t1, []);
  let t2LeafNodes = traverse(t2, []);
  return t1LeafNodes.join(" ") == t2LeafNodes.join(" ");
};

test("leafSimilarTree", () => {
  const t1 = new TreeNode(3);
  t1.right = new TreeNode(1);
  t1.left = new TreeNode(5);
  t1.left.left = new TreeNode(6);
  t1.left.right = new TreeNode(2);
  t1.left.right.left = new TreeNode(7);
  t1.left.right.right = new TreeNode(4);
  t1.right.left = new TreeNode(9);
  t1.right.right = new TreeNode(8);

  const t2 = new TreeNode(3);
  t2.right = new TreeNode(1);
  t2.left = new TreeNode(5);
  t2.left.left = new TreeNode(6);
  t2.left.right = new TreeNode(7);
  t2.right.left = new TreeNode(4);
  t2.right.right = new TreeNode(2);
  t2.right.right.left = new TreeNode(9);
  t2.right.right.right = new TreeNode(8);
  expect(leafSimilarTree(t1, t2)).toEqual(true);
});
