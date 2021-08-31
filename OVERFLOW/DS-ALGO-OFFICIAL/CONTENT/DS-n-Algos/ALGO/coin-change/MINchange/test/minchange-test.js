const chai = require("chai");
chai.use(require("chai-spies"));
const { expect, spy } = chai;
const minChange = require("./../minchange.js");

describe("Dynamic Programming: Min Coin Change", () => {
  it("works with amount 0", () => {
    expect(minChange([1, 2, 3], 0)).to.deep.equal([]);
  });

  it("works with amount 1", () => {
    expect(minChange([1, 2, 3], 1)).to.deep.equal([1]);
  });

  it("works with amount 2", () => {
    expect(minChange([1, 2, 3], 2)).to.deep.equal([2]);
  });

  it("works with amount 3", () => {
    expect(minChange([1, 2, 3], 3)).to.deep.equal([3]);
  });

  it("works with amount 4", () => {
    expect(minChange([1, 2, 3], 4)).to.deep.equal([1, 3]);
  });

  it("works with amount 6", () => {
    expect(minChange([1, 2, 3], 6)).to.deep.equal([3, 3]);
  });
});
/*
bryan_dir:MINchange_exitstatus:0 ====>

npm test

> MINchange@1.0.0 test /mnt/c/0-a-A-October/00-weeks/08-my-website/Stable/Public/2-content/Data-Structures/DS-and-Algorithms-Prac/DS-n-Algos/ALGO/coin-change/MINchange
> mocha



  Dynamic Programming: Min Coin Change
    ✓ works with amount 0
    ✓ works with amount 1
    ✓ works with amount 2
    ✓ works with amount 3
    ✓ works with amount 4
    ✓ works with amount 6


  6 passing (11ms)


\___________________________________________________
bryan_dir:MINchange_exitstatus:0 ====>

*/
