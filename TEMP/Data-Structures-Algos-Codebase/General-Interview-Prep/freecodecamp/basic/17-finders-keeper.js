/**
 * Created by Bryan Guner
 * Copyright © 2018 ashish.me
 * bryan.guner@gmail.com
 */

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
