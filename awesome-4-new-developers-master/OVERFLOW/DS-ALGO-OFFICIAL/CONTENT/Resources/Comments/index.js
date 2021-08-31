let express = require("express");
let app = require("express")();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
const fs = require("fs");
let storageJSON = fs.readFileSync("storage.json");
let storageArray = [];
const bodyParser = require("body-parser");
let Filter = require("bad-words"),
  filter = new Filter();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (req, res) => {
  var niceMessages = [];
  for (let step = 0; step < storageArray.length; step++) {
    niceMessages.push(storageArray[step].message);
  }
  updateJSONArray();
  res.render(__dirname + "/index.html", { messages: niceMessages });
});

io.on("connection", (socket) => {
  updateJSONArray();
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("message", (content) => {
    if (filter.isProfane(content) || content.includes("replit.com")) return;
    io.emit("message", content);
    writeJSON(content);
  });
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});

function writeJSON(value) {
  let obj = { message: value };
  let storage = JSON.parse(storageJSON);
  storageArray.push(obj);
  let newStorageJSON = JSON.stringify(storageArray);
  fs.writeFileSync("storage.json", newStorageJSON);
  updateJSONArray();
}

function updateJSONArray() {
  storageJSON = fs.readFileSync("storage.json");
  storageArray = [];
  let storage = JSON.parse(storageJSON);
  let storageLength = Object.keys(storage).length;
  for (let step = 0; step < storageLength; step++) {
    storageArray.push({ message: storage[step].message });
  }
}

//io.emit("usercount", io.engine.clientsCount);
