//I hate using var but in this case the fact that it is function scope is rather advantageous.... substituting in let for var does not accurately sort the array in this case ... a exclusivley let declared implementation can be found in the 05-quicksort.js file above.
//1.) swap helper func
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function flexiSort(array, left, right) {
  // left-pointer would be the index of the first element ...
  //---> 0
  //right-pointer would be the index of the last element
  //---> (length -1).
  left = left || 0;
  right = right || array.length - 1;
  const pivot = partition(array, left, right);
  if (left < pivot - 1) {
    flexiSort(array, left, pivot - 1);
  }
  if (right > pivot) {
    flexiSort(array, pivot, right);
  }
  return array;
}
function partition(array, left, right) {
  const pivot = Math.floor((left + right) / 2);
  while (left < right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}
//--------------------------------(Testing)--------------------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // By adding 1, I am making the maximum inclusive
  //Fun Fact:---->( the minimum is inclusive anyway).
  //Math.random() function returns a pseudo - random number in the range from 0 inclusive --> 1 exclusive
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
//--------------------------------------------------------------------------
let arr = [];
// random unsorted array of integers
for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(1, 100));
}
console.log(
  "-----------------------------------------------------------------"
);
console.log("Unsorted array: ");
// unsorted array
console.log(arr);
console.log(
  "-----------------------------------------------------------------"
);
arr = flexiSort(arr, 0, arr.length - 1);
console.log("↧↧↧↧↧  Sorted array: ↧↧↧↧↧↧ ");
console.log(arr);
/*
node subsequence-quicksort.js
-----------------------------------------------------------------
Unsorted array:
[
  93, 3, 18, 100, 76,
  85, 2, 74,  38, 99
]
-----------------------------------------------------------------
↧↧↧↧↧  Sorted array: ↧↧↧↧↧↧
[
   2,  3, 18, 38,  74,
  76, 85, 99, 93, 100
]
\___________________________________________________
bryan_dir:2-sorting-algorithms_exitstatus:0 ====>
*/
