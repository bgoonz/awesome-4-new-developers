#!/usr/bin/env python3

"""
This is pure Python implementation of binary search algorithms

For doctests run following command:
python3 -m doctest -v binary_search.py

For manual testing run:
python3 binary_search.py
"""
import bisect
from typing import List, Optional


def bisect_left(
    sorted_collection: List[int], item: int, lo: int = 0, hi: int = -1
) -> int:
    """
    Locates the first element in a sorted array that is larger or equal to a given
    value.

    It has the same interface as
    https://docs.python.org/3/library/bisect.html#bisect.bisect_left .

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item to bisect
    :param lo: lowest index to consider (as in sorted_collection[lo:hi])
    :param hi: past the highest index to consider (as in sorted_collection[lo:hi])
    :return: index i such that all values in sorted_collection[lo:i] are < item and all
        values in sorted_collection[i:hi] are >= item.

    Examples:
    >>> bisect_left([0, 5, 7, 10, 15], 0)
    0

    >>> bisect_left([0, 5, 7, 10, 15], 6)
    2

    >>> bisect_left([0, 5, 7, 10, 15], 20)
    5

    >>> bisect_left([0, 5, 7, 10, 15], 15, 1, 3)
    3

    >>> bisect_left([0, 5, 7, 10, 15], 6, 2)
    2
    """
    if hi < 0:
        hi = len(sorted_collection)

    while lo < hi:
        mid = (lo + hi) // 2
        if sorted_collection[mid] < item:
            lo = mid + 1
        else:
            hi = mid

    return lo


def bisect_right(
    sorted_collection: List[int], item: int, lo: int = 0, hi: int = -1
) -> int:
    """
    Locates the first element in a sorted array that is larger than a given value.

    It has the same interface as
    https://docs.python.org/3/library/bisect.html#bisect.bisect_right .

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item to bisect
    :param lo: lowest index to consider (as in sorted_collection[lo:hi])
    :param hi: past the highest index to consider (as in sorted_collection[lo:hi])
    :return: index i such that all values in sorted_collection[lo:i] are <= item and
        all values in sorted_collection[i:hi] are > item.

    Examples:
    >>> bisect_right([0, 5, 7, 10, 15], 0)
    1

    >>> bisect_right([0, 5, 7, 10, 15], 15)
    5

    >>> bisect_right([0, 5, 7, 10, 15], 6)
    2

    >>> bisect_right([0, 5, 7, 10, 15], 15, 1, 3)
    3

    >>> bisect_right([0, 5, 7, 10, 15], 6, 2)
    2
    """
    if hi < 0:
        hi = len(sorted_collection)

    while lo < hi:
        mid = (lo + hi) // 2
        if sorted_collection[mid] <= item:
            lo = mid + 1
        else:
            hi = mid

    return lo


def insort_left(
    sorted_collection: List[int], item: int, lo: int = 0, hi: int = -1
) -> None:
    """
    Inserts a given value into a sorted array before other values with the same value.

    It has the same interface as
    https://docs.python.org/3/library/bisect.html#bisect.insort_left .

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item to insert
    :param lo: lowest index to consider (as in sorted_collection[lo:hi])
    :param hi: past the highest index to consider (as in sorted_collection[lo:hi])

    Examples:
    >>> sorted_collection = [0, 5, 7, 10, 15]
    >>> insort_left(sorted_collection, 6)
    >>> sorted_collection
    [0, 5, 6, 7, 10, 15]

    >>> sorted_collection = [(0, 0), (5, 5), (7, 7), (10, 10), (15, 15)]
    >>> item = (5, 5)
    >>> insort_left(sorted_collection, item)
    >>> sorted_collection
    [(0, 0), (5, 5), (5, 5), (7, 7), (10, 10), (15, 15)]
    >>> item is sorted_collection[1]
    True
    >>> item is sorted_collection[2]
    False

    >>> sorted_collection = [0, 5, 7, 10, 15]
    >>> insort_left(sorted_collection, 20)
    >>> sorted_collection
    [0, 5, 7, 10, 15, 20]

    >>> sorted_collection = [0, 5, 7, 10, 15]
    >>> insort_left(sorted_collection, 15, 1, 3)
    >>> sorted_collection
    [0, 5, 7, 15, 10, 15]
    """
    sorted_collection.insert(bisect_left(sorted_collection, item, lo, hi), item)


