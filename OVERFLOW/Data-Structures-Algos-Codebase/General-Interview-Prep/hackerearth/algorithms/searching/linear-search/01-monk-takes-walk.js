/**
 * Created by Bryan Guner
 * Copyright © 2018 ashish.me
 * bryan.guner@gmail.com
 */

/* Today, Monk went for a walk in a garden. There are many trees in the garden and each tree has an English alphabet on it. While Monk was walking, he noticed that all trees with vowels on it are not in good state. He decided to take care of them. So, he asked you to tell him the count of such trees in the garden. 
Note : The following letters are vowels: 'A', 'E', 'I', 'O', 'U' ,'a','e','i','o' and 'u'.

Input:
The first line consists of an integer T denoting the number of test cases.
Each test case consists of only one string, each character of string denoting the alphabet (may be lowercase or uppercase) on a tree in the garden.

Output:
For each test case, print the count in a new line. */

const stdInput = `5
cdb
R
ROI
pxgyPvDsQ
xnNTH`;

function main(input) {
  const inputArray = input.split("\n");
  const numOfStrings = Number(inputArray[0]);
  for (let i = 1; i <= numOfStrings; i++) {
    const vowels = inputArray[i].match(/[aeiou]/gi) || [];
    vowels.length > 0 ? console.log(vowels.length) : console.log(0);
  }
}

main(stdInput);
