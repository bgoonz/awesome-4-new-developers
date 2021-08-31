/**
 * utilities for hashing config objects.
 * basically iteratively updates hash with a JSON-like format
 */
"use strict";
exports.__esModule = true;

const doHash = require("crypto").createHash;

function hashEntity(value, hash) {
  if (!hash) hash = doHash("sha256");

  if (value instanceof Array) {
    hshArr(value, hash);
  } else if (value instanceof Object) {
    hshObj(value, hash);
  } else {
    hash.update(stringify(value) || "undefined");
  }

  return hash;
}

function hshArr(array, hash) {
  if (!hash) hash = doHash("sha256");

  hash.update("[");
  for (let i = 0; i < array.length; i++) {
    hashEntity(array[i], hash);
    hash.update(",");
  }
  hash.update("]");

  return hash;
}
hashEntity.array = hshArr;

function hshObj(object, hash) {
  if (!hash) hash = doHash("sha256");

  hash.update("{");
  Object.keys(object)
    .sort()
    .forEach((key) => {
      hash.update(JSON.stringify(key));
      hash.update(":");
      hashEntity(object[key], hash);
      hash.update(",");
    });
  hash.update("}");

  return hash;
}
hashEntity.object = hshObj;