def insort_right(
    sorted_collection: List[int], item: int, lo: int = 0, hi: int = -1
) -> None:
    """
    Inserts a given value into a sorted array after other values with the same value.

    It has the same interface as
    https://docs.python.org/3/library/bisect.html#bisect.insort_right .

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item to insert
    :param lo: lowest index to consider (as in sorted_collection[lo:hi])
    :param hi: past the highest index to consider (as in sorted_collection[lo:hi])

    Examples:
    >>> sorted_collection = [0, 5, 7, 10, 15]
    >>> insort_right(sorted_collection, 6)
    >>> sorted_collection
    [0, 5, 6, 7, 10, 15]

    >>> sorted_collection = [(0, 0), (5, 5), (7, 7), (10, 10), (15, 15)]
    >>> item = (5, 5)
    >>> insort_right(sorted_collection, item)
    >>> sorted_collection
    [(0, 0), (5, 5), (5, 5), (7, 7), (10, 10), (15, 15)]
    >>> item is sorted_collection[1]
    False
    >>> item is sorted_collection[2]
    True

    >>> sorted_collection = [0, 5, 7, 10, 15]
    >>> insort_right(sorted_collection, 20)
    >>> sorted_collection
    [0, 5, 7, 10, 15, 20]

    >>> sorted_collection = [0, 5, 7, 10, 15]
    >>> insort_right(sorted_collection, 15, 1, 3)
    >>> sorted_collection
    [0, 5, 7, 15, 10, 15]
    """
    sorted_collection.insert(bisect_right(sorted_collection, item, lo, hi), item)


def binary_search(sorted_collection: List[int], item: int) -> Optional[int]:
    """Pure implementation of binary search algorithm in Python

    Be careful collection must be ascending sorted, otherwise result will be
    unpredictable

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of found item or None if item is not found

    Examples:
    >>> binary_search([0, 5, 7, 10, 15], 0)
    0

    >>> binary_search([0, 5, 7, 10, 15], 15)
    4

    >>> binary_search([0, 5, 7, 10, 15], 5)
    1

    >>> binary_search([0, 5, 7, 10, 15], 6)

    """
    left = 0
    right = len(sorted_collection) - 1

    while left <= right:
        midpoint = left + (right - left) // 2
        current_item = sorted_collection[midpoint]
        if current_item == item:
            return midpoint
        elif item < current_item:
            right = midpoint - 1
        else:
            left = midpoint + 1
    return None


def binary_search_std_lib(sorted_collection: List[int], item: int) -> Optional[int]:
    """Pure implementation of binary search algorithm in Python using stdlib

    Be careful collection must be ascending sorted, otherwise result will be
    unpredictable

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of found item or None if item is not found

    Examples:
    >>> binary_search_std_lib([0, 5, 7, 10, 15], 0)
    0

    >>> binary_search_std_lib([0, 5, 7, 10, 15], 15)
    4

    >>> binary_search_std_lib([0, 5, 7, 10, 15], 5)
    1

    >>> binary_search_std_lib([0, 5, 7, 10, 15], 6)

    """
    index = bisect.bisect_left(sorted_collection, item)
    if index != len(sorted_collection) and sorted_collection[index] == item:
        return index
    return None


def binary_search_by_recursion(
    sorted_collection: List[int], item: int, left: int, right: int
) -> Optional[int]:

    """Pure implementation of binary search algorithm in Python by recursion

    Be careful collection must be ascending sorted, otherwise result will be
    unpredictable
    First recursion should be started with left=0 and right=(len(sorted_collection)-1)

    :param sorted_collection: some ascending sorted collection with comparable items
    :param item: item value to search
    :return: index of found item or None if item is not found

    Examples:
    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 0, 0, 4)
    0

    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 15, 0, 4)
    4

    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 5, 0, 4)
    1

    >>> binary_search_by_recursion([0, 5, 7, 10, 15], 6, 0, 4)

    """
    if right < left:
        return None

    midpoint = left + (right - left) // 2

    if sorted_collection[midpoint] == item:
        return midpoint
    elif sorted_collection[midpoint] > item:
        return binary_search_by_recursion(sorted_collection, item, left, midpoint - 1)
    else:
        return binary_search_by_recursion(sorted_collection, item, midpoint + 1, right)


if __name__ == "__main__":
    user_input = input("Enter numbers separated by comma:\n").strip()
    collection = sorted(int(item) for item in user_input.split(","))
    target = int(input("Enter a single number to be found in the list:\n"))
    result = binary_search(collection, target)
    if result is None:
        print(f"{target} was not found in {collection}.")
    else:
        print(f"{target} was found at position {result} in {collection}.")
