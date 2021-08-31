const nameFPath = function (path) {
  const name = path.split("/").pop();
  return name;
};
const p = "DS-n-Algos/Lists/simple-singly-linked-list.js";

console.log("nameFPath(p): ", nameFPath(p));
