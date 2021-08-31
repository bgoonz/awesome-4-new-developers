function titleCase(str) {
  const words = str.split(" ");
  const titleCase = [];
  // .toUpperCase() words[i].charAt(words[i].length - 1 TO words[i].length).toLowerCase()
  for (let i = 0; i < words.length; i++) {
    titleCase.push(
      words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase()
    );
  }
  return titleCase.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
