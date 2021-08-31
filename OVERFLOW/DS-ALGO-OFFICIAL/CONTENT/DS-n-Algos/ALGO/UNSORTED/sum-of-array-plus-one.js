// ES5 method is nice and clean
export function es5(array) {
  return array.reduce((memo, num) => {
    return memo + num;
  }, array.length);
}

// Without array.reduce method isn't much different
export function iterative(array) {
  let result = array.length;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}
