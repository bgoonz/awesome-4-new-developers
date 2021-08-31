# Dynamic Time Warping

> Explanation and Code Implementation

## Explanation and Code Implementation

[![Jeremy Zhang](https://miro.medium.com/fit/c/56/56/0*OHP4EDyFQhdpx4uk.)](https://meatba11.medium.com/?source=post_page-----3933f25fcdd--------------------------------)

Sounds like time traveling or some kind of future technic, however, it is not. Dynamic Time Warping is used to compare the similarity or calculate the distance between two arrays or time series with different length.

Suppose we want to calculate the distance of two equal-length arrays:

a = \[1, 2, 3\]  
b = \[3, 2, 2\]

How to do that? One obvious way is to match up `a` and `b` in 1-to-1 fashion and sum up the total distance of each component. This sounds easy, but what if `a` and `b` have different lengths?

a = \[1, 2, 3\]  
b = \[2, 2, 2, 3, 4\]

How to match them up? Which should map to which? To solve the problem, there comes dynamic time warping. Just as its name indicates, to warp the series so that they can match up.

Before digging into the algorithm, you might have the question that is it useful? Do we really need to compare the distance between two unequal-length time series?

Yes, in a lot of scenarios DTW is playing a key role.

## Sound Pattern Recognition

One use case is to detect the sound pattern of the same kind. Suppose we want to recognise the voice of a person by analysing his sound track, and we are able to collect his sound track of saying `Hello` in one scenario. However, people speak in the same word in different ways, what if he speaks hello in a much slower pace like `Heeeeeeelloooooo` , we will need an algorithm to match up the sound track of different lengths and be able to identify they come from the same person.

![Image for post](https://miro.medium.com/max/60/1*gi1TtOqFCsb2M_U7iAUAag.png?q=20)

![Image for post](https://miro.medium.com/max/2352/1*gi1TtOqFCsb2M_U7iAUAag.png)

## Stock Market

In a stock market, people always hope to be able to predict the future, however using general machine learning algorithms can be exhaustive, as most prediction task requires test and training set to have the same dimension of features. However, if you ever speculate in the stock market, you will know that even the same pattern of a stock can have very different length reflection on klines and indicators.

![Image for post](https://miro.medium.com/max/3832/1*4QUO4Tqm_z-8ydMBGgqmPg.png)

A concise explanation of DTW from wiki,

> In time series analysis, dynamic time warping (DTW) is one of the algorithms for measuring similarity between two temporal sequences, which may vary in speed. DTW has been applied to temporal sequences of video, audio, and graphics data — indeed, any data that can be turned into a linear sequence can be analysed with DTW.

_The idea to compare arrays with different length is to build one-to-many and many-to-one matches so that the total distance can be minimised between the two._

Suppose we have two different arrays red and blue with different length:

![Image for post](https://miro.medium.com/max/1360/1*uFicSZjqkNBfsyrsJw7J9g.jpeg)

Clearly these two series follow the same pattern, but the blue curve is longer than the red. If we apply the one-to-one match, shown in the top, the mapping is not perfectly synced up and the tail of the blue curve is being left out.

DTW overcomes the issue by developing a one-to-many match so that the troughs and peaks with the same pattern are perfectly matched, and there is no left out for both curves(shown in the bottom top).

In general, DTW is a method that calculates an optimal match between two given sequences (e.g. time series) with certain restriction and rules(comes from wiki):

- Every index from the first sequence must be matched with one or more indices from the other sequence and vice versa
- The first index from the first sequence must be matched with the first index from the other sequence (but it does not have to be its only match)
- The last index from the first sequence must be matched with the last index from the other sequence (but it does not have to be its only match)
- The mapping of the indices from the first sequence to indices from the other sequence must be monotonically increasing, and vice versa, i.e. if `j > i` are indices from the first sequence, then there must not be two indices `l > k` in the other sequence, such that index `i` is matched with index `l` and index `j` is matched with index `k` , and vice versa

The optimal match is denoted by the match that satisfies all the restrictions and the rules and that has the minimal cost, where the cost is computed as the sum of absolute differences, for each matched pair of indices, between their values.

To summarise is that _head and tail must be positionally matched, no cross-match and no left out._

The implementation of the algorithm looks extremely concise:

![Image for post](https://miro.medium.com/max/2704/1*fGr2Mj7fEB7tEyqAzcp2LA.png)

where `DTW[i, j]` is the distance between `s[1:i]` and `t[1:j]` with the best alignment.

The key lies in:

DTW\[i, j\] := cost + minimum(DTW\[i-1, j \],  
 DTW\[i , j-1\],  
 DTW\[i-1, j-1\])

Which is saying that the cost of between two arrays with length `i and j` equals _the distance between the tails + the minimum of cost in arrays with length_ `_i-1, j_` _,_ `_i, j-1_` _, and_ `_i-1, j-1_` _._

Put it in python would be:

Example:

![Image for post](https://miro.medium.com/max/1964/1*eogOkXkOUzi6Cq7U9BgiLg.png)

The distance between `a and b` would be the last element of the matrix, which is 2.

## Add Window Constraint

One issue of the above algorithm is that we allow one element in an array to match an unlimited number of elements in the other array(as long as the tail can match in the end), this would cause the mapping to bent over a lot, for example, the following array:

a = \[1, 2, 3\]  
b = \[1, 2, 2, 2, 2, 2, 2, 2, ..., 5\]

To minimise the distance, the element 2 in array `a` would match all the 2 in array `b` , which causes an array `b` to bent severely. To avoid this, we can add a window constraint to limit the number of elements one can match:

![Image for post](https://miro.medium.com/max/2680/1*0_xypte7FHDWJuuBexEvHg.png)

The key difference is that now each element is confined to match elements in range `i — w` and `i + w` . The `w := max(w, abs(n-m))` guarantees all indices can be matched up.

The implementation and example would be:

![Image for post](https://miro.medium.com/max/2236/1*2K6C-3QrRmbbhpe-jt9UQA.png)

There is also contributed packages available on Pypi to use directly. Here I demonstrate an example using [fastdtw](https://pypi.org/project/fastdtw/):

It gives you the distance of two lists and index mapping(the example can extend to a multi-dimension array).

Lastly, you can check out the implementation [here](https://github.com/MJeremy2017/Machine-Learning-Models/tree/master/Dynamic-Time-Warping).

**Reference**:

\[1\] [https://databricks.com/blog/2019/04/30/understanding-dynamic-time-warping.html](https://databricks.com/blog/2019/04/30/understanding-dynamic-time-warping.html)

\[2\] [https://en.wikipedia.org/wiki/Dynamic_time_warping](https://en.wikipedia.org/wiki/Dynamic_time_warping)

[Source](https://towardsdatascience.com/dynamic-time-warping-3933f25fcdd)
