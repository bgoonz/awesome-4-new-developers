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

const averageOfLevelsInBinaryTree = (root) => {
  let result = [];
  let queue = [root];
  while (queue.length !== 0) {
    let tempQueue = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      tempQueue.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(tempQueue.reduce((a, t) => (t += a), 0) / tempQueue.length);
  }
  return result;
};

test("averageOfLevelsInBinaryTree", () => {
  const t1 = new TreeNode(3);
  t1.right = new TreeNode(20);
  t1.left = new TreeNode(9);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);
  expect(averageOfLevelsInBinaryTree(t1)).toEqual([3, 14.5, 11]);
});
