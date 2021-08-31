//Copy an Array
function CopyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]); //using spread operator
    num--;
  }
  return newArr;
}

console.log(CopyMachine(["hello", "world"], 2));
