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

const binaryTreeLevelOrderTraversal = (root) => {
  if (!root) {
    return [];
  }
  let queue = [root];
  let result = [];
  while (queue.length !== 0) {
    let tempQueue = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      if (currentNode) {
        tempQueue.push(currentNode.val);
      }
      if (currentNode && currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode && currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(tempQueue);
  }
  return result;
};

test("binaryTreeLevelOrderTraversal", () => {
  const t1 = new TreeNode(1);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);
  expect(binaryTreeLevelOrderTraversal(t1)).toEqual([[1], [9, 20], [15, 7]]);
});
