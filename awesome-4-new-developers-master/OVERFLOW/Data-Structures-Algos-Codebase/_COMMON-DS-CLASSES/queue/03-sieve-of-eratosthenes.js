/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

// Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to given limit.
// it returns list of primes up to specified limit.
// For example, for limit 10 it should return following list of primes:
// [2, 3, 5, 7].

const Queue = require("./01-queue-using-linked-list");

function sieveOfEratosthenes(value) {
  let qq = new Queue();

  for (let index = 2; index < value; index++) {
    qq.enqueue(index);
  }
  const primes = [];
  let q2 = new Queue();
  while (qq.size > 0) {
    const prime = qq.dequeue();
    primes.push(prime);
    while (qq.size > 0) {
      const num = qq.dequeue();
      if (num % prime !== 0) {
        q2.enqueue(num);
      }
    }
    let temp = qq;
    qq = q2;
    q2 = temp;
  }
  console.log(primes);
  return primes;
}

test("sieve Of Eratosthenes", () => {
  expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
});
