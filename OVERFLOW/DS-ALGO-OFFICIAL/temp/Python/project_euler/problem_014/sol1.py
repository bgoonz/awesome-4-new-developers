"""
Problem 14: https://projecteuler.net/problem=14

Problem Statement:
The following iterative sequence is defined for the set of positive integers:

    n → n/2 (n is even)
    n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?
"""


def solution(n: int = 1000000) -> int:
    """Returns the number under n that generates the longest sequence using the
    formula:
    n → n/2 (n is even)
    n → 3n + 1 (n is odd)

    # The code below has been commented due to slow execution affecting Travis.
    # >>> solution(1000000)
    # 837799
    >>> solution(200)
    171
    >>> solution(5000)
    3711
    >>> solution(15000)
    13255
    """
    largest_number = 0
    pre_counter = 0

    for input1 in range(n):
        counter = 1
        number = input1

        while number > 1:
            if number % 2 == 0:
                number /= 2
                counter += 1
            else:
                number = (3 * number) + 1
                counter += 1

        if counter > pre_counter:
            largest_number = input1
            pre_counter = counter
    return largest_number


if __name__ == "__main__":
    print(solution(int(input().strip())))
