import fs from "fs";
import listmodule from "./make-modular-module";

listmodule(process.argv[2], process.argv[3], (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    console.log(file);
  });
});
