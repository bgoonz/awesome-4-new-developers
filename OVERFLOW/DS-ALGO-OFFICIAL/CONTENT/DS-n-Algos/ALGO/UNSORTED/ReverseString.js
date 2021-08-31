function reversestring(string) {
  return string.split("").reverse().join("");
}
console.log(reversestring("HELLO"));

//split('')splits string by each character and turns into array of strings, reverse() reverses array in place, join('') method creates and returns new string by concatenating all arrays in a string by each character('').

//SOLUTION1 using for loop
// function reversestring(string){
// var reverse = "";
// for (let i=string.length-1; i>=0; i--){
//     reverse += string[i]
// }
// return reverse;
// }
// console.log(reversestring("HELLO"))
