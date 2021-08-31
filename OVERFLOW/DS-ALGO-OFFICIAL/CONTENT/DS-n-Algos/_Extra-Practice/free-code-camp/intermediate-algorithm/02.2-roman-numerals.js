function convertToRoman(num) {
  const rNums = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const numeral = [];

  //if it's on the list, we're done
  if (rNums.hasOwnProperty(num)) {
    numeral.push(rNums[num]);
  } else {
    //the key is length
    if (num.toString().length == 4) {
      //if it's in the thousands...
      var decVal = Math.floor(num / 1000);
      numeral.push(rNums[1000].repeat(decVal)); //numeral array begins with M's
      num = num.toString().substring(1); //redefine num as the remaining digits to process
    } //end it's in the thousanads

    if (num.toString().length == 3) {
      //if it's in the hundreds...
      var decVal = Math.floor(num / 100);
      if (rNums.hasOwnProperty(decVal * 100)) {
        //and on the list...
        numeral.push(rNums[decVal * 100]); //add it to the numeral array
      } //if it ain't on the list (it's 200,300,600,700,800)
      else if (decVal < 4) {
        numeral.push(rNums[100].repeat(decVal)); //add CC or CCC to numeral
      } else if (decVal > 5) {
        numeral.push(rNums[500] + rNums[100].repeat(decVal - 5)); //add D + C, CC, or CCC to array
      }
      num = num.toString().substring(1); //redefine num as the remaining digits to process
    } //end it's in the hundreds

    if (num.toString().length == 2) {
      //if it's in the tens...
      var decVal = Math.floor(num / 10);
      if (rNums.hasOwnProperty(decVal * 10)) {
        //and it's on the list...
        numeral.push(rNums[decVal * 10]); //add it to the numeral array
      } //if it ain't on the list (it's 20,30,60,70,80)
      else if (decVal < 4) {
        numeral.push(rNums[10].repeat(decVal)); //add XX or XXX to numeral
      } else if (decVal > 5) {
        numeral.push(rNums[50] + rNums[10].repeat(decVal - 5)); //add L + X, XX, or XXX to array
      }
      num = num.toString().substring(1); //redefine num as the remaining digits to process
    } //end it's in the tens

    if (num.toString().length == 1) {
      //if it's single digit
      if (rNums.hasOwnProperty(num)) {
        //if it's on the list
        numeral.push(rNums[num]);
      } //if it ain't on the list (it's 2,3,6,7,8)
      else if (num < 4) {
        numeral.push(rNums[1].repeat(num)); //add II or III to numeral
      } else if (num > 5) {
        numeral.push(rNums[5] + rNums[1].repeat(num - 5)); //add V + I, II, or III to array
      }
    }
  }

  return numeral.join("");
} //end convertToRoman

console.log(convertToRoman(1000));
