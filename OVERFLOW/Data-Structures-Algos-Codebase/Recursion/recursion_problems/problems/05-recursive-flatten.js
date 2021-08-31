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
  let baseArr = [];
  arr.forEach(function (ele) {
    if (Array.isArray(ele)) {
      baseArr.push(...flatten(ele));
    } else {
      baseArr.push(ele);
    }
  });
  return baseArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
