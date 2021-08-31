/*Appends an array to the end of another.
 * The first array will be modified.
 */
function append(arr1, arr2) {
  if (arr2 == null) {
    return arr1;
  }

  let pad = arr1.length,
    i = -1,
    len = arr2.length;
  while (++i < len) {
    arr1[pad + i] = arr2[i];
  }
  return arr1;
}

//----------------------------------------------(TESTING)------------------------------------------------------------:
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

console.log(
  "🚀 ~ file: append.js ~ line 25 ~ append(array1,array2)",
  append(array1, array2)
);
append(array1, array2);

//TESTING:

/*
|14:57:57|bryan@LAPTOP-9LGJ3JGS:[_KEEP] _KEEP_exitstatus:0__________________________________________________________o>

node append.js
🚀 ~ file: append.js ~ line 25 ~ append(array1,array2) [
  1, 2, 3, 4,
  5, 6, 7, 8
]
|14:59:24|bryan@LAPTOP-9LGJ3JGS:[_KEEP] _KEEP_exitstatus:0__________________________________________________________o>
*/
