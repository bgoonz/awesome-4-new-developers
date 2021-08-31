describe("set", function () {
  var set;

  beforeEach(function () {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function () {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add a key value pair to the storage when we call the add method", function () {
    set.add({
      key1: "value1",
    });
    expect(set._storage["key1"]).toEqual("value1");
  });

  it("should return true if key has been found in the set", function () {
    set.add({
      key1: "value1",
    });
    expect(set.contains("key1")).toEqual(true);
  });

  it("should remove the item from storage is present", function () {
    set.add({
      key1: "value1",
    });
    set.remove("key1");
    expect(set.contains("key1")).toEqual(false);
  });
});
