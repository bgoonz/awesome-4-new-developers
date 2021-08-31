#!/usr/bin/env node

/**
 * It should be run with the form `./rm.js file-paths` where the user can
   specify one or more files to remove from the file system. For example, they
   could type `./rm.js original.txt` to remove one file or
   `./rm.js 1.txt 2.txt 3.txt` to remove three files.
 * If the user does provides no arguments, write a "using" message which shows
   the user how to properly use your copy utility.
 * If an error occurs during the removal of any file, throw the error provided
   to the callback.
 * If everything succeeds, don't print anything.
 */

const fs = require("fs");

const filesToRemove = process.argv.slice(2);

if (filesToRemove.length === 0) {
  console.log("USAGE: ./rm.js path[, path[, path...]]");
  process.exit();
}

function removeFiles([head, ...tail]) {
  if (head === undefined && tail.length === 0) return;
  if (head === undefined) removeFiles(tail);
  fs.unlink(head, (err) => {
    if (err) throw err;
    removeFiles(tail);
  });
}

removeFiles(filesToRemove);
