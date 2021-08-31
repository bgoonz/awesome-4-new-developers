// Use an object to map sets of brackets to their opposites
const brackets = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// On each input string, process it using the balance checker
export default (string) => {
  const stack = [];
  // Process every character on input
  for (let i = 0; i < string.length; i++) {
    if (brackets[stack[stack.length - 1]] === string[i]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return !stack.length;
};
