// O(1)
function constant1(n) {
  return n * 2 + 1;
}

// O(1)
function constant2(n) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// O(log(n))
function logarithmic1(n) {
  if (n <= 1) return;
  logarithmic1(n / 2);
}

// O(log(n))
function logarithmic2(n) {
  let i = n;
  while (i > 1) {
    i /= 2;
  }
}

// O(n)
function linear1(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// O(n), where n is the length of the array
function linear2(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}

// O(n)
function linear3(n) {
  if (n === 1) return;
  linear3(n - 1);
}

// O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  loglinear(n / 2);
  loglinear(n / 2);
}

// O(n^2)
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {}
  }
}

// O(n^3)
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {}
    }
  }
}

// O(2^n)
function exponential2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

// O(3^n)
function exponential3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}

// O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(6); // => 720, requires 6 calls
factorial(6); // => 720, requires 6 calls
factorial(5); // => 120, requires 5 calls
factorial(7); // => 5040, requires 7 calls

let memo = {};

function factorial(n) {
  // if this function has calculated factorial(n) previously,
  // fetch the stored result in memo
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  // otherwise, it havs not calculated factorial(n) previously,
  // so calculate it now, but store the result in case it is
  // needed again in the future
  memo[n] = n * factorial(n - 1);
  return memo[n];
}

factorial(6); // => 720, requires 6 calls
factorial(6); // => 720, requires 1 call
factorial(5); // => 120, requires 1 call
factorial(7); // => 5040, requires 2 calls

memo; // => { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(6); // => 8

function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6); // => 8
fastFib(50); // => 12586269025

function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7)); // => 13

function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [secondLast, last] = mostRecentCalcs;
    mostRecentCalcs = [last, secondLast + last];
  }

  return mostRecentCalcs[1];
}

function search(array, term) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == term) {
      return i;
    }
  }
  return -1;
}

function binarySearch(arr, x, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return true;

  if (arr[mid] > x) {
    return binarySearch(arr, x, start, mid - 1);
  } else {
    return binarySearch(arr, x, mid + 1, end);
  }
}

function merge(leftArray, rightArray) {
  const sorted = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    const leftItem = leftArray[0];
    const rightItem = rightArray[0];

    if (leftItem > rightItem) {
      sorted.push(rightItem);
      rightArray.shift();
    } else {
      sorted.push(leftItem);
      leftArray.shift();
    }
  }

  while (leftArray.length !== 0) {
    const value = leftArray.shift();
    sorted.push(value);
  }

  while (rightArray.length !== 0) {
    const value = rightArray.shift();
    sorted.push(value);
  }

  return sorted;
}

function mergeSort(array) {
  const length = array.length;
  if (length == 1) {
    return array;
  }

  const middleIndex = Math.ceil(length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, length);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  return merge(leftArray, rightArray);
}

function bubbleSort(items) {
  let length = items.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (items[j] > items[j + 1]) {
        let tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp;
      }
    }
  }
}

let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];
merge(arr1, arr2); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]

let arr = [7, 3, 8, 9, 2];
partition(arr, 5); // => [[3, 2], [7,8,9]]

// nothing fancy
function partition(array, pivot) {
  let left = [];
  let right = [];

  array.forEach((el) => {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return [left, right];
}

// if you fancy
function partition(array, pivot) {
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);
  return [left, right];
}

binarySearch([5, 10, 12, 15, 20, 30, 70], 12); // => true
binarySearch([5, 10, 12, 15, 20, 30, 70], 24); // => false

function minumumValueIndex(arr) {
  let minIndex = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  return minIndex;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }
  return arr;
}

// commented
function selectionSort(arr) {
  // the `i` loop will track the index that points to the first element of the unsorted region:
  //    this means that the sorted region is everything left of index i
  //    and the unsorted region is everything to the right of index i
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // the `j` loop will iterate through the unsorted region and find the index of the smallest element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // after we find the minIndex in the unsorted region,
    // swap that minIndex with the first index of the unsorted region
    swap(arr, i, minIndex);
  }
  return arr;
}
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    for (let j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }
  return arr;
}

function insertionSort(arr) {
  // the `i` loop will iterate through every element of the array
  // we begin at i = 1, because we can consider the first element of the array as a
  // trivially sorted region of only one element
  // insertion sort allows us to insert new elements anywhere within the sorted region
  for (let i = 1; i < arr.length; i++) {
    // grab the first element of the unsorted region
    let currElement = arr[i];

    // the `j` loop will iterate left through the sorted region,
    // looking for a legal spot to insert currElement
    for (let j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      // keep moving left while currElement is less than the j-th element

      arr[j + 1] = arr[j];
      // the line above will move the j-th element to the right,
      // leaving a gap to potentially insert currElement
    }
    // insert currElement into that gap
    arr[j + 1] = currElement;
  }
  return arr;
}
function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}

