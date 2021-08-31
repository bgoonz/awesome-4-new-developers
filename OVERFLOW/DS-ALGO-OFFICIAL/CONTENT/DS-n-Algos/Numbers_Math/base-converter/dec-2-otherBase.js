class Stack {
  constructor() {
    this.count = 0;
    this.contents = {};
  }

  push(el) {
    this.contents[this.count] = el;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.contents[this.count];
    delete this.contents[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.contents[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    this.contents = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.contents[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.contents[i]}`;
    }
    return objString;
  }
}
//-------------------------------------------

function baseConverter(decNumber, base) {
  const lifoRemainder = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    lifoRemainder.push(rem);
    number = Math.floor(number / base);
  }

  while (!lifoRemainder.isEmpty()) {
    //stack instance method
    baseString += digits[lifoRemainder.pop()];
  }

  return baseString;
}
baseConverter(99, 2);
console.log("baseConverter ( 99, 2 ) : ", baseConverter(99, 2));
//baseConverter ( 99, 2 ) :  1100011
