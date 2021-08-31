function flatten(arr, depth = 1) {
  return arr.reduce((newArr, curEle) => {
    if (depth > 1 && Array.isArray(curEle)) {
      return newArr.concat(flatten(curEle, depth - 1));
    } else {
      return newArr.concat(curEle);
    }
  }, []);
}
console.log("flatten([1, [2], 3, 4], 3): ", flatten([1, [2], 3, 4], 3));
//flatten([1, [2], 3, 4], 3):  [ 1, 2, 3, 4 ]
console.log(
  'flatten([1, "a", ["hello", ["world", "1"]]],3);: ',
  flatten([1, "a", ["hello", ["world", "1"]]], 3)
);
//flatten([1, "a", ["hello", ["world", "1"]]],3);:  [ 1, 'a', 'hello', 'world', '1' ]
