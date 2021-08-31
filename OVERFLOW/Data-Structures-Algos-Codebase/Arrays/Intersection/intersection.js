/*
 function named intersection(firstArr) that takes in an array and
returns a function. 
When the function returned by intersection is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.
*/
function intersection(firstArr) {
  return (secondArr) => {
    let common = [];
    for (let i = 0; i < firstArr.length; i++) {
      let el = firstArr[i];
      if (secondArr.indexOf(el) > -1) {
        common.push(el);
      }
    }
    return common;
  };
}
let abc = intersection(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

let fame = intersection(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]
