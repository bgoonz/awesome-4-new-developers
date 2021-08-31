function rot13(str) {
  // LBH QVQ VG!
  //take string, each character to unicode-13, push onto key string
  let key = "";
  for (const char in str) {
    if (
      str.charCodeAt(char) > 90 ||
      str.charCodeAt(char) < 65 ||
      str.charCodeAt(char) == 32
    ) {
      key += str[char];
    } else {
      if (str.charCodeAt(char) + 13 > 90) {
        key += String.fromCharCode(str.charCodeAt(char) - 13);
      } else {
        //if outside alphabet have to backtrack
        key += String.fromCharCode(str.charCodeAt(char) - 90 + 103);
      }
    }
  }
  return key;
}

console.log(rot13("SERR PBQR PNZC!!"));
