function confirmEnding(str, target) {
  // length of target string, substr length - length of target, ===
  if (target === str.substr(0 - target.length)) {
    return true;
  } else return false;
}

console.log(confirmEnding("Bastian", "n"));
