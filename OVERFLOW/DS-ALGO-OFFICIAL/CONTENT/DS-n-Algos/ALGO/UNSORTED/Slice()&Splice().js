//Use the array methods slice and splice to copy each element of the first array into the second array, in order.Begin inserting elements at index n of the second array.The input arrays should remain the same after the function runs.

function array(arr1, arr2, n) {
  let array2 = arr2.slice();
  array2.splice(n, 0, ...arr1);
  return array2;
}
console.log(array([3, 4], [2, 5, 6, 7, 8], 1));
console.log(array([1, 2], ["a", "b"], 2));

//slice() method to create a copy of arr2 so not to mutate original array
//splice() to alter array and add the arr1 contents into array2 at starting index n, and not to delete any elements next arg is 0
