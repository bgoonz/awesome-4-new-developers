// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the
// intersection of two linked lists begins, or null if there is no such
// intersection.
//
// ----------
// Example 1:
// ----------
//
// Given the following two linked lists, list1 and list2,
// linkedListIntersection(list1,list2) should return D
// as the node of intersection.
//
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ----------
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2,
// linkedListIntersection(list1, list2) should return null
// as there is no point of intersection.
//
//    A → B → C → D
//
//    X → Y → Z
//
// -----------
// Let's code!
// -----------
function linkedListIntersection(list1, list2) {
  let node1 = list1.head;
  let idx1 = 0;
  const list1Length = listLength(list1);
  let node2 = list2.head;
  let idx2 = 0;
  const list2Length = listLength(list2);

  while (idx1 < list1Length) {
    if (list1Length - idx1 > list2Length - idx2) {
      idx1++;
      node1 = node1.next;
    } else if (list1Length - idx1 < list2Length - idx2) {
      idx2++;
      node2 = node2.next;
    } else {
      if (node1 === node2) return node1;
      idx1++;
      node1 = node1.next;
      idx2++;
      node2 = node2.next;
    }
  }

  return null;
}

// The way the tests are written, {linkedList}.length does not return the correct
// This function finds the accurate current length after the test merges two lists
function listLength(list) {
  let length = 0;
  let el = list.head;
  while (el) {
    length++;
    el = el.next;
  }
  return length;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function (list) {
  var result = [];
  while (list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
};

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
