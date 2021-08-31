function translatePigLatin(str) {
  const first = str[0];
  const vowels = ["a", "e", "i", "o", "u", "y"]; //ignores that 'y' is only sometimes a vowel...
  if (!vowels.includes(first)) {
    //if the first letter is not a vowel
    const findVowel = [];
    for (let i = 0; i < vowels.length; i++) {
      //get first consonant or consonant cluster
      if (str.includes(vowels[i])) {
        findVowel.push(str.indexOf(vowels[i]));
      }
    }
    const firstVowelIndex = findVowel.sort()[0];
    return `${
      str.substring(firstVowelIndex) + str.substring(0, firstVowelIndex)
    }ay`;
  }
  return `${str}way`;
}

console.log(translatePigLatin("glove"));
