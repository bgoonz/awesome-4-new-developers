const alUni = require("./../all-unique.js");
const alUniATON2 = require("./../allunique-allTypes-O(n^2).js");
const stupid = require("./../stupid-oneliner.js");
const set = require("./../allUnique-set.js");
//! ----------------------------------
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a2 = [1, 2, 3, 4, 5, 1, 2, 8, 9];
//! ----------------------------------
let b1 = alUni(a1);
let b2 = alUni(a2);
let b3 = alUniATON2(a1);
let b4 = alUniATON2(a2);
let b5 = stupid(a1);
let b6 = stupid(a2);
let b7 = set(a1);
let b8 = set(a2);
//! ----------------------------------

console.log("a1, a2: ", a1, "\n", a2);
console.log("expected: TRUE : FALSE");
console.log("b1:", b1, " b2: ", b2);
console.log("<-----------⇑(normal)⇑>----------->");
console.log("expected: TRUE : FALSE");
console.log("b3:", b3, " b4: ", b4);
console.log("<-----------⇑(checks other data types)⇑>----------->");
console.log("expected: TRUE : FALSE");
console.log("b5:", b5, "b6: ", b6);
console.log("<------⇑(pretend this implementation isn't here)⇑>------>");
console.log("expected: TRUE : FALSE");
console.log("b7:", b7, " b8: ", b8);
console.log("<------⇑(using the native set DS)⇑>------>");
//------------------------------------------(Result)------------------------------------------\\
/*
node test.js
a1, a2:  [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
 [
  1, 2, 3, 4, 5,
  1, 2, 8, 9
]
expected: TRUE : FALSE
b1: true  b2:  false
<-----------⇑(normal)⇑>----------->
expected: TRUE : FALSE
b3: true  b4:  false
<-----------⇑(checks other data types)⇑>----------->
expected: TRUE : FALSE
b5: true b6:  false
<------⇑(pretend this implementation isn't here)⇑>------>
expected: TRUE : FALSE
b7: true  b8:  false
<------⇑(using the native set DS)⇑>------>

\___________________________________________________
bryan_dir:test_exitstatus:0 ====>

\___________________________________________________
bryan_dir:test_exitstatus:0 ====>
*/
