//WAP to find nth number in the fibonacci series.
//1 1 2 3 5
//f(5) = 1 + 1 + 2 + 3 + 5 = 5 => f(4) + f(3) => f(n-1)+f(n-2)
//f(3) = f(2) + f(1)
//f(2) = 1
//f(1) = 1
function fibonacci(n) {
  if (n >= 3) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    return 1;
  }
}
console.log(fibonacci(6));
// f(5)+f(4)=f(4)+f(3)+f(3)+f(2)=f(3)+f(2)+f(2)+f(1)+f(2)+f(1)+1=f(2)+f(1)+1+1+1+1+1+1 = 8
