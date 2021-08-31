var flatten = require("arr-flatten");
var slice = [].slice;

/*
-  Return the arrDiference between the first array and additional arrays.
*/

function arrDif(arr, arrays) {
  var argsLen = arguments.length;
  var len = arr.length,
    i = -1;
  var res = [],
    arrays;

  if (argsLen === 1) {
    return arr;
  }

  if (argsLen > 2) {
    arrays = flatten(slice.call(arguments, 1));
  }

  while (++i < len) {
    if (!~arrays.indexOf(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = arrDif;
