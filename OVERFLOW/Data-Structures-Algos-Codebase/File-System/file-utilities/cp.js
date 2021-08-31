#!/usr/bin/env node

/**
 * It should be run with the form `./cp.js source-file-path target-file-path`
 * If the user does not provide exactly two arguments, write a "using" message
   which shows the user how to properly use your copy utility.
 * If the `source-file-path` does not exist, write an error message that
   describes the problem and exit with a status code of 9.
 * If the `source-file-path` is a directory, write an error message that
   describes the problem and exit with a status code of 10.
 * If an error occurs during the copy, throw the error provided to the callback.
 * If everything succeeds, don't print anything.
 */

const fs = require("fs");

const [_, __, from, to] = process.argv;

if (!from || !to) {
  console.log("USAGE: ./cp.js «from» «to»");
  process.exit();
}

fs.stat(from, (err, stats) => {
  if (err && err.code === "ENOENT") {
    console.error(`The path ${from} does not exist.`);
    process.exit(9);
  }

  if (stats.isDirectory()) {
    console.error(`The path ${from} is a directory.`);
    process.exit(10);
  }

  fs.copyFile(from, to, (err) => {
    if (err) throw err;
  });
});
