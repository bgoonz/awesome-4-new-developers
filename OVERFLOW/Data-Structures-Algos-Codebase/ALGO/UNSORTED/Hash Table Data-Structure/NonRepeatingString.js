//Condition: str are lowercase letters with no spaces or symbols.

function FirstNonRepeatingStr(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return s[i];
    }
  }
  return null;
}
// function FirstNonRepeatingStr(str){
// for(var i in str){
//    if(str.match(new RegExp(str[i],"gi")).length === 1){
//     return str[i]
//    }
// }
// return null
// }
console.log(FirstNonRepeatingStr("abcdefg")); //a
console.log(FirstNonRepeatingStr("hellohiworld")); //e
