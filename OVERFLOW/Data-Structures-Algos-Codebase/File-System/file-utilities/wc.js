#!/usr/bin/env node

/*
 * It should be run with the form `./wc.js path`.
 * If the path does not exist, write an error message describing the error and
   exit with status code 2.
 * If the path is a directory, write an error message describing that it can't
   count the number of words in a directory. Be a little snarky about it. Exit
   with status code 14.
 * If the path is a file, count the number of characters, the number of words (as
   separated by spaces, tabs, and new lines), and lines. Output the findings in
   the following format:

     number of lines«tab»number of words«tab»number of characters
 */

const fs = require("fs");

if (process.argv.length !== 3) {
  console.log("USAGE: ./wc.js path");
  process.exit();
}

const target = process.argv[2];

fs.stat(target, (err, stats) => {
  if (err && err.code === "ENOENT") {
    console.error(`Does not exist: ${target}`);
    process.exit(2);
  }

  if (stats.isDirectory()) {
    console.error("Directories do not have words.");
    process.exit(14);
  }

  fs.readFile(target, "utf-8", (err, data) => {
    if (err) throw err;

    let chars = 0;
    let words = 0;
    let lines = 0;

    for (let i = 0; i < data.length; i += 1) {
      chars += 1;
      if (isWhitespace(data[i]) && !isWhitespace(data[i - 1])) {
        words += 1;
      }
      if (data[i] === "\n") {
        lines += 1;
      }
    }

    console.log(`${lines}\t${words}\t${chars}`);
  });
});

function isWhitespace(c) {
  return c === " " || c === "\t" || c == "\n";
}
