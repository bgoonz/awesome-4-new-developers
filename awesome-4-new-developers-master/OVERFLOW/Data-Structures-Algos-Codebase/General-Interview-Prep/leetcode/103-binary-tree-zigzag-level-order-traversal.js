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

const binaryTreeZigzagLevelOrderTraversal = (root) => {
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [root];
  let even = true;
  while (queue.length !== 0) {
    let size = queue.length;
    let tempQueue = [];
    for (let i = 0; i < size; i++) {
      const element = queue.shift();
      if (element) {
        if (even) {
          tempQueue.push(element.val);
        } else {
          tempQueue.unshift(element.val);
        }
      }
      if (element && element.left) {
        queue.push(element.left);
      }
      if (element && element.right) {
        queue.push(element.right);
      }
    }
    even = !even;
    result.push(tempQueue);
  }
  return result;
};

test("binaryTreeZigzagLevelOrderTraversal", () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);
  expect(binaryTreeZigzagLevelOrderTraversal(t1)).toEqual([
    [3],
    [20, 9],
    [15, 7],
  ]);
});
