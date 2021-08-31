function confirmTheEnd(str, target) {
  return str.slice(str.length - target.length) === target;
}
console.log(
  confirmTheEnd(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmTheEnd("Congratulation", "on"));

//Solution-2: Using Regular Expressions

// function confirmTheEnd(str,target){
//     let reg = new RegExp(target + "$","i")
//     return reg.test(str)
// }
//$ test for end of string or end of line and i means case insensitive in RegExp

//Solution-3: Using built-in endsWith string method
// function confirmTheEnd(str, target){
//     return str.endsWith(target)
//     }
