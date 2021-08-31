import fs from "fs";

const file = fs.readFileSync(process.argv[2]).toString();

console.log(file.split("\n").length - 1);
