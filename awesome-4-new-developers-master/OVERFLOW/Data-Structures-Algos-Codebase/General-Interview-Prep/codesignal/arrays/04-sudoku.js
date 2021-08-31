/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers
 * in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that
 * compose the grid all contain all of the numbers from 1 to 9 one time.
 *
 * Implement an algorithm that will check whether the given grid of numbers represents
 * a valid Sudoku puzzle according to the layout rules described above. Note that the
 * puzzle represented by grid does not have to be solvable.
 */

function sudoku(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      console.log(grid[i][j]);
    }
  }
  return value;
}

test("sudoku", () => {
  expect(
    sudoku([
      [".", ".", ".", "1", "4", ".", ".", "2", "."],
      [".", ".", "6", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "1", ".", ".", ".", ".", ".", "."],
      [".", "6", "7", ".", ".", ".", ".", ".", "9"],
      [".", ".", ".", ".", ".", ".", "8", "1", "."],
      [".", "3", ".", ".", ".", ".", ".", ".", "6"],
      [".", ".", ".", ".", ".", "7", ".", ".", "."],
      [".", ".", ".", "5", ".", ".", ".", "7", "."],
    ])
  ).toEqual(true);
});