// commented
function merge(array1, array2) {
  let merged = [];

  // keep running while either array still contains elements
  while (array1.length || array2.length) {
    // if array1 is nonempty, take its the first element as ele1
    // otherwise array1 is empty, so take Infinity as ele1
    let ele1 = array1.length ? array1[0] : Infinity;

    // do the same for array2, ele2
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    // remove the smaller of the eles from it's array
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    // and add that ele to the new array
    merged.push(next);
  }

  return merged;
}

merge([10, 13, 15, 25], []); // => [10, 13, 15, 25]

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  //------------------------------------------------------.
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);
  //------------------------------------------------------
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
}

//------------------------------------------------------
let pivot = array.shift();
let left = array.filter((el) => el < pivot);
let right = array.filter((el) => el >= pivot);
//------------------------------------------------------

// let pivot = array.shift();
let left = array.filter((el) => el < pivot);
let right = array.filter((el) => el >= pivot);

let leftSorted = quickSort(left);
let rightSorted = quickSort(right);
//------------------------------------------------------

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return leftSorted.concat([pivot]).concat(rightSorted);
}

let one = ["a", "b"];
let two = ["d", "e", "f"];
let newArr = [...one, "c", ...two];
newArr; // =>  [ 'a', 'b', 'c', 'd', 'e', 'f' ]

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}
function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }
  //------------------------------------------------------
}

function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);
  //------------------------------------------------------
}

function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
  }
  //------------------------------------------------------
}

function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}

function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}

// assuming our `MaxHeap` from the previous section

function heapSort(array) {
  // Step 1: build the heap
  let heap = new MaxHeap();
  array.forEach((num) => heap.insert(num));

  // Step 2: constructed the sorted array
  let sorted = [];
  while (heap.array.length > 1) {
    sorted.push(heap.deleteMax());
  }

  return sorted;
}

// swap the elements at indices i and j of array
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// sift-down the node at index i until max heap property is restored
// n represents the size of the heap
function heapify(array, n, i) {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > leftVal && array[i] > rightVal) return;

  let swapIdx;
  if (leftVal < rightVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

function heapSort(array) {
  // heapify the tree from the bottom up
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }
  // the entire array is now a heap
  //------------------------------------------------------
}

function heapSort(array) {
  // heapify the tree from the bottom up
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }
  // the entire array is now a heap

  // until the heap is empty, continue to "delete max"
  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    // swap the root of the heap with the last element of the heap,
    // this effecively shrinks the heap by one and grows the sorted array by one
    swap(array, endOfHeap, 0);

    // sift down the new root, but not past the end of the heap
    heapify(array, endOfHeap, 0);
  }
  return array;
}

function heapSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(array, endOfHeap, 0);
    heapify(array, endOfHeap, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > leftVal && array[i] > rightVal) return;

  let swapIdx;
  if (leftVal < rightVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function inOrderPrint(root) {
  if (!root) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

let tree2 = new BST();
tree2.insert(1);
tree2.insert(5);
tree2.insert(7);
tree2.insert(10);
tree2.insert(16);
tree2.insert(16);

class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c = new GraphNode('c');
// let d = new GraphNode('d');
// let e = new GraphNode('e');
// let f = new GraphNode('f');
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/ [true, true, true, false, true, false],
  /*B*/ [false, true, false, false, false, false],
  /*C*/ [false, true, true, true, false, false],
  /*D*/ [false, false, false, true, false, false],
  /*E*/ [true, false, false, false, true, false],
  /*F*/ [false, false, false, false, true, true],
];

let graph1 = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
//
// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }

// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c = new GraphNode('c');
// let d = new GraphNode('d');
// let e = new GraphNode('e');
// let f = new GraphNode('f');
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// broken
function depthFirstRecur(node) {
  console.log(node.val);

  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor);
  });
}

depthFirstRecur(f);

// using GraphNode representation

function depthFirstRecur(node, visited = new Set()) {
  // if this node has already been visited, then return early
  if (visited.has(node.val)) return;

  // otherwise it hasn't yet been visited,
  // so print it's val and mark it as visited.
  console.log(node.val);
  visited.add(node.val);

  // then explore each of its neighbors
  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}

depthFirstRecur(f);

function depthFirstIter(node) {
  let visited = new Set();
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    // if this node has already been visited, then skip this node
    if (visited.has(node.val)) continue;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then add its neighbors to the stack to be explored
    stack.push(...node.neighbors);
  }
}

depthFirstIter(f);

let graph2 = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};

// using Adjacency List representation

function depthFirstRecur(node, graph, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach((neighbor) => {
    depthFirstRecur(neighbor, graph, visited);
  });
}

depthFirstRecur("f", graph);

function depthFirst(graph) {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
}

function _depthFirstRecur(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach((neighbor) => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}

depthFirst(graph);

let graph = {
  h: ["i", "j"],
  i: [],
  j: ["k"],
  k: [],
  l: ["m"],
  m: [],
};

depthFirst(graph);
// prints h, i, j, k, l, m

Number(42).toString(16); // 2a
Number(42).toString(2); // 101010

parseInt("101010", 2); // 42
parseInt("2A", 16); // 42
