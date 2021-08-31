describe("linkedList", function () {
  var linkedList;

  beforeEach(function () {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function () {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function () {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should keep the tail's location up to date", function () {
    linkedList.addToTail("hi");
    expect(linkedList.tail.value).toEqual("hi");
    linkedList.addToTail("again");
    expect(linkedList.tail.value).toEqual("again");
  });

  // add more tests here to test the functionality of linkedList
  it("should set head when addToTail is first called & head remains the same after a tail is added", function () {
    linkedList.addToTail(1);
    expect(linkedList.head.value).toEqual(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).toEqual(1);
  });

  it("should set head when addToTail is first called & head remains the same after a tail is added", function () {
    linkedList.addToTail(1);
    expect(linkedList.head.value).toEqual(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).toEqual(1);
  });

  it("should make head undefined when removeHead is called", function () {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
  });

  it("should remove first node from list and return its value", function () {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.removeHead()).toEqual(1);
  });

  it("should set head and tail to null if the object is empty or if only one node exists", function () {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it("should return false if head is null", function () {
    expect(linkedList.contains()).toEqual(false);
  });

  it("should return false if head is not null and the node does not contain our passed in value", function () {
    linkedList.addToTail(1);
    expect(linkedList.contains(2)).toEqual(false);
  });

  it("should return true if list contains passed value", function () {
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).toEqual(true);
  });

  it("should return true if list with multiple values contains passed value", function () {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(2)).toEqual(true);
  });

  it("should return false if list with multiple values does not contain passed value", function () {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(4)).toEqual(false);
  });

  it("should tails PREVIOUS property whenever the addToTail function is called", function () {
    linkedList.addToTail(1);
    expect(linkedList.tail.previous).toEqual(null);
    var oldTail = linkedList.tail;
    linkedList.addToTail(2);
    expect(linkedList.tail.previous).toBe(oldTail);
  });

  it("should update the new heads previous property when we call removeHead", function () {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList.head.previous).toEqual(null);
  });
  //addToHead
  it("should move head to new node when addToHead method is called", function () {
    linkedList.addToTail(1);
    var oldHead = linkedList.head;
    linkedList.addToHead(2);
    expect(linkedList.head).not.toBe(oldHead);
  });

  it("should set head's next property when addToHead is called", function () {
    linkedList.addToTail(1);
    var oldHead = linkedList.head;
    linkedList.addToHead(2);
    expect(linkedList.head.next).toBe(oldHead);
  });

  it("should update former head's previous property when addToHead method is called", function () {
    linkedList.addToTail(1);
    var oldHead = linkedList.head;
    linkedList.addToHead(2);
    expect(oldHead.previous).toBe(linkedList.head);
  });

  //removeTail
  it("should move tail when removeTail is called", function () {
    linkedList.addToTail(1);
    var formerTail = linkedList.tail;
    linkedList.addToTail(2);
    linkedList.removeTail();
    expect(linkedList.tail).toBe(formerTail);
  });

  it("should update tail's next propery when removeTail is called", function () {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeTail();
    expect(linkedList.tail.next).toEqual(null);
  });
});
