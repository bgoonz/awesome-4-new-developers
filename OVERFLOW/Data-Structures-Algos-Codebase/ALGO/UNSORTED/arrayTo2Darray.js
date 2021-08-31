//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function arrayToGroup(arr, size) {
  let newarray = [];
  while (arr.length) {
    newarray.push(arr.splice(0, size));
  }
  return newarray;
}
console.log(arrayToGroup([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//create a var newarray ie an empty array
//while loop loops until the length of arr is 0
//For each iteration splice method deletes the size number of elements and push to the newarray
//Finally newarray is returned
