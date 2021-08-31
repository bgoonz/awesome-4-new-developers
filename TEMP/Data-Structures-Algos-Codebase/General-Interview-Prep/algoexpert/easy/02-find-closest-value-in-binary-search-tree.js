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

const findClosestValueInBinarySearchTree = (root, target) => {
  let closestDistance = Infinity;
  const traverse = (root) => {
    if (root == null) {
      return;
    }
    if (Math.abs(target - root.val) < Math.abs(target - closestDistance)) {
      closestDistance = root.val;
    }
    if (target > root.val) {
      traverse(root.right);
    } else {
      traverse(root.left);
    }
  };
  traverse(root);
  return closestDistance;
};

const t1 = new TreeNode(10);
t1.left = new TreeNode(5);
t1.left.left = new TreeNode(2);
t1.left.left.left = new TreeNode(1);
t1.left.right = new TreeNode(5);
t1.right = new TreeNode(15);
t1.right.left = new TreeNode(13);
t1.right.left.right = new TreeNode(14);
t1.right.right = new TreeNode(22);
console.log(findClosestValueInBinarySearchTree(t1, 12));
