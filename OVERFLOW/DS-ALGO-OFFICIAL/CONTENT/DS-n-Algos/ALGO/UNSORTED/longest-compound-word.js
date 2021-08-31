export default (list) => {
  const prefixes = {};
  const possibleWords = [];
  let longestWords = [];
  let longestLength = 0;

  // Inserts a word into the prefix tree structure.
  const insertWord = (word) => {
    let index = 0;
    let active = prefixes;
    let char;

    while ((char = word[index++])) {
      active = active[char] = active[char] || {};
    }

    active.word = true;
  };

  // Finds the longest prefix we can make using the word.
  const findPrefixes = (word) => {
    let prefix = "";
    const found = [];
    let index = 0;
    let active = prefixes;
    let char;

    while ((char = word[index++])) {
      if (!active[char]) {
        break;
      }
      // Move to the next character and add to the prefix.
      active = active[char];
      prefix += char;
      // If this index is a word, set it found to true.
      active.word && found.push(prefix);
    }

    return found;
  };

  // Loop through each of words in the list, adding them to the prefixes tree
  list.forEach((word) => {
    let prefix;

    // If we can find a closest possible word, it may be possible to create a
    // compound word - but we won't be able to check until we reach the end.
    if ((prefix = findPrefixes(word)) && prefix.length) {
      possibleWords.push([word, prefix]);
    }

    // Insert the word into the prefix tree.
    insertWord(word);
  });

  possibleWords.forEach((possible) => {
    const word = possible[0];
    const prefixes = possible[1];
    let found = false;

    const findCompoundWord = (suffix) => {
      // Find all future prefixes and continue search.
      if (suffix) {
        return findPrefixes(suffix).forEach((prefix) => {
          !found && loopPrefixes(prefix, suffix);
        });
      }

      // If the suffix doesn't exist, it must be because we have found an
      // exact compound word.
      if (word.length > longestLength) {
        longestWords = [];
        longestLength = word.length;
      }

      // If the word is equal to the length of the current longest word, push it
      // into the result array, then set found to be true so we can break the
      // other recursions.
      if (word.length === longestLength) {
        found = true;
        longestWords.push(word);
      }
    };

    var loopPrefixes = ({ length }, word) => {
      findCompoundWord(word.substr(length));
    };

    prefixes.forEach((prefix) => {
      loopPrefixes(prefix, word);
    });
  });

  return longestWords;
};
