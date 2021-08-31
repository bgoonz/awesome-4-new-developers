/*Combines an array with all the items of another.
 * Does not allow duplicates and is case and type sensitive.
 */
function combine(arr1, arr2) {
  if (arr2 == null) {
    return arr1;
  }

  let i = -1,
    len = arr2.length;
  while (++i < len) {
    if (indexOf(arr1, arr2[i]) === -1) {
      arr1.push(arr2[i]);
    }
  }

  return arr1;
}

//----------------------------------------------(TESTING)------------------------------------------------------------:
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
combine(array1, array2);
console.log(
  "🚀 ~ file: combine.js ~ line 24 ~ combine(array1,array2)",
  combine(array1, array2)
);
var arr = [1];
combine(arr, null);
arr;
console.log("🚀 ~ file: combine.js ~ line 31 ~  arr", arr);

//-----
// combine(arr, undefined);
// arr;
// console.log("🚀 ~ file: combine.js ~ line 36 ~  arr", arr);
//-----------------------------------------------(Results)------------------------------------------------------------:

/*






*/
