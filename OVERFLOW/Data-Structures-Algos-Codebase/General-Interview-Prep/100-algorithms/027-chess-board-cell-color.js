/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be chessBoardCellColor(cell1, cell2) = true.
;

For cell1 = "A1" and cell2 = "H3", the output should be chessBoardCellColor(cell1, cell2) = false. 
*/

function chessBoardCellColor(cell1, cell2) {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const cell1X = board[cell1[0]];
  const cell1Y = parseInt(cell1[1]);

  const cell2X = board[cell2[0]];
  const cell2Y = parseInt(cell2[1]);

  return (cell1X + cell2Y) % 2 === (cell2X + cell2Y) % 2;
}

test("chess Board Cell Color", () => {
  expect(chessBoardCellColor("A1", "C3")).toEqual(false);
  expect(chessBoardCellColor("A1", "H3")).toEqual(true);
});
