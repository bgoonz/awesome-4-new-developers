/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

Example

For bishop = "a1" and pawn = "c3", the output should be bishopAndPawn(bishop, pawn) = true. 
*/

function bishopAndPawn(bishopPosition, pawnPosition) {
  let board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const bishopX = board[bishopPosition[0]];
  const bishopY = parseInt(bishopPosition[1]);
  const pawnX = board[pawnPosition[0]];
  const pawnY = parseInt(pawnPosition[1]);

  if (
    (bishopX + bishopY && pawnX + pawnY) ||
    bishopX + pawnY === bishopY + pawnX
  ) {
    return true;
  }
  return false;
}

test("bishop And Pawn", () => {
  expect(bishopAndPawn("Ashish")).toEqual("Ashish");
});
