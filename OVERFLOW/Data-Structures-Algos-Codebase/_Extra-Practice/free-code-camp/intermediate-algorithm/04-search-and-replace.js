function myReplace(str, before, after) {
  const strArr = str.split(" "); //give me an array to work with
  const index = strArr.indexOf(before); //set var for index of the word to swap
  if (strArr[index][0] == strArr[index][0].toUpperCase()) {
    //if word is uppercase...
    after = after[0].toUpperCase() + after.substring(1); //replace with uppercase word
  }
  if (index != -1) {
    //if the search word matches (doesn't handle case match)
    strArr.splice(index, 1, after);
  }

  return strArr.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
