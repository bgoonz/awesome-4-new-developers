//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let regex = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return regex.replace(/\s+|_+/g, "-").toLowerCase();
}
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));

//1st replace puts a space before any encountered uppercase characters in the string.$1 is the first group from your regular expression, $2 is the second, puts space between $1=>lowercase ie[a-z] and 2nd $2=>uppecase [A-Z]
//2nd replaces spaces and underscores with dashes and change to lowercase
