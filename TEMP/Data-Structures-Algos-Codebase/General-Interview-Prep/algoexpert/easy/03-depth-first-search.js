/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function TreeNode(val, children) {
  this.val = val;
  this.children = children || [];
}

const depthFirstSearch = (root) => {
  let found = false;
  const traverse = (root) => {
    if (root == null) {
      return;
    }
    console.log(root.val);
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        traverse(root.children[i]);
      }
    }
  };
  traverse(root);
  return found;
};

const t1 = new TreeNode("A");
t1.children = [
  new TreeNode("B", [
    new TreeNode("E"),
    new TreeNode("F", [new TreeNode("I"), new TreeNode("J")]),
  ]),
  new TreeNode("C"),
  new TreeNode("D", [
    new TreeNode("G", [new TreeNode("K")]),
    new TreeNode("H"),
  ]),
];
console.log(depthFirstSearch(t1));
