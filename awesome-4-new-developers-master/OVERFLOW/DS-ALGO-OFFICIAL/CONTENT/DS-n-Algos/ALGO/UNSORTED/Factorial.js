function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorial(5));
console.log(factorial(0));
