// Iterators for BFS and DFS
// recursive and iterative

"use strict";

{
  {
    // Iterative BFS
    class IterativeBFS {
      constructor(tree) {
        this.tree = tree;
      }
      get [Symbol.iterator]() {
        const tree = this.tree;
        return iterativeBFS;
        function* iterativeBFS() {
          let node = tree.root;
          const queue = [node];
          while (queue.length) {
            node = queue.pop();
            const children = Array.from(node.children);
            children.reverse();
            queue.unshift(...children);
            yield node;
          }
        }
      }
    }

    Object.assign(self, { IterativeBFS });

    test_ibfs();

    function test_ibfs() {
      console.log("Testing iterative BFS");
      const tw = new IterativeBFS(t);
      for (const n of tw) {
        console.log(n);
      }
      const ibfs_order = [...tw];
      console.log(ibfs_order);
    }
  }

  {
    // Recursive BFS
    class RecursiveBFS {
      constructor(tree) {
        this.tree = tree;
      }
      get [Symbol.iterator]() {
        const tree = this.tree;
        return recursiveBFS;
        function* recursiveBFS() {
          const Q = [tree.root];
          yield* recursiveBFS_func(Q);
        }
        function* recursiveBFS_func(stack) {
          if (stack.length == 0) {
            return;
          }
          const node = stack.pop();
          const children = Array.from(node.children);
          children.reverse();
          stack.unshift(...children);
          yield node;
          yield* recursiveBFS_func(stack);
        }
      }
    }

    Object.assign(self, { RecursiveBFS });

    test_rbfs();

    function test_rbfs() {
      console.log("Testing recursive BFS");
      const tw = new RecursiveBFS(t);
      for (const n of tw) {
        console.log(n);
      }
      const rbfs_order = [...tw];
      console.log(rbfs_order);
    }
  }

  {
    // Note: for an inorder traversal see the file BinarySearchTree.js :)
    // Iterative PreOrderDFS
    class IterativePreOrderDFS {
      constructor(tree) {
        this.tree = tree;
      }
      get [Symbol.iterator]() {
        const tree = this.tree;
        return iterativePreOrderDFS;
        function* iterativePreOrderDFS() {
          let node = tree.root;
          const stack = [node];
          while (stack.length) {
            node = stack.pop();
            const children = Array.from(node.children);
            children.reverse();
            stack.push(...children);
            yield node;
          }
        }
      }
    }

    Object.assign(self, { IterativePreOrderDFS });

    test_idfs();

    function test_idfs() {
      console.log("Testing iterative PreOrderDFS");
      const tw = new IterativePreOrderDFS(t);
      for (const n of tw) {
        console.log(n);
      }
      const idfs_order = [...tw];
      console.log(idfs_order);
    }
  }

  {
    // Recursive PreOrderDFS
    class RecursivePreOrderDFS {
      constructor(tree) {
        this.tree = tree;
      }
      get [Symbol.iterator]() {
        const tree = this.tree;
        return recursivePreOrderDFS;
        function* recursivePreOrderDFS() {
          const node = tree.root;
          yield* recursivePreOrderDFS_func(node);
        }
        function* recursivePreOrderDFS_func(node) {
          const children = Array.from(node.children);
          yield node;
          for (const child of children) {
            yield* recursivePreOrderDFS_func(child);
          }
        }
      }
    }

    Object.assign(self, { RecursivePreOrderDFS });

    test_rdfs();

    function test_rdfs() {
      console.log("Testing recursive PreOrderDFS");
      const tw = new RecursivePreOrderDFS(t);
      for (const n of tw) {
        console.log(n);
      }
      const rdfs_order = [...tw];
      console.log(rdfs_order);
    }
  }

  // Notes
  // Two stacks
  //
  // Interestingly, the simplest way to do this uses two stacks
  // ( unless you want to add flags to the children and check if they've been visited )
  // The idea is basically we convert the recursive post order DFS to a stack algorithm
  // and use another stack to record the traversal
  // then yield that other stack to give the ordering
  //
  // Reveresals
  //
  // It is basically doing a normal iterative DFS and using another stack to record the order
  // but we do not reverse the order of the children. So this means a post order is basically
  // a pre order without reversing the children when we add them to the stack, then we reverse
  // the entire order of the stack, to get the post order.
  {
    // Iterative PostOrderDFS
    class IterativePostOrderDFS {
      constructor(tree) {
        this.tree = tree;
      }
      get [Symbol.iterator]() {
        const tree = this.tree;
        return iterativePostOrderDFS;
        function* iterativePostOrderDFS() {
          const ostack = [];
          let node = tree.root;
          const tstack = [node];
          while (tstack.length) {
            node = tstack.pop();
            ostack.push(node);
            const children = Array.from(node.children);
            tstack.push(...children);
          }
          while (ostack.length) {
            yield ostack.pop();
          }
        }
      }
    }

    Object.assign(self, { IterativePostOrderDFS });

    test_idfs();

    function test_idfs() {
      console.log("Testing iterative PostOrderDFS");
      const tw = new IterativePostOrderDFS(t);
      for (const n of tw) {
        console.log(n);
      }
      const idfs_order = [...tw];
      console.log(idfs_order);
    }
  }

  {
    // Recursive PostOrderDFS
    class RecursivePostOrderDFS {
      constructor(tree) {
        this.tree = tree;
      }
      get [Symbol.iterator]() {
        const tree = this.tree;
        return recursivePostOrderDFS;
        function* recursivePostOrderDFS() {
          const node = tree.root;
          yield* recursivePostOrderDFS_func(node);
        }
        function* recursivePostOrderDFS_func(node) {
          const children = Array.from(node.children);
          for (const child of children) {
            yield* recursivePostOrderDFS_func(child);
          }
          yield node;
        }
      }
    }

    Object.assign(self, { RecursivePostOrderDFS });

    test_rdfs();

    function test_rdfs() {
      console.log("Testing recursive PostOrderDFS");
      const tw = new RecursivePostOrderDFS(t);
      for (const n of tw) {
        console.log(n);
      }
      const rdfs_order = [...tw];
      console.log(rdfs_order);
    }
  }
}
