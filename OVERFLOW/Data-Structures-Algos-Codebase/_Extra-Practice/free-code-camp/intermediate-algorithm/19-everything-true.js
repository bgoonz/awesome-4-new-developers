function truthCheck(collection, pre) {
  const verdict = collection.map((obj) => {
    if (obj[pre]) {
      return true;
    } else {
      return false;
    }
  });
  if (verdict.indexOf(false) == -1) {
    return true;
  } else {
    return false;
  }
}

console.log(
  truthCheck(
    [
      {
        single: "double",
      },
      {
        single: NaN,
      },
    ],
    "single"
  )
);
