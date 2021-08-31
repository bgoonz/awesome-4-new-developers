let fs = require("fs");
let path = require("path");

function read(root, filter, files, prefix) {
  prefix = prefix || "";
  files = files || [];

  let dir = path.join(root, prefix);
  if (!fs.existsSync(dir)) return files;
  if (fs.statSync(dir).isDirectory())
    fs.readdirSync(dir).forEach(function (name) {
      read(root, filter, files, path.join(prefix, name));
    });
  else files.push(prefix);

  return files;
}

//-------------------(testing)------------------------

let files = read(path.join(__dirname, "../.."), function (name) {
  return (
    name[0] !== "." && name !== "node_modules" && name !== "package-lock.json"
  );
});
console.log("files: ", files);

let data = files.join();

fs.writeFile("output.txt", data, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
