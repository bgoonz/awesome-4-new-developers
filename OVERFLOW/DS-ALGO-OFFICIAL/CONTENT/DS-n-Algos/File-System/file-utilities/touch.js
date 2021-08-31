#!/usr/bin/env node

/**
 * It should be run with the form `./touch.js file-path`.
 * If the user does not provide exactly one argument, write a "using" message
   which shows the user how to properly use your copy utility.
 * If the `file-path` points to a directory, write an error message and exit with
   a status code of 2.
 * If everything succeeds, don't print anything.
 */

const fs = require("fs");

if (process.argv.length !== 3) {
  console.log("USAGE: ./touch.js path");
  process.exit();
}

const target = process.argv[2];

fs.stat(target, (err, stats) => {
  if (err && err.code === "ENOENT") {
    return fs.writeFile(target, "", (err) => {
      if (err) throw err;
    });
  }

  if (err) throw err;

  if (stats.isDirectory()) {
    console.error(`Cannot touch directories: ${target}`);
    process.exit(2);
  }

  if (stats.isFile()) {
    return fs.utimes(target, stats.atime, new Date(), (err) => {
      if (err) throw err;
    });
  }
});
