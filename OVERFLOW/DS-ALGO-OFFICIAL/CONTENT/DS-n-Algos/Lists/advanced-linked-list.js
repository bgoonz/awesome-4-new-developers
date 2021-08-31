// LinkedList

"use strict";
{
  // this is a singly linked list
  // you can make it circular by calling
  // this.circle();
  // all the iterations of the list can deal with a full cycle ( i.e, a circular list )
  // but all of them halt when a sub cycle is detected ( which otherwise would loop unceasingly )
  class LinkedList {
    constructor(listName = "") {
      // Freeze it
      // Just a nice way to make the listName
      // and the "before head" special node
      // unable to changed so we don't accidentally "corrupt" this linked list structure
      // and just use the interface to handle it
      let head;
      let size;
      this.listNode = {
        data: listName,
        get next() {
          return head;
        },
        set next(newHead) {
          head = newHead;
          return head;
        },
        listNode: true,
      };
      Object.freeze(this.listNode);
      Object.freeze(this);
    }
    // cycle checks
    // this only checks if the entire list is circular
    // not if there is some other smaller sub cycle
    get isCircular() {
      let slow = this.head,
        fast = this.head;
      while (!!slow && !!fast && !!fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
          // now determine if the cycle is full, by seeing if it includes head
          const cycle = LinkedList.iterateCycleFrom(slow);
          if (cycle.includes(this.head)) {
            return true;
          } else {
            // it's a sub cycle
            return false;
          }
        }
      }
      return false;
    }
    // this checks whether there is a sub cycle
    get hasSubCycle() {
      let slow = this.head,
        fast = this.head;
      while (!!slow && !!fast && !!fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
          // now determine if the cycle is full, by seeing if it includes head
          const cycle = LinkedList.iterateCycleFrom(slow);
          if (cycle.includes(this.head)) {
            return false;
          } else {
            // it's a sub cycle
            return true;
          }
        }
      }
      return false;
    }
    static iterateCycleFrom(link) {
      // This method assumes link is already within a cycle
      // So it must be called from hasSubCycle
      // or when we know link is within a cycle
      // otherwise if there is a cycle
      // it could loop infinitely
      const start = link;
      const cycle = [];
      while (!!link) {
        cycle.push(link);
        link = link.next;
        if (link == start) {
          break;
        }
      }
      return cycle;
    }
    // make it circular
    circle() {
      this.join(this.end, this.head);
      return this.head;
    }
    // join
    join(a, b) {
      a.next = b;
      return this;
    }
    // getter and setter for head
    get head() {
      return this.listNode.next;
    }
    set head(node) {
      const currentHead = this.listNode.next;
      node.next = currentHead;
      this.listNode.next = node;
      return node;
    }
    // getter and setter for end node
    // notes
    // note this is not the "tail" of the list
    // which is commonly used to refer to "all nodes" ( or the list starting at the node )
    // after the head
    //
    // also note we could "optimize" ( to O(1) ) this by keeping a permanent
    // reference to the last node
    // but this adds more conditions to the insert and delete code
    // so the following is the O(n) implementation
    //
    // note also we do not call this "last"
    // as that becomes confusing if we concatenate two lists
    // by setting the "last" node of one list to the head node of another list
    // since it will not longer be the "last" node
    // calling it end sounds more sensible to me
    get end() {
      this.guardCycle();
      let link = this.head;
      while (!!link && !!link.next) {
        if (link.next == this.head) {
          // circular check (already at last)
          break;
        }
        link = link.next;
      }
      return link;
    }
    set end(node) {
      const currentEnd = this.end;
      this.end.next = node;
    }
    // insert and delete after
    insertAfter(link, newLink, force = false) {
      if (link == this.end && newLink == this.head && !force) {
        console.warn(`

            You are about to try to insert the current head after the current end.
            This will detach all elements after the head (including the current end).
            This may not be what you intend.
            If you wanted to make the list circular, use "circle()".
          `);
        return;
      }
      newLink.next = link.next;
      link.next = newLink;
      return newLink;
    }
    deleteAfter(link) {
      const removedLink = link.next;
      if (removedLink) {
        link.next = removedLink.next;
      }
      return link.next;
    }
    // find a link before a target link
    findBefore(targetLink) {
      this.guardCycle();
      let link = this.head;
      let previousLink = this.listNode;
      while (!!link && link !== targetLink) {
        previousLink = link;
        link = link.next;
        if (link == this.head) {
          // circular check
          break;
        }
      }
      if (link == targetLink) {
        return previousLink;
      } else {
        throw new TypeError(
          `No link before given targetLink with data: ${targetLink.data}`
        );
      }
    }
    // find a link (or a link before a link) given a data
    // we don't handle complexity such as "deep object equality" here
    // just regular javascript comparator ===
    locate(data) {
      this.guardCycle();
      let link = this.head;
      while (!!link && link.data !== data) {
        link = link.next;
        if (link == this.head) {
          // circular check
          break;
        }
      }
      if (link.data == data) {
        return link;
      } else {
        throw new TypeError(`No link with data: ${data}`);
      }
    }
    locateBefore(data) {
      this.guardCycle();
      let link = this.head;
      let previousLink = this.listNode;
      while (!!link && link.data !== data) {
        previousLink = link;
        link = link.next;
        if (link == this.head) {
          // circular check
          break;
        }
      }
      if (link.data == data) {
        return previousLink;
      } else {
        throw new TypeError(`No link with data: ${data}`);
      }
    }
    // return an array of the data in list order
    toArray() {
      this.guardCycle();
      const datas = [];
      let link = this.listNode.next;
      while (!!link) {
        datas.push(link.data);
        link = link.next;
        if (link == this.head) {
          // circular check
          break;
        }
      }
      return datas;
    }
    // guard against infinite loops
    // throws an Exception if the list has a cycle but is not circular
    // which would mean that the methods for locating a link given a data
    // and finding a link before a given link
    // would possibly loop infinitely
    guardCycle() {
      if (this.hasSubCycle) {
        throw new TypeError(`

            You are trying to run a method on a list which has a cycle 
            which is not a full circular list cycle.
            This means this method could loop infinitely. 
            This may not be what you intend.
          `);
      }
    }
  }

  Object.assign(self, { LinkedList });

  test();

  function test() {
    const z = new LinkedList();
    z.head = { data: "a" };
    z.head = { data: "b" };
    z.head = { data: "c" };
    z.end = { data: "z" };
    z.insertAfter(z.locate("a"), { data: "9123912" });
    console.log(z, z.toArray());
    const m = z.locate("a");
    const n = z.locate("z");
    n.next = m;
    Object.assign(self, { z });

    const z2 = new LinkedList();
    z2.head = { data: "a" };
    z2.head = { data: "b" };
    z2.head = { data: "c" };
    z2.end = { data: "z" };
    z2.insertAfter(z2.locate("a"), { data: "9123912" });
    z2.circle();
    Object.assign(self, { z2 });

    console.log(z2, z2.toArray());
  }
}
