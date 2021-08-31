function whatIsInAName(collection, source) {
  // What's in a name?
  const arr = [];
  // Only change code below this line
  //access object like this...
  for (prop in source) {
    var sourceProp = prop;
    var sourceVal = source[prop];
  }

  //iterate through array like this...
  for (let i = 0; i < collection.length; i++) {
    //check each object in an array like this...
    if (
      collection[i].hasOwnProperty(sourceProp) &&
      collection[i][sourceProp] == sourceVal
    ) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
