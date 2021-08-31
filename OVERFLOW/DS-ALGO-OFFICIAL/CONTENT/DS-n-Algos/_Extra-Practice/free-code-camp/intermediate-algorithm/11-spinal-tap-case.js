function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); //find patterns of aA, insert whitespace between!
  return (str = str.replace(/[\s\b_]/g, "-").toLowerCase());
}

console.log(spinalCase("This_Is Spinal Tap thisIsSpinalTap"));
