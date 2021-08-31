const splitButIterate = (li) => {
  // [1,2,3,4,5,6,7,8]
  if (li.length < 2) return li;
  const midIdx = li.length / 2;
  splitButIterate(li.slice(0, midIdx)); // 1,2,3,4
  splitButIterate(li.slice(midIdx)); // 5,6,7,8
  li.forEach((ele) => {
    console.log(ele);
  });
};
