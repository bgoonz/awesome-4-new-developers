// our two sum function which will return all pairs in the array that sum up to S
function twoSum(arr, S) {
  const sums = [];
  const hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    const sumMinusElement = S - arr[i];
    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }
    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];
  }
  // return all pairs of integers that sum to S
  return sums;
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7));

//Solution: Using for loop, running time = O(n^2)
// function twoSum(arr, S) {
//     var sums = [];
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === S) {
//           sums.push([arr[i], arr[j]]);
//         }
//       }
//     }
//     return sums;
//   }
