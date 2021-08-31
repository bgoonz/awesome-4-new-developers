function sumPrimes(num) {
  //prime = > 1, only divisible by 1 and itself (without decimals)
  //loop from 2 to num, if % = 0 it's not prime
  let sum = 2;
  for (let i = 2; i <= num; i++) {
    //iterate from 2-10
    console.log("i:", i);
    for (let n = 2; n < i; n++) {
      //check each number from 2-10
      console.log("n:", n);
      if (i % n == 0) {
        //it's not prime
        console.log("not a prime");
        break; //stop checking
      }
      if (n == i - 1) {
        //if we finished checking i
        sum += i;
      }
    }
  }
  return sum;
}

console.log(sumPrimes(10));

//can start at 3 and increment by 2 to avoid even numbers
//prime numbers have no divisors less than square root
