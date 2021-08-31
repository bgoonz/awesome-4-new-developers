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

const maximumDepthOfTree = (root) => {
  let max = 0;
  if (root == null) {
    return max;
  }
  const levelOrderTraversal = (root, level) => {
    if (root && root.children && root.children.length) {
      for (let i = 0; i < root.children.length; i++) {
        levelOrderTraversal(root.children[i], level + 1);
      }
    } else {
      if (level > max) {
        max = level;
      }
    }
  };
  levelOrderTraversal(root, 1);
  return max;
};

test("maximumDepthOfTree", () => {
  const t1 = new TreeNode(1);
  t1.children = [
    new TreeNode(3, [new TreeNode(5), new TreeNode(6)]),
    new TreeNode(2),
    new TreeNode(4),
  ];
  expect(maximumDepthOfTree(t1)).toEqual(3);
});
