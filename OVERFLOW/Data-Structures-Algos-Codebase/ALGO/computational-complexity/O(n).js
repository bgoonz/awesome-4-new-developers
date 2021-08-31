const printAll = (li) => {
  li.forEach((ele) => {
    console.log(ele);
  });
};
const find = (li, value) => {
  for (let i = 0; i < li.length; i++) {
    if (li[i] === value) return true;
  }
  return false;
};
const printALot = (li) => {
  for (let i = 0; i < li.length; i++) {
    for (let j = 0; j < 300000; j++) {
      console.log(li[i]);
    }
  }
};
