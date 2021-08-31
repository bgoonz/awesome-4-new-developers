function replaceWords(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
console.log(replaceWords("Let us go to the store", "store", "mall")); //"Let us go to the mall"
console.log(replaceWords("He is Sleeping on the couch", "Sleeping", "sitting")); //"He is Sitting on the couch"
console.log(replaceWords("His name is Tom", "Tom", "john"));
//"His name is John"
