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

  insertRecur(word, root = this.root) {
    const letter = word[0];
    if (!(letter in root.children)) root.children[letter] = new Node();

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insertRecur(word.slice(1), root.children[letter]);
    }
  }

  insertIter(word) {
    if (!word.length) return;
    let curNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!(letter in curNode.children)) curNode.children[letter] = new Node();

      curNode = curNode.children[letter];
    }
    curNode.isTerminal = true;
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0) return root.isTerminal;

    return word[0] in root.children
      ? this.searchRecur(word.slice(1), root.children[word[0]])
      : false;
  }

  searchIter(word) {
    if (!word.length && this.root.isTerminal) return true;
    let curNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in curNode.children)) return false;
      curNode = curNode.children[word[i]];
    }
    return curNode.isTerminal;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (prefix.length === 0) {
      const words = [];
      if (root.isTerminal) words.push("");

      for (let letter in root.children) {
        const node = root.children[letter];
        const suffixes = this.wordsWithPrefix(prefix, node);
        words.push(...suffixes.map((suffix) => letter + suffix));
      }

      return words;
    } else {
      const node = root.children[prefix[0]];
      if (node) {
        const suffixes = this.wordsWithPrefix(prefix.slice(1), node);
        return suffixes.map((suffix) => prefix[0] + suffix);
      } else {
        return [];
      }
    }
  }
}

module.exports = {
  Node,
  Trie,
};
