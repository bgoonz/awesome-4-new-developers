function findLongestWord(str) {
  const arr = str.split(" ");
  const lengthlist = [];
  for (let i = 0; i < arr.length; i++) {
    lengthlist.push(arr[i].split("").length);
  }
  return Math.max(...lengthlist);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
