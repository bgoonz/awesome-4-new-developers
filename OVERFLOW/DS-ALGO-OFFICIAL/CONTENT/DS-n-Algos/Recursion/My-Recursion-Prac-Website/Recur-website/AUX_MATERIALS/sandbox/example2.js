/*
- Recursion is an appropriate solution when we can break down our problem into smaller versions of the same problem.
- When our data is very complex or very large, recursion is a good solution. Iterating through very nested data, for example, can be complicated, whereas the recursive approach may be simpler to implement a repeatable step.
- When our data is not very complex, large, or unpredictable, iteration is generally easier to follow and implement.

*/
// -------------------------------------------------Fibonacci-----------------------------------------------------------------------------------------------  //
//! Write a recursive function that takes in a number, n, argument and calculates the n-th number of the Fibonacci sequence.
function fib(n) {
  // Base cases (n < 3)
  if (n < 1) {
    return null;
  }
  if (n < 3) {
    return 1;
  }

  // Recursive case (n >= 3)
  return fib(n - 2) + fib(n - 1); // Recursive step (invoking fib with n-1 and n-2)
}

console.log(fib(4)); // 3

/*
// Tracing the call stack:
fib(4)
  return fib(2) + fib(3)
          (return 1) + (return fib(1) + fib(2))         // Reached base case for fib(2), continuing with fib(3)
                                (return 1) + (return 1) // Reached base case for fib(1) and fib(2)
*/
//* ------------------------------------------------------------------------------------------------------------------------------------------------  //
// ---------------------------------------Factorial---------------------------------------------------------------------------------------------------------  //
//! Write a function that calculates a factorial recursively.
function factorial(n) {
  // Base case (n < 2)
  if (n < 2) {
    return 1;
  }
  // Recursive case (n >= 2)
  return n * factorial(n - 1); // Recursive step (invoking factorial with n-1)
}

console.log(factorial(5)); // 120
/*
  // Tracing the call stack:
factorial(5)
  return 5 * factorial(4)
             return 4 * factorial(3)
                        return 3 * factorial(2)
                                   return 2 * factorial(1)
                                              return 1     // factorial(1) hit our base case (n < 2)
  */
//* ------------------------------------------------------------------------------------------------------------------------------------------------  //
// ----------------------------------------------Exponent--------------------------------------------------------------------------------------------------  //
//!Write a function that calculates an exponent (positive and negative) recursively.
function exponent(base, power) {
  // Base case ( power === 1)
  if (power === 0) {
    return 1;
  }

  // If we have a negative power, we can do 1 / (base ^ positive power)
  // For each recursive call to exponent, power will now be positive and work towards our base case like normal
  if (power < 0) {
    return 1 / exponent(base, -1 * power);
  }

  // Recursive case (power > 0)
  return base * exponent(base, power - 1); // Recursive step (power - 1)
}

console.log(exponent(2, 4)); // 16

/*
  // Tracing the call stack:
exponent(2, 4)
  return 2 * exponent(2, 3)
             return 2 * exponent(2, 2)
                        return 2 * exponent(2, 1)
                                   return 2 * exponent(2, 0)
                                              return 1     // exponent(2, 0) hit our base case (power === 0)
  
  */
//* ------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------SumArray----------------------------------------------------------------------------------------------  //
//!Write a function that sums all elements of an array recursively.
function sumArray(array) {
  // If our array is empty, return 0
  if (array.length === 0) {
    // Base case
    return 0;
  }

  // Otherwise, return the first number plus the result of our function with the smaller array (everything after the first number)
  // Recursive case
  return array[0] + sumArray(array.slice(1));
  // The recursive step is slicing our array, making a smaller array the argument to our function. This is working towards our base case of having an array of length 0.
}

console.log(sumArray([4, 6, 12, 3])); // 25

/*
  // Tracing the call stack:
sumArray([4, 6, 12, 3])
  return 4 + sumArray([6, 12, 3])
             return 6 + sumArray([12, 3])
                        return 12 + sumArray([3])
                                    return 3 + sumArray([])
                                               return 0     // sumArray([]) hit our base case (array.length === 0)
  */
