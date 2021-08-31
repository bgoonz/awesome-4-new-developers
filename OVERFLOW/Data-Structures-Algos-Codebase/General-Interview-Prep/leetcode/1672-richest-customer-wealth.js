/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const richestCustomerWealth = (accounts) => {
  return accounts
    .map((a) => a.reduce((a, t) => (t += a), 0))
    .sort((b, a) => a - b)[0];
};

test("richestCustomerWealth", () => {
  expect(
    richestCustomerWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ])
  ).toEqual(10);
});
