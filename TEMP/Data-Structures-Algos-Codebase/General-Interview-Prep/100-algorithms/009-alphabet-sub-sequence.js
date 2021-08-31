/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Check whether the given string is a subsequence of the plaintext alphabet.

Example

For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false

For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.
 */

function alphabetSubSequence(values) {
  const chars = values.split("");
  const charValues = [];

  chars.forEach((character) => {
    charValues.push(character.charAt(0));
  });

  if ([...new Set(charValues)].length !== chars.length) {
    return false;
  }

  for (let index = 0; index < charValues.length; index++) {
    if (chars[index] >= charValues[index + 1]) {
      return false;
    }
  }

  return true;
}

test("alphabet Sub Sequence", () => {
  expect(alphabetSubSequence("effg")).toEqual(false);
  expect(alphabetSubSequence("cdce")).toEqual(false);
  expect(alphabetSubSequence("ace")).toEqual(true);
  expect(alphabetSubSequence("bxz")).toEqual(true);
});
