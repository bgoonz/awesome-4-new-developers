#!/usr/bin/env node

/**
 * It should be run with the form `./head.js file-path`.
 * If the user does not provide exactly one argument, write a "using" message
   which shows the user how to properly use your copy utility.
 * If the `file-path` does not point to a file, write an error message and exit
   with a status code of 17.
 * If everything succeeds, it will print up to the first ten lines of the file.
 */

const fs = require("fs");

if (process.argv.length !== 3) {
  console.log("USAGE: ./touch.js path");
  process.exit();
}

const target = process.argv[2];

fs.stat(target, (err, stats) => {
  if (err || stats.isDirectory()) {
    console.error(`Cannot read the first 10 lines of: ${target}`);
    process.exit(17);
  }

  if (stats.isFile()) {
    const readable = fs.createReadStream(target, "utf-8");
    const handler = checkChunk(readable);
    readable.on("data", handler);
    readable.on("end", handler);
  }
});

const data = [];
function checkChunk(readable) {
  let numberOfNewlines = 0;
  return (chunk) => {
    if (numberOfNewlines === 10) {
      return;
    }
    if (chunk === null || chunk === undefined) {
      return console.log(data.join("").trim());
    }
    for (let i = 0; i < chunk.length; i += 1) {
      if (chunk[i] === "\n") {
        numberOfNewlines += 1;
      }
      if (numberOfNewlines === 10) {
        console.log(data.join("") + chunk.substring(0, i));
        readable.destroy();
        return;
      }
    }
    data.push(chunk);
  };
}
