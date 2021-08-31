/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the ransom
 * note can be constructed from the magazines ; otherwise, it will return false
 *
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
 *
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 */

function ransomeNote(note, mag) {
  mag.split("").forEach((char) => {
    note = note.replace(char, "");
  });
  return note.length === 0;
}

test("ransome Note", () => {
  expect(ransomeNote("a", "b")).toEqual(false);
  expect(ransomeNote("aa", "ab")).toEqual(false);
  expect(ransomeNote("aa", "aab")).toEqual(true);
  expect(ransomeNote("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")).toEqual(false);
});
