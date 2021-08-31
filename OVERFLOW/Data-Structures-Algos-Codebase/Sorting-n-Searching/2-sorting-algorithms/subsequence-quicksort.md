### The steps

---

- Call Quick sort, passing the array and left-pointer and right-pointer to the quickSort function. For the first call, left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).

---

- Select Pivot, as the last index of the array. The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

---

- Swap function: A helper function to swap values of the array.

---

- Call Partition function: After calculating the pivot, we send the pivot to the partition() function. This function moves all the items smaller than the pivot value to the left and larger than pivot value to the right with the swap function. Then the function updates and returns the value of the left-pointer, which is indeed used as the partitionIndex.

---

- partitionIndex: In the partition() function, we keep moving all the items smaller than the pivot value to the left and larger than pivot value to the right. We have to keep track of the position of the partition. so that we can split the array into two parts in the next step. This tracking of the index where we partition the array is done by using partitionIndex variable. the initial value is left-pointer. And this initial value gets updated by the partition() function
  Inside the partition() function, we swap values for misplaced elements. That is, if an element is larger than the pivot position element, but is placed on the left side of the pivot, we swap it.

---

- Repeat the process: Now come back to quickSort function. when I get the updated partitionIndex, apply quickSort for the left side of the array and right side of the array. keep doing it until left is smaller than right.
  So, after the first 2 segments (segmented by pivot) are scanned with the partition() function, the next two segments that the main algorithm recurs on are [left…pivot - 1] and [pivot…right]

```js
//I hate using var but in this case the fact that it is function scope is rather advantageous.... substituting in let for var does not accurately sort the array in this case ... a exclusivley let declared implementation can be found in the 05-quicksort.js file above.
//1.) swap helper func
function swap(array, i, j) {
  var temp = array[i];
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
  var pivot = partition(array, left, right);
  if (left < pivot - 1) {
    flexiSort(array, left, pivot - 1);
  }
  if (right > pivot) {
    flexiSort(array, pivot, right);
  }
  return array;
}
/* Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped. 
Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair. 
That is, although the left <= right (which is being made sure by the outer while loop) the actual elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.
*/
function partition(array, left, right) {
  var pivot = Math.floor((left + right) / 2);
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
var arr = [];
// random unsorted array of integers
for (var i = 0; i < 10; i++) {
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
```
