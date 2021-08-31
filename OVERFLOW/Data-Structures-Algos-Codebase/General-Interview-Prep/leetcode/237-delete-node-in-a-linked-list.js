/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Write a function to delete a node (except the tail) in a singly linked list,
 * given only access to that node. Given linked list -- head = [4,5,1,9], which
 * looks like following:
 *
 *
 * Example 1:
 *
 * Input: head = [4,5,1,9], node = 5
 * Output: [4,1,9]
 * Explanation: You are given the second node with value 5, the linked list
 * should become 4 -> 1 -> 9 after calling your function.
 */
function ListNode(value) {
  this.val = value;
  this.next = null;
}

function deleteNodeInALinkedList(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

test("delete Node In A Linked List", () => {
  const ll1 = new ListNode(4);
  ll1.next = new ListNode(5);
  ll1.next.next = new ListNode(1);
  ll1.next.next.next = new ListNode(9);

  const ll2 = new ListNode(4);
  ll2.next = new ListNode(1);
  ll2.next.next = new ListNode(9);
  expect(deleteNodeInALinkedList(ll1)).toEqual(ll2);
});
