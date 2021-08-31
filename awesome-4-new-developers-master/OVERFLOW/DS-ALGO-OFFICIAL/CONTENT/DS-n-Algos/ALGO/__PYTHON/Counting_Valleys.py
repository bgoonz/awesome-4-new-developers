#!/bin/python3
import sys

#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#


def countingValleys(steps, path):
    # Write your code here
    path = list(path)
    sealevel = valley = 0
    for paths in path:

        if paths == "U":
            sealevel += 1
        else:
            sealevel -= 1

        if paths == "U" and sealevel == 0:
            valley += 1
    return valley


path = "UDDDUDUU"
steps = 8
print(countingValleys(steps, path))
