function reverseString(str) {
  strarray = str.split("");
  strarray.reverse();
  return strarray.join("");
}

console.log(reverseString("hello"));
