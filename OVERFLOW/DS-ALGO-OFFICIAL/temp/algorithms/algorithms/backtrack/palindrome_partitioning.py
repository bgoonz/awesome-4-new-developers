""" It looks like you need to be looking not for all palindromic substrings,
but rather for all the ways you can divide the input string
up into palindromic substrings.
(There's always at least one way,
since one-character substrings are always palindromes.)

ex)
'abcbab' => [['abcba', 'b'], ['a', 'bcb', 'a', 'b'], ['a', 'b', 'c', 'bab'], ['a', 'b', 'c', 'b', 'a', 'b']]
"""


def palindromic_substrings(s):
    if not s:
        return [[]]
    results = []
    for i in range(len(s), 0, -1):
        sub = s[:i]
        if sub == sub[::-1]:
            for rest in palindromic_substrings(s[i:]):
                results.append([sub] + rest)
    return results


"""
There's two loops.
The outer loop checks each length of initial substring
(in descending length order) to see if it is a palindrome.
If so, it recurses on the rest of the string and loops over the returned
values, adding the initial substring to
each item before adding it to the results.
"""


def palindromic_substrings_iter(s):
    """
    A slightly more Pythonic approach with a recursive generator
    """
    if not s:
        yield []
        return
    for i in range(len(s), 0, -1):
        sub = s[:i]
        if sub == sub[::-1]:
            for rest in palindromic_substrings_iter(s[i:]):
                yield [sub] + rest
