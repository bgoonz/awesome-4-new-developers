/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * There are 2N people a company is planning to interview. The cost of flying
 * the i-th person to city A is costs[i][0], and the cost of flying the i-th
 * person to city B is costs[i][1].
 *
 * Return the minimum cost to fly every person to a city such that exactly N
 * people arrive in each city.
 *
 * Example 1:
 *
 * Input: [[10,20],[30,200],[400,50],[30,20]]
 * Output: 110
 * Explanation:
 * The first person goes to city A for a cost of 10.
 * The second person goes to city A for a cost of 30.
 * The third person goes to city B for a cost of 50.
 * The fourth person goes to city B for a cost of 20.
 *
 * The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 */

function twoCityScheduling(costs) {
  costs = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let totalCost = 0;
  let n = costs.length / 2;
  for (let i = 0; i < n; i++) {
    totalCost += costs[i][0] + costs[i + n][1];
  }
  return totalCost;
}

test("two City Scheduling", () => {
  expect(
    twoCityScheduling([
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20],
    ])
  ).toEqual(110);
  expect(
    twoCityScheduling([
      [259, 770],
      [448, 54],
      [926, 667],
      [184, 139],
      [840, 118],
      [577, 469],
    ])
  ).toEqual(1859);
});
