var HashTable = function () {
  //Params no need to adjust
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket)) {
    bucket.push([k, v]);
    this._tupleCount++;
  } else {
    this._storage.set(index, [[k, v]]);
    this._tupleCount++;
  }
  this.resize();
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return bucket.reduce(function (result, tuple) {
    if (tuple[0] === k) {
      return tuple[1];
    }
    return result;
  }, undefined);
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var cnt = this._tupleCount;
  bucket.forEach(function (tuple, idx) {
    if (tuple[0] === k) {
      bucket.splice(idx, 1);
      cnt--;
    }
  });
  this._tupleCount = cnt;
  this.resize();
};

HashTable.prototype.resize = function () {
  var tempStorage;
  //make it bigger
  if (this._tupleCount / this._limit >= 0.75) {
    var newLimit = this._limit * 2;
    tempStorage = LimitedArray(newLimit);
    this._storage.each(function (bucket) {
      _.each(bucket, function (tuple) {
        var idx = getIndexBelowMaxForKey(tuple[0], newLimit);
        tempStorage.set(idx, [tuple]);
      });
    });
    this._limit *= 2;
    this.minLimit *= 2;
    this._storage = tempStorage;
  }
  // make it smaller
  if (this._tupleCount / this._limit <= 0.25) {
    if (this._limit > 8) {
      var newLimit = this._limit / 2;
      tempStorage = LimitedArray(newLimit);
      this._storage.each(function (bucket) {
        _.each(bucket, function (tuple) {
          var idx = getIndexBelowMaxForKey(tuple[0], newLimit);
          tempStorage.set(idx, [tuple]);
        });
      });
      this._limit = newLimit;
      this._storage = tempStorage;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 The overall HashTable is constant time, but contains certain elements that are linear in nature.
 The `insert` method is constant time.
 The `retrieve` method is linear.
 The `remove` method is linear.
 */
