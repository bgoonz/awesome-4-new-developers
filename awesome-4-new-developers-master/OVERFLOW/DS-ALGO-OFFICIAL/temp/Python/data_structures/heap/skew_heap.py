#!/usr/bin/env python3

from __future__ import annotations

from typing import Generic, Iterable, Iterator, Optional, TypeVar

T = TypeVar("T")


class SkewNode(Generic[T]):
    """
    One node of the skew heap. Contains the value and references to
    two children.
    """

    def __init__(self, value: T) -> None:
        self._value: T = value
        self.left: Optional[SkewNode[T]] = None
        self.right: Optional[SkewNode[T]] = None

    @property
    def value(self) -> T:
        """Return the value of the node."""
        return self._value

    @staticmethod
    def merge(
        root1: Optional[SkewNode[T]], root2: Optional[SkewNode[T]]
    ) -> Optional[SkewNode[T]]:
        """Merge 2 nodes together."""
        if not root1:
            return root2

        if not root2:
            return root1

        if root1.value > root2.value:
            root1, root2 = root2, root1

        result = root1
        temp = root1.right
        result.right = root1.left
        result.left = SkewNode.merge(temp, root2)

        return result


class SkewHeap(Generic[T]):
    """
    A data structure that allows inserting a new value and to pop the smallest
    values. Both operations take O(logN) time where N is the size of the
    structure.
    Wiki: https://en.wikipedia.org/wiki/Skew_heap
    Visualisation: https://www.cs.usfca.edu/~galles/visualization/SkewHeap.html

    >>> list(SkewHeap([2, 3, 1, 5, 1, 7]))
    [1, 1, 2, 3, 5, 7]

    >>> sh = SkewHeap()
    >>> sh.pop()
    Traceback (most recent call last):
        ...
    IndexError: Can't get top element for the empty heap.

    >>> sh.insert(1)
    >>> sh.insert(-1)
    >>> sh.insert(0)
    >>> list(sh)
    [-1, 0, 1]
    """

    def __init__(self, data: Optional[Iterable[T]] = ()) -> None:
        """
        >>> sh = SkewHeap([3, 1, 3, 7])
        >>> list(sh)
        [1, 3, 3, 7]
        """
        self._root: Optional[SkewNode[T]] = None
        for item in data:
            self.insert(item)

    def __bool__(self) -> bool:
        """
        Check if the heap is not empty.

        >>> sh = SkewHeap()
        >>> bool(sh)
        False
        >>> sh.insert(1)
        >>> bool(sh)
        True
        >>> sh.clear()
        >>> bool(sh)
        False
        """
        return self._root is not None

    def __iter__(self) -> Iterator[T]:
        """
        Returns sorted list containing all the values in the heap.

        >>> sh = SkewHeap([3, 1, 3, 7])
        >>> list(sh)
        [1, 3, 3, 7]
        """
        result = []
        while self:
            result.append(self.pop())

        # Pushing items back to the heap not to clear it.
        for item in result:
            self.insert(item)

        return iter(result)

    def insert(self, value: T) -> None:
        """
        Insert the value into the heap.

        >>> sh = SkewHeap()
        >>> sh.insert(3)
        >>> sh.insert(1)
        >>> sh.insert(3)
        >>> sh.insert(7)
        >>> list(sh)
        [1, 3, 3, 7]
        """
        self._root = SkewNode.merge(self._root, SkewNode(value))

    def pop(self) -> T:
        """
        Pop the smallest value from the heap and return it.

        >>> sh = SkewHeap([3, 1, 3, 7])
        >>> sh.pop()
        1
        >>> sh.pop()
        3
        >>> sh.pop()
        3
        >>> sh.pop()
        7
        >>> sh.pop()
        Traceback (most recent call last):
            ...
        IndexError: Can't get top element for the empty heap.
        """
        result = self.top()
        self._root = SkewNode.merge(self._root.left, self._root.right)

        return result

    def top(self) -> T:
        """
        Return the smallest value from the heap.

        >>> sh = SkewHeap()
        >>> sh.insert(3)
        >>> sh.top()
        3
        >>> sh.insert(1)
        >>> sh.top()
        1
        >>> sh.insert(3)
        >>> sh.top()
        1
        >>> sh.insert(7)
        >>> sh.top()
        1
        """
        if not self._root:
            raise IndexError("Can't get top element for the empty heap.")
        return self._root.value

    def clear(self):
        """
        Clear the heap.

        >>> sh = SkewHeap([3, 1, 3, 7])
        >>> sh.clear()
        >>> sh.pop()
        Traceback (most recent call last):
            ...
        IndexError: Can't get top element for the empty heap.
        """
        self._root = None


if __name__ == "__main__":
    import doctest

    doctest.testmod()
