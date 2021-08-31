const generateGrid = (width, height) => {
  const output = [];
  let number = 0;

  for (let i = 0; i < height; i++) {
    for (let l = 0; l < width; l++) {
      output[i] || (output[i] = []);
      output[i].push((number += 1));
    }
  }

  return output;
};

const spiralTraversal = (grid, top, left) => {
  const // This will be the length to traverse to
    length = 1;

  const output = [];
  const UP = 0;
  const LEFT = 1;
  const DOWN = 2;
  const RIGHT = 3;
  let maxLength;
  let pushNumber;

  top = top - 1;
  left = left - 1;

  maxLength = grid.length > grid[0].length ? grid.length : grid[0].length;

  pushNumber = (y, x) => {
    top = y;
    left = x;
    return grid[top] && grid[top][left] && output.push(grid[top][left]);
  };

  // Push the first number into the output array
  pushNumber(top, left);

  (function traverse(direction, length) {
    let i = length;

    while (i--) {
      if (direction === UP) {
        pushNumber(top - 1, left);
      } else if (direction === LEFT) {
        pushNumber(top, left - 1);
      } else if (direction === DOWN) {
        pushNumber(top + 1, left);
      } else if (direction === RIGHT) {
        pushNumber(top, left + 1);
      }
    }

    // When the length is longer than the max length, break recursion
    if (length > maxLength) {
      return;
    }

    // When we are finished going left or rigth, increase the length
    if (direction === LEFT || direction === RIGHT) {
      length += 1;
    }

    // Change the direction of traversal
    direction += 1;
    if (direction > RIGHT) {
      direction = 0;
    }

    traverse(direction, length);
  })(UP, length);

  return output;
};

// Generate the traversed output
export default (h, w, r, c) => {
  return spiralTraversal(generateGrid(w, h), r, c);
};
