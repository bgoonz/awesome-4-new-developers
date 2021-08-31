//Pig Latin is a way of altering English Words. The rules are as follows:
//If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// If a word begins with a vowel, just add "way" at the end.
function translatePigLatin(str) {
  let myconsonant = str.match(/^[^aeiou]+/);
  return myconsonant !== null
    ? str.replace(myconsonant, "").concat(myconsonant).concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("california")); //"aliforniacay"
console.log(translatePigLatin("algorithm")); //"algorithmway"
console.log(translatePigLatin("eight")); //"eightway"
console.log(translatePigLatin("pratikshya")); //"atikshyapray"

//The caret serves two different purposes. It is a special character that denotes "the beginning of a line" and it is a "not" operator inside of []s.
//Matches any character that is not a vowel followed by any number of characters.
