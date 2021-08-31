function pairElement(str) {
  const pairThis = str.split("");
  const dna = [];
  for (let i = 0; i < pairThis.length; i++) {
    if (pairThis[i] == "C") {
      var dnaPair = [];
      dnaPair.push(pairThis[i], "G");
      dna.push(dnaPair);
    } else if (pairThis[i] == "G") {
      var dnaPair = [];
      dnaPair.push(pairThis[i], "C");
      dna.push(dnaPair);
    } else if (pairThis[i] == "A") {
      var dnaPair = [];
      dnaPair.push(pairThis[i], "T");
      dna.push(dnaPair);
    } else if (pairThis[i] == "T") {
      var dnaPair = [];
      dnaPair.push(pairThis[i], "A");
      dna.push(dnaPair);
    }
  }
  return dna;
}

console.log(pairElement("GCG"));
