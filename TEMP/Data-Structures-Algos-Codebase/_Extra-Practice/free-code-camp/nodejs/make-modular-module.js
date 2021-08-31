const fs = require("fs"),
  filteredFiles = [];

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    for (file in files) {
      if (files[file].includes("." + ext)) {
        filteredFiles.push(files[file]);
      }
    }
    callback(null, filteredFiles);
  });
};
