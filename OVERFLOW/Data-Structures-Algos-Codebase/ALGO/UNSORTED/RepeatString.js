//Question: Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  let string = " ";
  while (num > 0) {
    string += str;
    num--;
  }
  return string;
}
console.log(repeatStringNumTimes("repeat", 5));

//Solution-2: Using ternary operator and recursive function
// function repeatStringNumTimes(str,num){
//     return num > 0 ? str + repeatStringNumTimes(str, num-1) : ""
// }

//Solution-3: Using built-in repeat method
// function repeatStringNumTimes(str,num){
//     return str.repeat(num)
// }
// console.log(repeatStringNumTimes("abc",3))

//Solution-4 Using if statement
// function repeatStringNumTimes(str,num){
//     if(num<0){
//         return ""
//     }
//     else if(num>0){
//         return str + repeatStringNumTimes(str, num-1)
//     }
//     else {
//         return str;
//     }}
