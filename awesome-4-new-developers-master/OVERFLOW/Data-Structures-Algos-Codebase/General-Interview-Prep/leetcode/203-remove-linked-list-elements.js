/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example:
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeLinkedListElements(head, value) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next) {
    if (current.next.val === value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  console.log(dummy.next);
  return dummy.next;
}

test("remove Linked List Elements", () => {
  const ll1 = new ListNode(1);
  ll1.next = new ListNode(2);
  ll1.next.next = new ListNode(6);
  ll1.next.next.next = new ListNode(3);
  ll1.next.next.next.next = new ListNode(4);
  ll1.next.next.next.next.next = new ListNode(5);
  ll1.next.next.next.next.next.next = new ListNode(6);

  const ll2 = new ListNode(1);
  ll2.next = new ListNode(2);
  ll2.next.next = new ListNode(3);
  ll2.next.next.next = new ListNode(4);
  ll2.next.next.next.next = new ListNode(5);
  expect(removeLinkedListElements(ll1, 6)).toEqual(ll2);
});
