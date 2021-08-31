//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}
console.log(palindrome("not a palindrome"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));

//Using regex replace whitespace or non-alphnumeric character with null/nothing
//change capital to lowercase()
//spilt(), reverse the arrays, join("")
