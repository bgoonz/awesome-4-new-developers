/*
Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.



Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""
*/

const removeVowels = (S) => {
  let vowels = "aeiou";
  return S.split("")
    .filter((char) => !vowels.includes(char))
    .join("");
};
