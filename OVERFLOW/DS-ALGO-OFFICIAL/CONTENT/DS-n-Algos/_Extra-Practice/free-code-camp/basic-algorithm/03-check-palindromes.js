function palindrome(str) {
  const strclean = str
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("")
    .join("");
  const strbackward = str
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  if (strclean === strbackward) {
    return true;
  } else return false;
}

console.log(palindrome("_nOpe"));
