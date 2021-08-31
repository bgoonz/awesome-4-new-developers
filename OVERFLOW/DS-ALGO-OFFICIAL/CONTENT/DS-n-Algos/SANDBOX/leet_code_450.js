// View the full problem and run the test cases at:
//  https://leetcode.com/problems/delete-node-in-a-bst/

function deleteNode(root, key) {
  if (!root) return null; // return null if key isn't in the tree

  if (key < root.val) {
    root.left = deleteNode(root.left, key); // recurse on left subtree
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key); // recurse on right subtree
  } else {
    // you've found the key!
    if (!root.left) {
      return root.right; // the right subtree will be shifted up a level if there's no left subtree
    } else if (!root.right) {
      return root.left; // the left subtree will be shifted up a level if there's no right subtree
    } else {
      // if the key node has a right and left node, we do the following:
      // 1) find the min-value node on the right subtree
      // 2) set the left value on the right min node to the key's left subtree
      // 3) return the key's updated right subtree (which will be shifted up a level)
      let rightMin = root.right;
      while (rightMin.left) rightMin = rightMin.left; // add findMin function
      rightMin.left = root.left;
      return root.right;
    }
  }
  return root;
}

//----------------------------------------OR-------------------------------------------------------------
const deleteNode = function (root, key) {
  if (root == null) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left == null) {
      return root.right;
    }
    if (root.right == null) {
      return root.left;
    }
    let rightSmallest = root.right;
    while (rightSmallest.left != null) rightSmallest = rightSmallest.left;
    rightSmallest.left = root.left;
    return root.right;
  }
  return root;
};
