//  Write a recrusive function called 'flatten' that takes a single array
//    with any number of nested arrays and returns an array with all of
//    the nested contents on one level.

// Return a one dimensional array

// Repeating pattern
// extracting elements from a nested array

// Where does the pattern break
// when there are no nested arrays

// Base Case
// if all elements of an array are not an array
// if no elements of an array are themselves an array

// Recursive Case
// if an element of an array is an array itself

// Recrusive Step
// if an element is an array, pass that element to flatten

function flatten(array) {
  const flattened = [];

  array.forEach((el) => {
    console.log(flattened);
    if (Array.isArray(el)) {
      flattened.push(...flatten(el));
    } else {
      flattened.push(el);
    }
  });

  console.log(flattened);
  console.log("\n-----------\n");
  return flattened;
}

let arr3 = [1, 5, [6, [8, 5]], 44];

console.log(flatten(arr3));

// exponent(base, power);   // 1st frame,   array = [1, 5, [6, [8, 5]], 44]
// exponent(base, power);   // 2nd frame,   array = [6, [8, 5]]
// exponent(base, power);   // 3rd frame,   array = [8, 5], return value [8,5], popped off stack
// 2nd frame,     return from 3rd frame = [8,5],    returns [6,8,5],     popped off the stack
// 1st frame,     return from 2nd frame = [6,8,5],    returns [1,5,6,8,5,44],     popped off the stack
// Final return value: [1,5,6,8,5,44]
