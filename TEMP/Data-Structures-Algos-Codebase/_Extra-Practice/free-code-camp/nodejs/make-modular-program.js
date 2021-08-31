const fs = require("fs"),
  listmodule = require("./make-modular-module");

listmodule(process.argv[2], process.argv[3], (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    console.log(file);
  });
});
