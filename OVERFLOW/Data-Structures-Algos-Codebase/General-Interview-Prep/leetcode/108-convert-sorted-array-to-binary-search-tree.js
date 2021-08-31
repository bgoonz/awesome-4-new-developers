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

const convertSortedArrayToBinarySearchTree = (treeArray) => {
  const buildTree = (treeArray, left, right) => {
    if (left > right) {
      return null;
    }
    const mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(treeArray[mid]);
    root.left = buildTree(treeArray, left, mid - 1);
    root.right = buildTree(treeArray, mid + 1, right);
    return root;
  };
  const tree = buildTree(treeArray, 0, treeArray.length - 1);
  return tree;
};

console.log(convertSortedArrayToBinarySearchTree([-10, -3, 0, 5, 9]));
