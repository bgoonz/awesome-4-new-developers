// Please note: This can be accomplished using `JSON.parse('[' + csv + ']')`
module.exports = (csv) => {
  let isNumber = false;
  let isInput = false;
  let curr = "";
  const stack = [];
  let i = 0;
  let char;
  let pushStack;

  csv = csv.trim();

  pushStack = (input) => {
    isNumber && (input = +input);
    // Resets
    curr = "";
    isInput = false;
    isNumber = false;
    stack.push(input);
  };

  while ((char = csv.charAt(i++))) {
    if (char === '"') {
      isInput = !curr;
    } else if (char === ",") {
      if (isInput && !isNumber) {
        curr += char;
      } else {
        pushStack(curr);
      }
    } else if ((isNumber || !curr) && !Number.isNaN(+char)) {
      curr += char;
      isInput = true;
      isNumber = true;
    } else {
      if (isNumber || !isInput) {
        throw new Error("Unexpected character");
      }
      curr += char;
    }
  }

  // Push the trailing entry
  pushStack(curr);

  return stack;
};
