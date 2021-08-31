function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3));
