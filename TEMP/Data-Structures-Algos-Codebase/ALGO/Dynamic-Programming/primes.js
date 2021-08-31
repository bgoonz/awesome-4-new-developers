// Dynamic programming - primes

"use strict";
{
  const memory = [2, 3, 5, 7];

  test_primes();

  function test_primes() {
    console.log([nthPrime(5), nthPrime(15), nthPrime(50), nthPrime(500)]);
    console.log(memory);
  }

  // Idea is we use existing primes as dividers for testing the next prime

  function nthPrime(n) {
    if (n < 0) {
      throw new TypeError("N > 0");
    }
    if (n < 4) {
      return memory[n];
    }
    const lastPrime = memory.pop();
    memory.push(lastPrime);
    let nextCandidate = lastPrime + 2;
    testCandidates: while (memory.length < n) {
      const maxDivider = Math.floor(Math.sqrt(nextCandidate));
      let i = 0;
      testDividers: while (memory[i] <= maxDivider) {
        if (nextCandidate % memory[i] == 0) {
          nextCandidate += 2;
          continue testCandidates;
        }
        i += 1;
      }
      const nextPrime = nextCandidate;
      memory.push(nextPrime);
      if (memory.length < n) {
        nextCandidate = nextPrime + 2;
        continue testCandidates;
      } else {
        break;
      }
    }
    return memory[n - 1];
  }
}
