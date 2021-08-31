// This code is shit. It's what I started with when I tried to solve this challenge, and I'm leaving it in as a reminder of just how many lines it took for me to realize I was going in circles trying to write an if statement for every edge case. The next file in this repo is a much more straightfoward solution, achieved after a bit of thinking.

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

  //iterate through rNums
  for (var key in rNums) {
    //see if num == any rNums, if so, print value 'cause we're done
    if (num == key) {
      return rNums[num];
    }
  } //end iterate through rNums

  //get appropriate symbols for decimal values
  let magic = 0;
  if (num > 1000) {
    magic = 1000;
  } else if (num > 100) {
    magic = 100;
  } else if (num > 10) {
    magic = 10;
  } else if (num < 4) {
    return rNums[1].repeat(num);
  }
  console.log(magic, "magick");

  //print symbols for base
  const decVal = Math.floor(num / magic);
  console.log(decVal, "decVal");
  //if decVal + 0 matches any rNums, we're halfway there...
  const byTen = decVal * 10;
  const byHundred = decVal * 100;
  console.log(byTen, byHundred);
  if (rNums.hasOwnProperty(byTen)) {
    romanBase = rNums[byTen];
  } else if (rNums.hasOwnProperty(byHundred)) {
    romanBase = rNums[byHundred];
  }
  //print the right number of decVal symbols
  //if num.length < 3, use X
  else if (num.length == 2 && num > 50) {
    console.log("length less than 3");
    romanBase = rNums[50] + rNums[magic].repeat(decVal - 5);
  }
  //if num.length >=3, use C
  else if (num.length >= 3) {
    console.log("length greater than 3");
    romanBase = rNums[100] + rNums[magic].repeat(decVal - 5);
  } else {
    var romanBase = rNums[magic].repeat(decVal);
    console.log(romanBase, "base");
  }

  //process base over 5, 50 or 500...
  if (romanBase.length > 5) {
    var baseStart = magic * 5;
    var baseEnd = rNums[magic].repeat(decVal - 5);
    romanBase = rNums[baseStart] + baseEnd;
  } else if (romanBase.length == 4) {
    var baseStart = rNums[magic];
    var baseEnd = rNums[decVal + 1];
    romanBase = baseStart + baseEnd;
  }

  //print symbols for the remainder
  const remainder = num - decVal * magic;
  console.log(remainder, "remainder");
  //iterate through rNums
  for (var key in rNums) {
    //see if remainder == any rNums, if so, we're done
    if (remainder == key) {
      romanEnd = rNums[remainder];
      return romanBase + romanEnd;
    }
  } //end iterate through rNums

  //process remainder over 10 or 1000...

  if (remainder > 100) {
    var middle = 100;
    var middleVal = Math.floor(remainder / middle);
    var romanMid = rNums[middle].repeat(middleVal);
    console.log(middleVal);
    var leftovers = remainder - middleVal * middle;
  } else if (remainder > 10) {
    var middle = 10;
    var middleVal = Math.floor(remainder / middle);
    var romanMid = rNums[middle].repeat(middleVal);
    var leftovers = remainder - middleVal * middle;
  } else if (remainder < 10) {
    var leftovers = remainder;
  }
  console.log(middleVal, "middleVal");
  console.log(middle, "middle");
  console.log(romanMid, "romanMid");
  console.log(leftovers, "leftovers");

  //process mid over 5, 50 or 500...
  if (romanMid.length > 5) {
    const midByTen = romanMid.length * 10;
    if (rNums.hasOwnProperty(midByTen)) {
      var midStart = rNums[midByTen]; //ths doesn't work
    } else {
      var midStart = (magic / 10) * 5;
      var midEnd = rNums[magic / 10].repeat(decVal - 5);
      romanMid = rNums[midStart] + midEnd;
      console.log(midStart, midEnd, "midstart and end");
    }
  } else if (romanMid.length == 4) {
    var midStart = rNums[magic / 10];
    var midEnd = rNums[(romanMid.length + 1) * 10];
    romanMid = midStart + midEnd;
  }

  //process remainder < 10
  var romanEnd = 0;
  for (var key in rNums) {
    //see if remainder == any rNums, if so, we're done
    if (leftovers == key) {
      romanEnd = rNums[leftovers];
      return romanBase + romanMid + romanEnd;
    }
  } //end iterate through rNums

  if (leftovers > 5 && leftovers < 9) {
    romanEnd = rNums[5] + rNums[1].repeat(leftovers - 5);
  } else if (leftovers < 4) {
    romanEnd = rNums[1].repeat(leftovers);
  }
  console.log(romanEnd, "end");

  if (num > 99) {
    return romanBase + romanMid + romanEnd;
  } else if (num < 99) {
    return romanBase + romanEnd;
  }
} //end convertToRoman

console.log(convertToRoman(798));
