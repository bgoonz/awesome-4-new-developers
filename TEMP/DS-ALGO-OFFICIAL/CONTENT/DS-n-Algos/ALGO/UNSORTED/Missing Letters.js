//Find the missing letter in the passed letter range and return it.If all letters are present in the range, return undefined.
function missingLetter(str) {
  for (let i = 1; i <= str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
console.log(missingLetter("abcdefghjklmno"));
console.log(missingLetter("abce"));
console.log(missingLetter("abcdefg"));
//("acd").charCodeAt(0)-> 97
//String.fromCharCode(("acd").charCodeAt(0)) -> "a"
