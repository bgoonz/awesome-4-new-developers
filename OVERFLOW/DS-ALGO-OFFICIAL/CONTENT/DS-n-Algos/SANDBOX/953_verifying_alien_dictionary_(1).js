/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. 
The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 
return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) 
According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank 
character which is less than any other character.
*/

// things we need to establish:
// 1. Are the words totally unique or do they share letters? (as in the case of 2 and 3)
// 2. Do the unique letters (whether the first char or after the shared chars) appear in the correct order?
// 3. If the words do share characters, are they in the correct order, i.e. is the shorter version in front of the longer version?

// to test 1, a 'quick' way to do that might be to start with the shortest word, and see if it's included in the longer word.
// but you need to be checking if they're in the correct order in the alphabet anyway, so maybe you can do that check at the same time?

// iterate over the input array
// keep track of the first word's first char index position in the alphabet.
// go to the next word. if it's first char is the same index position, then:
//    check the next letter, in both words. if they are the same, then continue to check next
//    once you finally get to a letter that isn't the same, do same check as below
// if it's not the same index position, is it greater than the first one?
//    if no, return false
//    if yes, continue

var isAlienSorted = function (words, order) {
  let charIdx = 0;
  let wordToCheck = 0;
  let prevIdx = order.indexOf(words[wordToCheck][charIdx]);

  for (let i = 1; i < words.length; i++) {
    let currentCharIdx = order.indexOf(words[i][charIdx]);
    if (currentCharIdx < prevIdx) {
      return false;
    } else if (currentCharIdx === prevIdx) {
      while (currentCharIdx >= prevIdx) {
        charIdx++;
        prevIdx = order.indexOf(words[i - 1][charIdx]);
        currentCharIdx = order.indexOf(words[i][charIdx]);
      }
      if (currentCharIdx < prevIdx) {
        return false;
      }
    } else {
      wordToCheck++;
      prevIdx = order.indexOf(words[wordToCheck][charIdx]);
    }
  }
  return true;
};

// console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))
// console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"))
// console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"))
console.log(
  isAlienSorted(
    [
      "xpzurqpjimcqjp",
      "cpoymyvqrrkw",
      "jhvxpqgq",
      "escrktgzqpoze",
      "tamdkoyacprfyj",
      "tcgkdjerydm",
      "czhzgfcvrmudxd",
      "qwbegrhcavi",
      "yvluklzflkjq",
      "pwawsolwzognjx",
    ],
    "xchaiwgovseknjuztmrydflqbp"
  )
);
