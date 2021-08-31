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
  // TODO: Implement the linkedListIntersection function!
  const list1Length = getLength(list1.head);
  const list2Length = getLength(list2.head);
  let biggerList;
  let smallerList;

  if (list1Length > list2Length) {
    biggerList = list1.head;
    smallerList = list2.head;
  } else if (list2Length > list1Length) {
    biggerList = list2.head;
    smallerList = list1.head;
  } else {
    biggerList = list1.head;
    smallerList = list2.head;
  }

  let listLengthDiff = Math.abs(list1Length - list2Length);

  while (listLengthDiff != 0) {
    biggerList = biggerList.next;
    listLengthDiff--;
  }

  while (biggerList) {
    if (biggerList === smallerList) {
      return biggerList;
    } else {
      biggerList = biggerList.next;
      smallerList = smallerList.next;
    }
  }
  return null;
}

function getLength(list) {
  let current = list;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
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
