/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(ll1, ll2) {
  let carry = 0;
  let start = new ListNode();
  let dummy = start;
  while (ll1 != null || ll2 != null || carry) {
    let next = new ListNode((ll1 ? ll1.val : 0) + (ll2 ? ll2.val : 0) + carry);
    carry = next.val >= 10 ? 1 : 0;
    if (carry) {
      next.val -= 10;
    }
    dummy.next = next;
    dummy = dummy.next;
    if (ll1) {
      ll1 = ll1.next;
    }
    if (ll2) {
      ll2 = ll2.next;
    }
  }
  return start.next;
}

const ll1 = new ListNode(2);
ll1.next = new ListNode(4);
ll1.next.next = new ListNode(3);

const ll2 = new ListNode(5);
ll2.next = new ListNode(6);
ll2.next.next = new ListNode(4);

const ll3 = new ListNode(7);
ll3.next = new ListNode(0);
ll3.next.next = new ListNode(8);

test("add Two Numbers", () => {
  expect(addTwoNumbers(ll1, ll2)).toEqual(ll3);
});
