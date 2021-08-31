module.exports = function nextPalindrome(number) {
  const numberString = "" + number;
  const numberLength = numberString.length;
  const oddDigits = numberLength & 1;
  const leftHalf = numberString.substr(0, ~~(numberLength / 2));
  const middleNumber = numberString.charAt(Math.ceil(numberLength / 2));
  let increment;
  let newNumber;
  let reverseString;

  reverseString = (string) => {
    return string.length > 1 ? string.split("").reverse().join("") : string;
  };

  if (oddDigits) {
    increment = Math.pow(10, numberLength / 2);
    newNumber = +(leftHalf + middleNumber + reverseString(leftHalf));
  } else {
    increment = 1.1 * Math.pow(10, numberLength / 2);
    newNumber = +(leftHalf + reverseString(leftHalf));
  }

  if (newNumber > number) {
    return newNumber;
  }

  if (middleNumber === "9") {
    return nextPalindrome(+numberString[0] * Math.pow(10, numberLength));
  } else {
    return newNumber + increment;
  }
};
