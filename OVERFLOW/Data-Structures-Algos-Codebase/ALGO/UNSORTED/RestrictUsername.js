//Usernames are used everywhere on the internet.Here are some simple rules that users have to follow when creating their username.
//1) Usernames can only use alpha-numeric characters.
//2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
//3) Username letters can be lowercase and uppercase.
//4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
function checkUsername(name) {
  let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
  return userCheck.test(name);
}
console.log(checkUsername("Oceans11"));
console.log(checkUsername("RegexGuru"));
console.log(checkUsername("AA"));

// checks start of the index
//[a-z] checks the first character is a letter
//[0-9][0-9]+ checks for ends with two or more number characters
//| checks or
// [a-z]+ checks for ends with one or more letters next
// /d* checks for ends with one or more zero characters
//  $ end of input
// i ignores case of input
// OR Solution 2 :
// we can do userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// [0-9]{2,0} - ends with two or more numbers
