/**
 * Created by Bryan Guner
 * Copyright © 2018 ashish.me
 * bryan.guner@gmail.com
 */

function frankenSplice(arr1, arr2, n) {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
