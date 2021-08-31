function isValid(str) {
  if (/^[^\\\/\:\*\?\"\<\>\|\.]+(\.[^\\\/\:\*\?\"\<\>\|\.]+)+$/.test(str)) {
    return "valid file name";
  } else {
    return "this file name is invalid";
  }
}

isValid("nameFromPath.js");
console.log("isValid('nameFromPath.js'): ", isValid("nameFromPath.js"));
//isValid('nameFromPath.js'):  true
isValid("you just lost the game");
console.log("isValid('you just lost the game'): ", isValid("com"));

/*
node vaid-filename.js
isValid('nameFromPath.js'):  valid file name
isValid('you just lost the game'):  this file name is invalid

\___________________________________________________
bryan_dir:is-valid-file-name_exitstatus:0 ====>
*/
str.substring(0, str.lastIndexOf("/"));
