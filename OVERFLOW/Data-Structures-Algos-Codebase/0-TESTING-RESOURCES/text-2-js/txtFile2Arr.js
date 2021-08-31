const fs = require("fs");
let filename = "./streetNames.txt";
let finalArr = [];
fs.readFile(filename, (err, text) => {
  if (err) throw err;

  const arr = text.toString().replace(/\r\n/g, "\n").split("\n");

  for (let i of arr) {
    console.log(i);
    finalArr.push(`"${i}"`);
  }
  console.log("finalArr: ", finalArr);
  fs.writeFile(
    `${filename}.js`,
    `let ${filename
      .slice(2)
      .split(".")
      .slice(0, -1)
      .join(".")}Arr = [${finalArr}];`,
    (err) => {
      // In case of a error throw err.
      if (err) throw err;
    }
  );
});
