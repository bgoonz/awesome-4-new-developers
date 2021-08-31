class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    const letter = word[0];
    if (!(letter in root.children)) root.children[letter] = new Node();

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root = this.root) {
    if (word.length === 0) return root.isTerminal;

    return word[0] in root.children
      ? this.search(word.slice(1), root.children[word[0]])
      : false;
  }

  startsWith(prefix, root = this.root) {
    if (prefix.length === 0) return true;

    return prefix[0] in root.children
      ? this.startsWith(prefix.slice(1), root.children[prefix[0]])
      : false;
  }
}
