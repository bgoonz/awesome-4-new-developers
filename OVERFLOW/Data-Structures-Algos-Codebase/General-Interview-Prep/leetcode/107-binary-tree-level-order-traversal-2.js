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

const binaryTreeLevelOrderTraversal2 = (root) => {
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [root];
  while (queue.length != 0) {
    let tempqueue = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const element = queue.shift();
      if (element) {
        tempqueue.push(element.val);
      }
      if (element.left) {
        queue.push(element.left);
      }
      if (element.right) {
        queue.push(element.right);
      }
    }
    result.push(tempqueue);
  }
  return result.reverse();
};

test("binaryTreeLevelOrderTraversal2", () => {
  const t1 = new TreeNode(3);
  t1.left = new TreeNode(9);
  t1.right = new TreeNode(20);
  t1.right.left = new TreeNode(15);
  t1.right.right = new TreeNode(7);
  expect(binaryTreeLevelOrderTraversal2(t1)).toEqual([[15, 7], [9, 20], [3]]);
});
