import fs from "fs";

const ext = process.argv[3].toString();

const data = fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err;
  for (file in files) {
    if (files[file].includes(`.${ext}`)) {
      console.log(files[file]);
    }
  }
});
