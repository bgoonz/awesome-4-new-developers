function preserveCamelCase(string) {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  string.forEach((c, i) => {
    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
      string = string.substr(0, i) + "-" + string.substr(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (
      isLastCharUpper &&
      isLastLastCharUpper &&
      /[a-zA-Z]/.test(c) &&
      c.toLowerCase() === c
    ) {
      string = string.substr(0, i - 1) + "-" + string.substr(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = c.toLowerCase() === c;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = c.toUpperCase() === c;
    }
  });

  return string;
}

module.exports = function (string) {
  if (arguments.length > 1) {
    string = Array.from(arguments)
      .map((x) => x.trim())
      .filter((x) => x.length)
      .join("-");
  } else {
    string = string.trim();
  }

  if (string.length === 0) {
    return "";
  }

  if (string.length === 1) {
    return string.toLowerCase();
  }

  if (/^[a-z0-9]+$/.test(string)) {
    return string;
  }

  const hasUpperCase = string !== string.toLowerCase();

  if (hasUpperCase) {
    string = preserveCamelCase(string);
  }

  return string
    .replace(/^[_.\- ]+/, "")
    .toLowerCase()
    .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
};
