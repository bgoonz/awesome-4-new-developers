"use strict";
/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */
const ListNode = require("../models/list-node");

class LinkedList {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  isEmpty() {
    return this.root === null;
  }

  // O(1) constant time
  prepend(data) {
    const node = new ListNode(data);
    node.next = this.root;
    this.root = node;
    this.size += 1;
  }

  append(data) {
    this.addAtIndex(this.size, data);
  }

  // O(N) linear time
  toString() {
    let result = "root ->";
    let current = this.root;
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    return result;
  }

  // O(n) linear time
  length() {
    let current = this.root;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // O(n) linear time
  get(index) {
    let current = this.root;
    let count = 0;
    while (current != null) {
      if (count === index) {
        return current.data;
      }
      count += 1;
      current = current.next;
    }
    return null;
  }

  // O(n) linear time
  removeAtIndex(index) {
    if (!this.isEmpty()) {
      if (index === 0) {
        this.root = this.root.next;
      } else {
        let current = this.root;
        let i = 0;
        while (current !== null && i < index - 1) {
          current = current.next;
          i++;
        }
        current.next = current.next.next;
      }
      this.size -= 1;
    } else {
      return;
    }
  }

  addAtIndex(index, data) {
    if (index === 0) {
      this.prepend(data);
    } else {
      let i = 0;
      let current = this.root;
      let node = new ListNode(data);
      while (current !== null && i < index - 1) {
        i++;
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
    this.size += 1;
  }
}

const log = console.log;
const ll = new LinkedList();
log(ll.length());
log(ll.isEmpty());
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.prepend(40);
ll.prepend(50);
log(ll.length());
log(ll.toString());
log(ll.get(1));
ll.removeAtIndex(0);
log(ll.toString());
ll.removeAtIndex(2);
log(ll.toString());
ll.removeAtIndex(2);
log(ll.toString());
ll.addAtIndex(1, 100);
log(ll.toString());
log(ll.size);
ll.append(99);
log(ll.toString());
// test('linked List', () => {
//   expect(linkedList('Ashish')).toEqual('Asish')
// })