//* ------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------Flatten Nested Array----------------------------------------------------------------------------------------------  //
//!Write a function that flattens an arbitrarily nested array into one dimension.
/*
- This is a great example of using iteration in combination with recursion.
- We can iterate through each element in an array to check to see if it itself is another array or some other kind of element.
  - If it is not an array, we can push the element directly into a new array that we are tracking (we don't need to do any further flattening)
  - If it is an array, we need to flatten this nested array, then spread our results into the new array we are making. 
  -The recursive function that we are making can be used to flatten this nested array,
  - just like it's flattening our original array. 
  -We know the return value is itself going to be an array with one level, 
  -so we spread the results into the new array we are creating.
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
/*
// Tracing the call stack:
flatten([1, "a", ["hello", ["world", "1"]]])
// create newArray = []
// iterate through each element:
// current element: 1
  // element is not array, push into newArray
  // newArray is now [1]
// current element: "a"
  // element is not array, push into newArray
  // newArray is now [1, "a"]
// current element: ["hello", ["world", "1"]]
  // element is an array, call flatten on it:
    flatten(["hello", ["world", "1"]])
    // create newArray = []
    // iterate through each element:
    // current element: "hello"
      // element is not array, push into newArray
      // newArray is now ["hello"]
    // current element: ["world", "1"]
      // element is an array, call flatten on it:
        flatten(["world", "1"])
        // create newArray = []
        // iterate through each element:
        // current element: "world"
          // element is not an array, push into newArray
          // newArray is now ["world"]
        // current element: "1"
          // element is not an array, push into newArray
          // newArray is now ["world", "1"]
        // Finished iterating, return newArray
      // spread elements of returned flatten into newArray
      // newArray is now ["hello", "world", "1"]
    // Finished iterating, return newArray
  // spread elements of returned flatten into newArray
  // newArray is now [1, "a", "hello", "world", "1"]
// Finished iterating, return newArray
*/
//* ------------------------------------------------------------------------------------------------------------------------------------------------  //
// ---------------------------------------Factorial---------------------------------------------------------------------------------------------------------  //
//! Given a buggy recursive function that causes a RangeError: Maximum call stack and examples of correct behavior, debug the function.
// When fixed, this function should behave similarly to JavaScript's '.map()'
// function.

// Examples:

// doForAll([], (x) => x * 2); // => []
// doForAll([1, 2, 3], (x) => x + 1); // => [2, 3, 4]
// doForAll(["a", "b", "c"]), (x) => x.toUpperCase()); // => ["A", "B", "C"]
//? ---------------------------------------------------------------------------
function doForAll1(arr, action) {
  return [action(arr[0]), ...doForAll1(arr.slice(1), action)];
}

/*
  - Running this function will result in a stack overflow, meaning the recursion never ends.
- We know we have three major components to recursion: the base case, recursive case, and recursive step.
- When we run into a stack overflow, 
-the first thing we should do is go over our function and see if we can identify each of these components.
  */
function doForAll(arr, action) {
  // We are making a recursive step by slicing our array, performing our function on a smaller array.
  // We know that slice is eventually going to return an empty array.
  //// ["first", "second"].slice(1) -> ["second"]
  //// ["second"].slice(1) -> []
  //// [].slice(1) -> []
  //// [].slice(1) -> []
  //// [].slice(1) -> []
  //// ...etc. This is what is causing our stack overflow. We need to stop recursing when our array is empty.
  // When we reach this point we will have performed our action on every element and should be able to exit our recursion. This is our potential base case that we have not accounted for in our code.
  return [action(arr[0]), ...doForAll(arr.slice(1), action)];
}
```
  - By adding in our base case, we will have an exit point for our recursion:
  ```;
js;

function doForAll(arr, action) {
  // Adding this conditional will account for our base case and stop our recursion.
  if (arr.length === 0) {
    return [];
    // Instead of continuing to call doForAll, we return the empty array directly

    // SPREADING EMPTY ARRAYS SIDE NOTE:
    // When this empty array is returned from our base doForAll case and is spread into our array, no new elements are added, since [] itself does not contain elements.
    // Example:
    //// const nonEmptyArr = [1, 2];
    //// const emptyArr = [];
    ////
    //// const myFirstArr = [1, ...nonEmptyArr];
    //// const mySecondArr = [1, ...emptyArr];
    ////
    //// console.log(myFirstArr); // [1, 1, 2] (nonEmptyArr had two elements that were added)
    //// console.log(mySecondArr); // [1] (emptyArr had no elements, so nothing is added)
  }

  return [action(arr[0]), ...doForAll(arr.slice(1), action)];
}
//* ------------------------------------------------------------------------------------------------------------------------------------------------  //
