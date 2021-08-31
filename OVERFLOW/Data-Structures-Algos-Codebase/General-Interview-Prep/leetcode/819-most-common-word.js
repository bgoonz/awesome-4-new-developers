/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a paragraph and a list of banned words, return the most
 * frequent word that is not in the list of banned words. It is
 * guaranteed there is at least one word that isn't banned, and
 * that the answer is unique.
 *
 * Words in the list of banned words are given in lowercase, and
 * free of punctuation.  Words in the paragraph are not case
 * sensitive. The answer is in lowercase.
 */

function mostCommonWord(paragraph, banned) {
  let words = paragraph
    .toLowerCase()
    .replace(/[!?',;\.]/g, " ")
    .trim()
    .split(/\s+/g)
    .filter((w) => banned.indexOf(w) === -1);
  let map = {};
  for (let index = 0; index < words.length; index++) {
    map[words[index]] = (map[words[index]] || 0) + 1;
  }
  return Object.keys(map).sort((a, b) => map[b] - map[a])[0];
}

test("most Common Word", () => {
  expect(
    mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
      "hit",
    ])
  ).toEqual("ball");
});
