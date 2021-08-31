//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case
function titleCase(str) {
  let lowercasearray = str.toLowerCase().split(" "); //gives array
  return lowercasearray
    .map((value) =>
      value.replace(value.charAt(0), value.charAt(0).toUpperCase())
    )
    .join(" ");
}
console.log(titleCase("I'm a title case string"));

//change str to lowercase and split at (" ")
//map over it
//change value at charat(0) of each array to uppercase
//join

// function titleCase(str) {
//     return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
//   }

//explanation
//find all the non white space characters(\S)
//at the beginning of the string(^) or(|) after any whitespace character(\s)
//(g) search for other word pattern in the whole string
//replace every word 1st character with uppercase
