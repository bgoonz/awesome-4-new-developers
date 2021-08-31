/**
 * Flatten a multi dimensional array, put all elements in a one dimensional
 * array
 * parameter:  {Array} array   A multi dimensional array
 * @return {Array}        The flattened array (1 dimensional)
 */
export function flatten(array) {
  if (!Array.isArray(array)) {
    // if not an array, return as is
    return array;
  }
  const flat = [];

  array.forEach(function callback(value) {
    if (Array.isArray(value)) {
      value.forEach(callback); // traverse through sub-arrays recursively
    } else {
      flat.push(value);
    }
  });

  return flat;
}
