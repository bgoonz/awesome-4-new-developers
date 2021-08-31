function findLongestWordLength(string) {
  return Math.max(...string.split(" ").map(({ length }) => length));
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//DESCRIPTION
//string.split(" ") separates the string into arrays of words taking spaces as a separator.ex: ["The", "quick", "brown", ....]
//then .map(word => word.length) returns the array with lengths of each word. EX:[3,5,...]
//Finally with Math.max(...string) returns the maximum number from the array of lengths.

// SOLUTION1
// function findLongestWordLength(string){
//     var word = string.split(" ");
//   var max = 0;
//    for (let i=0; i < word.length; i++){
//       if (word[i].length>max){
//         max = word[i].length
//       }
//     }
//     return max;
//   }

//Take string and convert into array of words
//Variable to track max length
//loop over each array of words
//compare the current word to previous one
//return max
