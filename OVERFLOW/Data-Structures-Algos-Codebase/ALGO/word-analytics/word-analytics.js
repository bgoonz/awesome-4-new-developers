process.stdin.resume();
process.stdin.setEncoding("utf8");

// Use an object to map the characters to their count
const characters = {};
const words = {};
const wordsParagraph = {};

const filterObject = (input, callback) => {
  const output = {};

  Object.keys(input).forEach((value) => {
    callback(input[value], value, input) && (output[value] = input[value]);
  });

  return output;
};

const sortByCount = (object) => {
  return Object.keys(object)
    .map((input) => {
      return {
        value: input,
        count: object[input],
      };
    })
    .sort((a, b) => {
      // Sort descending
      return b.count - a.count;
    })
    .map((input) => {
      return input.value;
    });
};

const isWordChar = (char) => {
  const charCode = char.charCodeAt(0);
  // Characters code not between A-Z
  return !(charCode < 65 || charCode > 90);
};

// On each input data chunk, process it using the balance checker
process.stdin.on("data", (chunk) => {
  let word = "";
  let prevSymbol = "\n";

  for (let i = 0; i < chunk.length; i++) {
    const char = chunk[i].toUpperCase();

    // Increment the character count
    characters[char] = (characters[char] || 0) + 1;

    if (!isWordChar(char)) {
      if (word) {
        words[word] = (words[word] || 0) + 1;

        if (prevSymbol === "\n") {
          wordsParagraph[word] = (wordsParagraph[word] || 0) + 1;
        }
        word = ""; // Reset the current word
      }
      prevSymbol = char;
    } else {
      word += char;
    }
  }
});

process.stdin.on("end", () => {
  const sortedWords = sortByCount(words);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const sortedLetters = sortByCount(
    filterObject(characters, (_, char) => {
      return isWordChar(char);
    })
  );

  const sortedWordsParagraph = sortByCount(wordsParagraph);

  const totalWords = Object.keys(words).reduce((memo, word) => {
    return memo + words[word];
  }, 0);

  const totalLetters = Object.keys(characters).reduce((memo, char) => {
    return memo + (isWordChar(char) ? characters[char] : 0);
  }, 0);

  const totalSymbols = Object.keys(characters).reduce((memo, char) => {
    return memo + (/[^\w\s]/.test(char) ? characters[char] : 0);
  }, 0);

  const unusedLetters = alphabet.filter((char) => {
    return !characters[char];
  });

  const onceWords = Object.keys(words).filter((word) => {
    return words[word] === 1;
  });

  console.log(totalWords + " words");
  console.log(totalLetters + " letters");
  console.log(totalSymbols + " symbols");
  console.log(
    "Top three most common words: " + sortedWords.slice(0, 3).join(", ")
  );
  console.log(
    "Top three most common letters: " + sortedLetters.slice(0, 3).join(", ")
  );
  console.log(
    sortedWordsParagraph[0] + " is the most common first word of all paragraphs"
  );
  console.log("Words only used once: " + onceWords.join(", "));
  console.log("Letters not used in the document: " + unusedLetters.join(", "));
});
