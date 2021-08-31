// PROBLEM 1
function joesFriendsBFS(adjacencyList, startName, endName) {
  // We're doing BFS so we know we need a QUEUE
  let queue = [startName];
  // Track our visited friends.
  let visited = new Set();
  // While there are friends left to visit
  while (queue.length) {
    // We remove a friend from the queue
    let name = queue.shift();
    // Check if we've already visited them. if we have, we move on
    if (visited.has(name)) continue;
    // If we haven't, we add them to the visited Set
    visited.add(name);
    // Have we reached Jesse yet?
    if (name === endName) {
      // if so, we know we're done and we can return the number of friends we've
      // visited, which is the length of the visited set (minus Joe)
      return Array.from(visited).length - 1;
    }
    // Otherwise let's add all the friends at our current friend, and run this again
    queue.push(...adjacencyList[name]);
  }
  // if our whole loop happened and we didn't get to Jesse, it means he's not a
  // part of the graph or there's no path between Joe and Jesse
  return "Jesse's not here :(";
}
// PROBLEM 2
function joesFriendsDFS(adjacencyList, startName, endName) {
  // we're doing DFS so we know we need a STACK
  let stack = [startName];
  // Track visited
  let visited = new Set();
  // While there are friends to search through, we're going to contine
  while (stack.length) {
    // We remove the current friend we're comparing to Jesse
    let name = stack.pop();
    // Check if we've already visited them. if we have, we move on.
    if (visited.has(name)) continue;
    // if we haven't, add them to the visited list
    visited.add(name);
    // check if we have reached Jesse
    if (name === endName) {
      // If we have, we can return the list of friends we visited along the way
      const friendsList = Array.from(visited);
      // but we must first remove Joe from the list. we know he's first because
      // he was the first person popped off the stack.
      friendsList.shift();
      return friendsList;
    }
    // if we didn't see Jesse, we add the friends to the top of the stack and keep searching
    stack.push(...adjacencyList[name]);
  }
  // if our whole loop happened and we didn't get to Jesse, it means he's not a
  // part of the graph or there's no path between Joe and Jesse
  return "Jesse's not here :(";
}
// PROBLEM 3 SOLUTION
const hasPathSum = function (root, sum) {
  // If there's no root, we know that it's impossible to reach the sum
  if (!root) return false;
  // we must keep track of our current value, which is the difference between our final sum and the number we're currently on (e.g 22 - 5)
  let currSum = sum - root.val;
  // our base case. if we reach the bottom of the tree, and the difference between
  // our final value and our current value is zero, we know we've found the sum along this path
  // so we can return true.
  if (!root.left && !root.right) {
    if (currSum == 0) return true;
  }
  // Now that we've established our base case and recursive step, we call the recursion
  let leftSum = hasPathSum(root.left, currSum);
  let rightSum = hasPathSum(root.right, currSum);
  // we want these functions to return a number, and we want to check both directions
  return leftSum || rightSum;
};
const pathSum = (root, sum, curSum = root.val) => {
  if (!root) return false;
  if (sum === curSum) return true;
  const leftRecur = pathSum(root.left, sum, curSum + root.val);
  const rightRecur = pathSum(root.right, sum, curSum + root.val);
  console.log(leftRecur || rightRecur);
  return leftRecur || rightRecur;
};
// PROBLEM 4
// DFS Recursive
function maxDepth(root) {
  // Our base case. we've reached the bottom of the tree.
  // Also stops us from running this on an empty tree
  if (!root) return -1;
  // we know this function returns a number, so we just add one to that number
  // to count the 'depth' of our tree.
  // we do this to the left and right of each tree node because we want to ensure
  // we are finding the maximum depth
  const leftHeight = 1 + maxDepth(root.left);
  const rightHeight = 1 + maxDepth(root.right);
  // our function returns the larger number: whichever one has the larger depth.
  return Math.max(leftHeight, rightHeight);
}
// TESTS FOR PROBLEMS 1 AND 2
const adjacencyList = {
  derek: ["selam", "dean"],
  joe: ["selam"],
  selam: ["derek", "joe", "dean", "evan"],
  dean: ["derek", "evan", "selam"],
  sam: ["jen"],
  evan: ["selam", "jesse", "dean"],
  jen: ["sam", "javier"],
  javier: ["jen"],
  chris: [],
  jesse: ["evan"],
};
console.log(joesFriendsBFS(adjacencyList, "joe", "jesse")); // 5
console.log(joesFriendsDFS(adjacencyList, "joe", "jesse")); // [ 'selam', 'evan', 'dean', 'derek', 'jesse' ]
// TEST PROBLEM 3
class TreeNode {
  constructor(val) {
    (this.val = val), (this.left = null), (this.right = null);
  }
}
const five = new TreeNode(5);
const four = new TreeNode(4);
const eight = new TreeNode(8);
const eleven = new TreeNode(11);
const thirteen = new TreeNode(13);
const fourSecond = new TreeNode(4);
const seven = new TreeNode(7);
const two = new TreeNode(2);
const one = new TreeNode(1);
five.left = four;
five.right = eight;
four.left = eleven;
eleven.left = seven;
eleven.right = two;
eight.left = thirteen;
eight.right = fourSecond;
fourSecond.right = one;
console.log(pathSum(five, 22)); // true
// TESTS FOR PROBLEM 4
const three = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const sevenTwo = new TreeNode(7);
three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = sevenTwo;
console.log(maxDepth(three)); // 2
