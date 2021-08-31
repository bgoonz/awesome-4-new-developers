/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function Node(val = null) {
  this.val = val;
  this.isEndOfWord = false;
  this.children = new Map();
}

var WordDictionary = function () {
  this.root = new Node();
};

WordDictionary.prototype.display = function (word) {
  console.table(this.root);
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const char of word) {
    if (!node.children.get(char)) {
      node.children.set(char, new Node(char));
    }
    node = node.children.get(char);
  }
  node.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let result = false;
  const helper = (word, index, node) => {
    if (!node) {
      return false;
    }
    if (word.length == index && node.isEndOfWord) {
      return true;
    }
    if (word[index] === ".") {
      for (const [k, v] of node.children) {
        if (helper(word, index + 1, v)) {
          return true;
        }
      }
    } else {
      if (!node.children.get(word[index])) {
        return false;
      } else {
        return helper(word, index + 1, node.children.get(word[index]));
      }
    }
    return false;
  };
  result = helper(word, 0, this.root);
  return result;
};

test("designAddAndSearchWordsDataStructure", () => {
  let wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  wordDictionary.display();
  wordDictionary.search("pad");
  expect(wordDictionary.search("pad")).toEqual(false);
  expect(wordDictionary.search("bad")).toEqual(true);
  expect(wordDictionary.search(".ad")).toEqual(true);
  expect(wordDictionary.search("b..")).toEqual(true);
});
