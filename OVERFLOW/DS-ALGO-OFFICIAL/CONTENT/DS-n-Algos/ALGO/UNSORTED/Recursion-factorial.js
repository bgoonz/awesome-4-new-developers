function fact(n) {
  if (n >= 1) {
    return n * fact(n - 1);
  } else {
    return 1;
  }
}
console.log(fact(3)); // 3*fact(2) = 3*2!=3*2*fact(1) = 3*2*fact(1)= 3*2*fact(0)=3*2*1

//5!=5 * 4 * 3 * 2 * 1
//4!=4 * 3 * 2 * 1
//1!=1
//0!=1
//n!= n * (n-1) * (n-2) * ...*1
//(n-1)!= (n-1) * (n-2) * ..*1
//n! = n * (n-1)! } if n >= 1 , n! = 1 if n = 0
