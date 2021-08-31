# DTW API

**Author:** Elmar Langholz

## DTW(\[options\])

Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.

**Parameters**

**[options]**: _DTWOptions_, The options to initialize the dynamic time warping instance with.

## class DTWOptions

**Members**

**distanceMetric**: _string_, The distance metric to use: `'manhattan' | 'euclidean' | 'squaredEuclidean'`.

**distanceFunction**: _function_, The distance function to use. The function should accept two numeric arguments and return the numeric distance. e.g. function (a, b) { return a + b; }

## class DTW

**Methods**

## DTW.compute(firstSequence, secondSequence, \[window\])

Computes the optimal match between two provided sequences.

**Parameters**

**firstSequence**: _number[]_, The first sequence.

**secondSequence**: _number[]_, The second sequence.

**[window]**: _number_, The window parameter (for the locality constraint) to use.

**Returns**

_number_, The similarity between the provided temporal sequences.

## DTW.path()

Retrieves the optimal match between two provided sequences.

**Returns**

_number[]_, The array containing the optimal path points.
