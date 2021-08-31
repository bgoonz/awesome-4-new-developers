/*
 * Appends an array to the end of another.
 * The first array will be modified.
 */

function append(arr1, arr2) {
  if (arr2 == null) {
    return arr1;
  }

  let arr1Length = arr1.length,
    i = -1,
    arr2length = arr2.length;
  while (++i < arr2length) {
    arr1[arr1Length + i] = arr2[i];
    console.log("i:", i, "===>", "WHILE LOOP arr1: ", arr1);
    console.log("i:", i, "===>", "WHILE LOOP arr2: ", arr2);
    console.log(
      `---------------------------${i}------------------------------`
    );
  }

  return arr1;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 7, 8, "7 ate 9"];
//append(array1,array2)
console.log("append(array1,array2): ", append(array1, array2)); //append(array1,array2):  [ 1, 2, 3, 4, 5, 5, 7, 8, '7 ate 9' ]
