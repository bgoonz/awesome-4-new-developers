/*
Afunction that flattens an arbitrarily nested array into one dimension.

- We can iterate through each element in an array to check to see if it itself is another array or some other kind of element.
  - If it is not an array, we can push the element directly into a new array that we are tracking (we don't need to do any further flattening)
  - If it is an array, we need to flatten this nested array, then spread our results into the new array we are making. The recursive function that we are making can be used to flatten this nested array, just like it's flattening our original array. We know the return value is itself going to be an array with one level, so we spread the results into the new array we are creating.
*/
function flatten(array) {
  // This is the array we are building out with non-Array elements
  let newArray = [];

  // We are iterating through each element of the array...
  array.forEach(function (element) {
    // ... if it is an array, flatten it, spread each individual element into the new array
    if (Array.isArray(element)) {
      // Recursive case (the element is an array)
      newArray.push(...flatten(element)); // Recursive step (flatten this nested array - at a certain point we will get to our deepest level of nesting and not recurse any more)
      // ... if it is a non-Array element, push it directly into the new array
    } else {
      // Base case (the element is not an array)
      newArray.push(element);
    }
  });

  // Now that we've built up our array with non-Array elements, return it
  return newArray;
}

console.log(flatten([1, "a", ["hello", ["world", "1"]]])); // [1, "a", "hello", "world", "1"]
