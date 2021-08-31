/**
 * Created by Bryan Guner
 * Copyright © 2018 ashish.me
 * bryan.guner@gmail.com
 */

/* Given two strings, a and b , that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

Input :

test cases,t
two strings a and b, for each test case
Output:

Desired O/p

Constraints :

string lengths<=10000 */

const stdInput = `1
cde
abc`;

function main(input) {
  const inputArray = input.split("\n");
  console.log(inputArray);
  const charDict = {};
  for (let i = 1; i <= Number(inputArray[0]); i++) {
    const firstWord = inputArray[i].split("");
    const secondWord = inputArray[i + 1].split("");
    firstWord.forEach((value) => {
      charDict[value] = (charDict[value] || 0) + 1;
    });
    secondWord.forEach((value) => {
      charDict[value] = (charDict[value] || 0) - 1;
    });
    console.log(firstWord);
    console.log(secondWord);
    console.log(charDict);
    console.log(
      Object.keys(charDict).reduce((sum, key) => sum + charDict[key], 2)
    );
  }
}

main(stdInput);
