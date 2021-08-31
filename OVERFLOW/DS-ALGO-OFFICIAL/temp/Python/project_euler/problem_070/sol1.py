"""
Project Euler Problem 70: https://projecteuler.net/problem=70

Euler's Totient function, φ(n) [sometimes called the phi function], is used to
determine the number of positive numbers less than or equal to n which are
relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than
nine and relatively prime to nine, φ(9)=6.

The number 1 is considered to be relatively prime to every positive number, so
φ(1)=1.

Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation
of 79180.

Find the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and
the ratio n/φ(n) produces a minimum.

-----

This is essentially brute force. Calculate all totients up to 10^7 and
find the minimum ratio of n/φ(n) that way. To minimize the ratio, we want
to minimize n and maximize φ(n) as much as possible, so we can store the
minimum fraction's numerator and denominator and calculate new fractions
with each totient to compare against. To avoid dividing by zero, I opt to
use cross multiplication.

References:
Finding totients
https://en.wikipedia.org/wiki/Euler's_totient_function#Euler's_product_formula
"""
from typing import List


def get_totients(max_one: int) -> List[int]:
    """
    Calculates a list of totients from 0 to max_one exclusive, using the
    definition of Euler's product formula.

    >>> get_totients(5)
    [0, 1, 1, 2, 2]

    >>> get_totients(10)
    [0, 1, 1, 2, 2, 4, 2, 6, 4, 6]
    """
    totients = [0] * max_one

    for i in range(0, max_one):
        totients[i] = i

    for i in range(2, max_one):
        if totients[i] == i:
            for j in range(i, max_one, i):
                totients[j] -= totients[j] // i

    return totients


def has_same_digits(num1: int, num2: int) -> bool:
    """
    Return True if num1 and num2 have the same frequency of every digit, False
    otherwise.

    digits[] is a frequency table where the index represents the digit from
    0-9, and the element stores the number of appearances. Increment the
    respective index every time you see the digit in num1, and decrement if in
    num2. At the end, if the numbers have the same digits, every index must
    contain 0.

    >>> has_same_digits(123456789, 987654321)
    True

    >>> has_same_digits(123, 12)
    False

    >>> has_same_digits(1234566, 123456)
    False
    """
    digits = [0] * 10

    while num1 > 0 and num2 > 0:
        digits[num1 % 10] += 1
        digits[num2 % 10] -= 1
        num1 //= 10
        num2 //= 10

    for digit in digits:
        if digit != 0:
            return False

    return True


def solution(max: int = 10000000) -> int:
    """
    Finds the value of n from 1 to max such that n/φ(n) produces a minimum.

    >>> solution(100)
    21

    >>> solution(10000)
    4435
    """

    min_numerator = 1  # i
    min_denominator = 0  # φ(i)
    totients = get_totients(max + 1)

    for i in range(2, max + 1):
        t = totients[i]

        if i * min_denominator < min_numerator * t and has_same_digits(i, t):
            min_numerator = i
            min_denominator = t

    return min_numerator


if __name__ == "__main__":
    print(f"{solution() = }")
