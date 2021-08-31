//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number | index of the 2nd argument.
function getIndexof(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
console.log(getIndexof([5, 7, 1, 2, 0], 4));

//Solution 2
// function getIndexof(arr, num) {
//     return arr.filter(val => num > val).length
//     }
// console.log(getIndexof([5,7,1,2,0],4))
//Description
//Filter gives a new array wiht val less than the number in that case gives [1,2,0] and gives length of it i.e 3 returns 3
