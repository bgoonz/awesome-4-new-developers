//----------------------------------------------(Helper Functions)------------------------------------------------------------:
function append(arr1, arr2) {
  if (arr2 == null) {
    return arr1;
  }

  let pad = arr1.length,
    i = -1,
    len = arr2.length;
  while (++i < len) {
    arr1[pad + i] = arr2[i];
  }
  return arr1;
}
/**
 * Converts argument into a valid iterator.
 * Used internally on most array/object/collection methods that receives a
 * callback/iterator providing a shortcut syntax.
 */
function createIterate(src, thisObj) {
  if (src == null) {
    return identity;
  }
  switch (typeof src) {
    case "function":
      // function is the first to improve perf (most common case)
      // also avoid using `Function#call` if not needed, which boosts
      // perf a lot in some cases
      return typeof thisObj !== "undefined"
        ? function (val, i, arr) {
            return src.call(thisObj, val, i, arr);
          }
        : src;
    case "object":
      return function (val) {
        return deepMatches(val, src);
      };
    case "string":
    case "number":
      return prop(src);
  }
}

//----------------------------------------------(Main Code Below)------------------------------------------------------------:

/*Maps the items in the array and concatenates the result arrays.
 */

function collect(arr, callback, thisObj) {
  callback = createIterate(callback, thisObj);
  let results = [];
  if (arr == null) {
    return results;
  }

  let i = -1,
    len = arr.length;
  while (++i < len) {
    let value = callback(arr[i], i, arr);
    if (value != null) {
      append(results, value);
    }
  }

  return results;
}

//----------------------------------------------(TESTING)------------------------------------------------------------:
let array = [0, 1, 2, 3],
  thisObj = {};
let result = collect(
  array,
  function (value) {
    let i = 0,
      arr = [];
    while (i++ < value) {
      arr.push(value);
    }

    console.log(`this is ${this}`);
    return arr;
  },
  thisObj
);
console.log("result: ", result);
//-----------------------------------------------(Results)------------------------------------------------------------:

/*
|15:20:06|bryan@LAPTOP-9LGJ3JGS:[_KEEP] _KEEP_exitstatus:0__________________________________________________________o>

node collect.js 
this is [object Object]
this is [object Object]
this is [object Object]
this is [object Object]
result:  [ 1, 2, 2, 3, 3, 3 ]
|15:20:50|bryan@LAPTOP-9LGJ3JGS:[_KEEP] _KEEP_exitstatus:0__________________________________________________________o>
*/
