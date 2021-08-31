function countchar(string, ch) {
  let count = 0;
  string = string.toUpperCase();
  ch = ch.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      count++;
    }
  }
  return count;
}

console.log(countchar("BBBC", "b"));
console.log(countchar("kakkerlak", "k"));
