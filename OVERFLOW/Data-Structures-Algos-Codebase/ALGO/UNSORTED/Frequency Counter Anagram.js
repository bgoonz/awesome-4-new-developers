//Given 2 strings, WAP to determine if the 2nd string is an anagram of the 1st. An anagram is a word, phrase or name formed by rearranging the letters of another.
//Edge Cases: Everything is lowercase, no spaces, no symbols.
function anagram(st1, st2) {
  if (st1.length !== st2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  for (let char of st1) {
    count1[char] = (count1[char] || 0) + 1;
  }
  for (let char of st2) {
    count2[char] = (count2[char] || 0) + 1;
  }
  for (let key in count1) {
    if (!(key in count2)) {
      return false;
    }
    if (count2[key] !== count1[key]) {
      return false;
    }
  }
  return true;
}
console.log(anagram(" ", " "));
console.log(anagram("texttwisttime", "timetexttwist"));
console.log(anagram("hello", "eloh"));

//OR
// function anagram(st1,st2){
//     if(st1.length !== st2.length){
//         return false;
//     }
//     const lookup = {};
//     for(let i=0; i<st1.length; i++){
//         let letter = st1[i]
//         //if letter exist increment otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1
//     }
//     for(let i=0; i<st2.length; i++){
//         let letter = st2[i]
//         if(!(lookup[letter])){
//             return false;
//         }
//         else {
//             lookup[letter] -= 1
//         }
//     }
//     return true
// }
