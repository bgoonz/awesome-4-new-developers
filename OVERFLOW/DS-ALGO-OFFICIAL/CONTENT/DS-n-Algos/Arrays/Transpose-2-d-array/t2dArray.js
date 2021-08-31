/* 
 !function trans2dArray(arr) that accepts a two-dimensional array and returns a new version of the array with its columns and rows switched.
*/

function trans2dArray(arr) {
  let result = [];
  for (let col = 0; col < arr[0].length; col++) {
    let newRow = [];
    for (let row = 0; row < arr.length; row++) {
      newRow.push(arr[row][col]);
    }
    result.push(newRow);
  }
  return result;
}

let increasingNums2dAry3X3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("increasingNums2dAry3X3", increasingNums2dAry3X2);

let increasingNums2dAry3X2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("increasingNums2dAry3X2", increasingNums2dAry3X2);
