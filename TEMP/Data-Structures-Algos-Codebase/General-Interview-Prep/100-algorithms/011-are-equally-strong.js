/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/* 
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
*/

function areEquallyStrong(myLeft, myRight, friendsLeft, friendsRight) {
  const myStrongestArm = myLeft > myRight ? myLeft : myRight;
  const myWeakestArm = myLeft < myRight ? myLeft : myRight;
  const friendsStrongestArm =
    friendsLeft > friendsRight ? friendsLeft : friendsRight;
  const friendsWeakestArm =
    friendsLeft < friendsRight ? friendsLeft : friendsRight;

  return (
    myStrongestArm === friendsStrongestArm && myWeakestArm === friendsWeakestArm
  );
}

test("are Equally Strong", () => {
  expect(areEquallyStrong(10, 15, 15, 10)).toEqual(true);
  expect(areEquallyStrong(15, 10, 15, 10)).toEqual(true);
  expect(areEquallyStrong(15, 10, 15, 9)).toEqual(false);
});
