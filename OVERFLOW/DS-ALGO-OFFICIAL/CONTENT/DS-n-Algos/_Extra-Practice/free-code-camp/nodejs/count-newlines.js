import fs from "fs";

const file = fs.readFileSync(process.argv[0]);

const arr = file.toString();

console.log(arr.split("\n").length - 1);
