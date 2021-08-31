/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Examples:

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]
*******************************************************************************/

function selectiveMap(array, selector, mapper) {
  let newItems = [];
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (selector(el)) {
      newItems.push(mapper(el));
    } else {
      newItems.push(el);
    }
  }
  return newItems;
}

//******************---------------------******************\\*/
module.exports = selectiveMap;
