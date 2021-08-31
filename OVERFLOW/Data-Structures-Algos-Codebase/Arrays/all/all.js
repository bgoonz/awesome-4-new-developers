//Returns true if the provided function parameter 'func' returns true for all elements in a set,
//Otherwise, it returns false
function all(arr, func = Boolean) {
  return arr.every(func);
}
console.log(
  "all([4, 2, 3], num => num > 1): ",
  all([4, 2, 3], (num) => num > 1)
);
console.log("all([1, 2, 3]): ", all([1, 2, 3]));
/*
all([4, 2, 3], num => num > 1):  true
all([1, 2, 3]):  true
*/
