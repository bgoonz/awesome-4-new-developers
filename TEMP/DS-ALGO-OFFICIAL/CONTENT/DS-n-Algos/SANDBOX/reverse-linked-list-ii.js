// Source : https://leetcode.com/problems/reverse-linked-list-ii/
// Author : Bryan Guner

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  var tmp = [];

  while (head) {
    tmp.push(new ListNode(head.val));
    head = head.next;
  }

  m -= 1;
  n -= 1;

  for (var i = m, mid = (n + m) >> 1; i <= mid; i++) {
    var a = i;
    var b = m + n - a;

    var c = tmp[a];
    tmp[a] = tmp[b];
    tmp[b] = c;
  }

  for (var i = 0, len = tmp.length; i < len - 1; i++) tmp[i].next = tmp[i + 1];

  return tmp[0];
};
