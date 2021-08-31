/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoSortedLists(l1, l2) {
  let dummyHead = new ListNode();
  let current = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  while (l1) {
    current.next = l1;
    l1 = l1.next;
    current = current.next;
  }

  while (l2) {
    current.next = l2;
    l2 = l2.next;
    current = current.next;
  }
  return dummyHead.next;
}

const ll1 = new ListNode(1);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(4);

const ll2 = new ListNode(1);
ll2.next = new ListNode(3);
ll2.next.next = new ListNode(4);

const ll3 = new ListNode(1);
ll3.next = new ListNode(1);
ll3.next.next = new ListNode(2);
ll3.next.next.next = new ListNode(3);
ll3.next.next.next.next = new ListNode(4);
ll3.next.next.next.next.next = new ListNode(4);

test("merge Two Sorted Lists", () => {
  expect(mergeTwoSortedLists(ll1, ll2)).toEqual(ll3);
});
