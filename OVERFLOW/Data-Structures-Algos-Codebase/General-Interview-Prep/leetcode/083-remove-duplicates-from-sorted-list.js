/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Example 1:
 *
 * Input: 1->1->2
 * Output: 1->2
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeDuplicatesFromSortedList(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

test("remove Duplicates From Sorted List", () => {
  const ll1 = new ListNode(1);
  ll1.next = new ListNode(1);
  ll1.next.next = new ListNode(2);

  const ll2 = new ListNode(1);
  ll2.next = new ListNode(2);
  expect(removeDuplicatesFromSortedList(ll1)).toEqual(ll2);
});
