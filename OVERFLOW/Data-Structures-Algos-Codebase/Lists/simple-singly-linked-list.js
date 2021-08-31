class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    if (this.tail) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      let tempTail = this.tail;
      this.tail = new Node(val);
      tempTail.next = this.tail;
      this.length++;
    }
    return this;
  }

  removeTail() {
    if (this.tail) {
      let oldTail = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return oldTail;
      }
      let placeHolder = this.head;
      while (placeHolder.next !== this.tail) {
        placeHolder = placeHolder.next;
      }
      this.tail = placeHolder;
      this.tail.next = null;
      this.length--;
      return oldTail;
    }
    return undefined;
  }

  addToHead(val) {
    let newNode = new Node(val);
    if (this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      this.length++;
    }
    return this;
  }

  removeHead() {
    if (this.head) {
      let oldHead = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return oldHead;
      }
      let newHead = oldHead.next;
      this.head = newHead;
      this.length--;
      return oldHead;
    }
    return undefined;
  }

  contains(target) {
    let placeHolder = this.head;
    while (placeHolder) {
      if (placeHolder.value === target) {
        return true;
      }
      placeHolder = placeHolder.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let count = 0;
    let placeHolder = this.head;
    while (count !== index) {
      placeHolder = placeHolder.next;
      count++;
    }
    return placeHolder;
  }

  set(index, val) {
    let result = this.get(index);
    if (result) {
      result.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return !!this.addToTail(val);
    } else if (index === 0) {
      return !!this.addToHead(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let shiftNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = shiftNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else if (index === this.length) {
      return this.removeTail();
    } else if (index === 0) {
      return this.removeHead();
    } else {
      let prevNode = this.get(index - 1);
      let removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return removed;
    }
  }

  size() {
    return this.length;
  }
}
