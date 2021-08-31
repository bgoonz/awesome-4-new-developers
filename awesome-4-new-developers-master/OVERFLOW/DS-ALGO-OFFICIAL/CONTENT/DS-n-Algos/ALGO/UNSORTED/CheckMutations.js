//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let arr0 = arr[0].toLowerCase().split("");
  let arr1 = arr[1].toLowerCase().split("");
  if (arr1.every((v) => arr0.includes(v))) {
    return true;
  } else {
    return false;
  }
}
console.log(mutation(["Hello", " He"]));
console.log(mutation(["ALien", "LINE"]));
