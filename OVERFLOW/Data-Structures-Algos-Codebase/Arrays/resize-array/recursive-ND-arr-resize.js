/*
 - Recursively resize a multi dimensional array
 - parameter: {Array} array         Array to be resized
 - parameter: {number[]} size       Array with the size of each dimension
 - parameter: {number} dim          Current dimension
 - parameter: {-} [defaultValue]    Value to be filled in in new entries,
 -                              undefined by default.
*/
function _resize(array, size, dim, defaultValue) {
  let i;
  let elem;
  const oldLen = array.length;
  const newLen = size[dim];
  const minLen = Math.min(oldLen, newLen);

  // apply new length
  array.length = newLen;

  if (dim < size.length - 1) {
    // non-last dimension
    const dimNext = dim + 1;

    // resize existing child arrays
    for (i = 0; i < minLen; i++) {
      // resize child array
      elem = array[i];
      if (!Array.isArray(elem)) {
        elem = [elem]; // add a dimension
        array[i] = elem;
      }
      _resize(elem, size, dimNext, defaultValue);
    }

    // create new child arrays
    for (i = minLen; i < newLen; i++) {
      // get child array
      elem = [];
      array[i] = elem;

      // resize new child array
      _resize(elem, size, dimNext, defaultValue);
    }
  } else {
    // last dimension

    // remove dimensions of existing values
    for (i = 0; i < minLen; i++) {
      while (Array.isArray(array[i])) {
        array[i] = array[i][0];
      }
    }

    // fill new elements with the default value
    for (i = minLen; i < newLen; i++) {
      array[i] = defaultValue;
    }
  }
}
