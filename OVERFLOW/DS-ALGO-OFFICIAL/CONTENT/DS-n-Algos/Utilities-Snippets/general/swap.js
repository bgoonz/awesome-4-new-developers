/*
 - Swap the elements indexed by `x` and `y` in the array `ary`.
 -
 - parameter:  {Array} ary
 -        The array.
 - parameter:  {Number} x
 -        The index of the first item.
 - parameter:  {Number} y
 -        The index of the second item.
 */
function swap(ary, x, y) {
  let temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
