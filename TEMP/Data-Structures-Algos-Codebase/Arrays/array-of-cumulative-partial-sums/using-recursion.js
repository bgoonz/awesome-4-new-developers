/*
First is recurSum(arr, start) which returns the sum of the elements of arr from the index start till the very end.

Second is partrecurSum() that recursively concatenates the required sum into an array and when we reach the end of the array, it returns the concatenated array.
*/
//arr.length -1 = 5
//                   arr   [    1,    7,    12,   6,    5,    10   ]
//                   ind   [    0     1     2     3     4      5   ]
//                              ↟                              ↟
//                            start                           end

function recurSum(arr, start = 0, sum = 0) {
  if (start < arr.length) {
    return recurSum(arr, start + 1, sum + arr[start]);
  }

  return sum;
}

function rPartSumsArr(arr, partSum = [], start = 0, end = arr.length - 1) {
  if (start <= end) {
    return rPartSumsArr(
      arr,
      partSum.concat(recurSum(arr, start)),
      ++start,
      end
    );
  }
  return partSum.reverse();
}

console.log(
  "------------------------------------------------rPartSumArr------------------------------------------------"
);
console.log("rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]: ", rPartSumsArr(arr));
console.log("rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]: ", rPartSumsArr(arr1));
console.log(
  "------------------------------------------------rPartSumArr------------------------------------------------"
);
/*
------------------------------------------------rPartSumArr------------------------------------------------
rPartSumsArr(arr)=[ 1, 1, 5, 2, 6, 10 ]:  [ 10, 16, 18, 23, 24, 25 ]
rPartSumsArr(arr1)=[ 1, 7, 12, 6, 5, 10 ]:  [ 10, 15, 21, 33, 40, 41 ]
------------------------------------------------rPartSumArr------------------------------------------------
*/
