/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * A linked list is given such that each node contains an additional random
 * pointer which could point to any node in the list or null.
 *
 * Return a deep copy of the list.
 *
 * The Linked List is represented in the input/output as a list of n nodes.
 * Each node is represented as a pair of [val, random_index] where:
 *
 * val: an integer representing Node.val
 * random_index: the index of the node (range from 0 to n-1) where random
 * pointer points to, or null if it does not point to any node.
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function copyListWithRandomPointer(head) {
  const map = new Map();
  const copied = new Node();
  let current = head;
  let copiedCurrent = copied;

  while (current) {
    const newNode = new Node(current.val);
    map.set(current, newNode);
    copiedCurrent.next = newNode;
    copiedCurrent = copiedCurrent.next;
    current = current.next;
  }

  current = head;
  copiedCurrent = copied.next;

  while (current) {
    if (current.random) {
      copiedCurrent.random = map.get(current.random);
    }
    current = current.next;
    copiedCurrent = copiedCurrent.next;
  }

  return copied.next;
}

const ll1 = new Node(1);
ll1.random = ll1;
ll1.next = new Node(2);
ll1.next.random = ll1;

const ll2 = new Node(1);
ll2.random = ll2;
ll2.next = new Node(2);
ll2.next.random = ll2;

test("copy List With Random Pointer", () => {
  expect(copyListWithRandomPointer(ll1)).toEqual(ll2);
});
