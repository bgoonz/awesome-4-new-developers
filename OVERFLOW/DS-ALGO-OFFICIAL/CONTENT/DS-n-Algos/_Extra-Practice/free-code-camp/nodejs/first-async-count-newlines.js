import fs from "fs";

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  console.log(data.toString().split("\n").length - 1);
});
