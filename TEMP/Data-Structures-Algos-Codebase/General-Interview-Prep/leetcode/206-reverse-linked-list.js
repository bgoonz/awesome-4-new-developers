/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Reverse a singly linked list.
 *
 * Example:
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 *
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseLinkedList(val) {
  let currentHead = val;
  let previousHead = null;
  while (currentHead) {
    let swap = currentHead.next;
    currentHead.next = previousHead;
    previousHead = currentHead;
    currentHead = swap;
  }
  return previousHead;
}

test("reverse Linked List", () => {
  const ll1 = new ListNode(1);
  ll1.next = new ListNode(2);
  ll1.next.next = new ListNode(3);
  ll1.next.next.next = new ListNode(4);
  ll1.next.next.next.next = new ListNode(5);

  const ll2 = new ListNode(5);
  ll2.next = new ListNode(4);
  ll2.next.next = new ListNode(3);
  ll2.next.next.next = new ListNode(2);
  ll2.next.next.next.next = new ListNode(1);
  expect(reverseLinkedList(ll1)).toEqual(ll2);
});
