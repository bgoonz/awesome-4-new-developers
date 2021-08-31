class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");
let g = new TreeNode("g");
let h = new TreeNode("h");
let i = new TreeNode("i");
let j = new TreeNode("j");
let k = new TreeNode("k");
let l = new TreeNode("l");
let m = new TreeNode("m");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
h.left = i;
h.right = k;
i.right = j;
k.left = l;
l.right = m;
console.log(a);
console.log(h);
console.log("a.val: ", a.val);
console.log("b.val: ", b.val);
console.log("a.left: ", a.left);
console.log("a.right: ", a.right);
console.log("h.left: ", h.left);

function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(preorder[0]);
  let leftInorder = inorder.slice(0, rootIdx);
  let rightInorder = inorder.slice(rootIdx + 1);
  let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  let rightPreorder = preorder.filter((val) => rightInorder.includes(val));
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
}
const preO = [3, 9, 20, 15, 7];
const inO = [9, 3, 15, 20, 7];
console.log("builcTree( (preO,inO): ", `${buildTree(preO, inO)}`);

/*
node 105 - Construct\ Binary\ Tree\ from\ Preorder\ and\ Inorder\ Traversal.js
TreeNode {
  val: 'a',
  left: TreeNode {
    val: 'b',
    left: TreeNode {
      val: 'd',
      left: null,
      right: null
    },
    right: TreeNode {
      val: 'e',
      left: null,
      right: null
    }
  },
  right: TreeNode {
    val: 'c',
    left: TreeNode {
      val: 'f',
      left: null,
      right: null
    },
    right: TreeNode {
      val: 'g',
      left: null,
      right: null
    }
  }
}
TreeNode {
  val: 'h',
  left: TreeNode {
    val: 'i',
    left: null,
    right: TreeNode {
      val: 'j',
      left: null,
      right: null
    }
  },
  right: TreeNode {
    val: 'k',
    left: TreeNode {
      val: 'l',
      left: null,
      right: [ TreeNode ]
    },
    right: null
  }
}
a.val: a
b.val: b
a.left: TreeNode {
  val: 'b',
  left: TreeNode {
    val: 'd',
    left: null,
    right: null
  },
  right: TreeNode {
    val: 'e',
    left: null,
    right: null
  }
}
a.right: TreeNode {
  val: 'c',
  left: TreeNode {
    val: 'f',
    left: null,
    right: null
  },
  right: TreeNode {
    val: 'g',
    left: null,
    right: null
  }
}
h.left: TreeNode {
  val: 'i',
  left: null,
  right: TreeNode {
    val: 'j',
    left: null,
    right: null
  }
}
builcTree( ( preO, inO ): [ object Object ]

    \ ___________________________________________________ bryan_dir: 105 - construct - b - tree_exitstatus: 0 === =>


*/
