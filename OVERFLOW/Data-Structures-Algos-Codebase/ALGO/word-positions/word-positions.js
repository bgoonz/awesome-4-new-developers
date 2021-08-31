module.exports = (text) => {
  const trie = {}; // Start the active structure as the root trie structure
  let pos = 0;
  let active = trie;

  // Suffix a space after the text to make life easier
  text += " ";

  // Loop through the input text adding it to the trie structure
  for (let i = 0; i < text.length; i++) {
    // When the character is a space, restart
    if (text[i] === " ") {
      // If the current active doesn't equal the root, set the position
      if (active !== trie) {
        (active.positions = active.positions || []).push(pos);
      }
      // Reset the positions and the active part of the data structure
      pos = i;
      active = trie;
      continue;
    }

    // Set the next character in the structure up
    active[text[i]] = active[text[i]] || {};
    active = active[text[i]];
  }

  // Return a function that accepts a word and looks it up in the trie structure
  return (word) => {
    let i = -1,
      active = trie;

    while (word[++i]) {
      if (!active[word[i]]) {
        return [];
      }
      active = active[word[i]];
    }

    return active.positions;
  };
};
