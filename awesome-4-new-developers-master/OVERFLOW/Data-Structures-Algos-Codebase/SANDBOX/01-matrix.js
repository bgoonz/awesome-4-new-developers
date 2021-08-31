// Source : https://leetcode.com/problems/01-matrix/#/description
// Author : Bryan Guner

/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0
for each cell.

The distance between two adjacent cells is 1.



Example 1:

  Input: [
    [ 0, 0, 0 ],
    [ 0, 1, 0 ],
    [ 0, 0, 0 ]
  ]

Output: [
  [ 0, 0, 0 ],
  [ 0, 1, 0 ],
  [ 0, 0, 0 ]
]
Example 2:

  Input: [
    [ 0, 0, 0 ],
    [ 0, 1, 0 ],
    [ 1, 1, 1 ]
  ]

Output: [
  [ 0, 0, 0 ],
  [ 0, 1, 0 ],
  [ 1, 2, 1 ]
]


Note:

  The number of elements of the given matrix will not exceed 10, 000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.

*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = (matrix) => {
  // BFS
  let q = [];
  let hash = [];
  let [m, n] = [matrix.length, matrix[0].length];
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    hash[i] = [];
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        q.push({ x: i, y: j, step: 0 });
        hash[i][j] = 0;
      }
    }
  }

  while (q.length) {
    let item = q.shift();
    let { x, y, step } = item;

    for (let i = 0; i < 4; i++) {
      let _x = x + dir[i][0];
      let _y = y + dir[i][1];
      if (_x < 0 || _x >= m || _y < 0 || _y >= n) continue;
      if (hash[_x][_y] !== undefined) continue;
      hash[_x][_y] = step + 1;
      q.push({ x: _x, y: _y, step: step + 1 });
    }
  }

  return hash;
};
