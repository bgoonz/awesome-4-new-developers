var HashTable = function () {
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  var values = this._storage.get(i) || [];
  values.push([k, v]);
  this._storage.set(i, values);
};

HashTable.prototype.retrieve = function (k) {
  var value;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var elements = this._storage.get(i);
  console.log(elements);
  _.each(elements, function (el) {
    el[0] === k && (value = el[1]);
  });
  return value;
};

HashTable.prototype.remove = function () {};
