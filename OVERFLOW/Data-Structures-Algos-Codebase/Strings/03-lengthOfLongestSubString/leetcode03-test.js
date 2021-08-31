const lengthOLSS = require("./length-of-longest-substr.js");
s = "abcabcbb";
s1 = "bbbbb";
s2 = "pwwkew";

console.log("lengthOLSS(s): ", lengthOLSS(s));

console.log("lengthOLSS( s1 ): ", lengthOLSS(s1));

console.log("lengthOLSS(s2): ", lengthOLSS(s2));
/*
node leetcode03-test.js
lengthOLSS(s):  3
lengthOLSS( s1 ):  1
lengthOLSS(s2):  3
*/
