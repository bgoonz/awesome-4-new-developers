var makeSet = function () {
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function (obj) {
  var key = Object.keys(obj);
  this._storage[key[0]] = obj[key[0]];
};

setPrototype.contains = function (passedKey) {
  var found = false;
  _.each(this._storage, function (value, key) {
    key === passedKey && (found = true);
  });
  return found;
};

setPrototype.remove = function (removeKey) {
  this.contains(removeKey) && delete this._storage[removeKey];
};
