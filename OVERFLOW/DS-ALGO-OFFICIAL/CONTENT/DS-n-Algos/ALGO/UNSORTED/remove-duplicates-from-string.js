export default (string) => {
  let output = "";
  const hash = {};

  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      output += string[i];
    }
    hash[string[i]] = true;
  }

  return output;
};
