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

const subtreeOfAnotherTree = (s, t) => {
  if (!s) {
    return false;
  }
  if (!t) {
    return true;
  }
  let result = false;
  const traverse = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (!p || !q || p.val != q.val) {
      return false;
    }
    return traverse(p.left, q.left) && traverse(p.right, q.right);
  };
  result =
    traverse(s, t) ||
    subtreeOfAnotherTree(s.left, t) ||
    subtreeOfAnotherTree(s.right, t);
  return result;
};

test("subtreeOfAnotherTree", () => {
  const t1 = new TreeNode(3);
  t1.right = new TreeNode(5);
  t1.left = new TreeNode(4);
  t1.left.left = new TreeNode(1);
  t1.left.right = new TreeNode(2);

  const t2 = new TreeNode(4);
  t2.right = new TreeNode(2);
  t2.left = new TreeNode(1);
  expect(subtreeOfAnotherTree(t1, t2)).toEqual(true);
});
