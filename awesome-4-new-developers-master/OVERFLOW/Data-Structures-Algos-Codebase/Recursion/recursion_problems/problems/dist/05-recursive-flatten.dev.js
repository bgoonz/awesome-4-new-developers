"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // => []
flatten([1, 2]); // => [1, 2]
flatten([1, [2, [3]]]); // => [1, 2, 3]
***********************************************************************/
//base case: a flat array
//recursive case: a nested array
//recursive step: push elements that are not arrays and flatten elements of arrays
function flatten(arr) {
  var baseArr = [];
  arr.forEach(function (ele) {
    if (Array.isArray(ele)) {
      baseArr.push.apply(baseArr, _toConsumableArray(flatten(ele)));
    } else {
      baseArr.push(ele);
    }
  });
  return baseArr;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

module.exports = flatten;
