const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const mySome = require("../problems/07-my-some.js");

describe("mySome", () => {
  it("should mimic the built-in Array#some", () => {
    let result1 = mySome([5, 1, 7, 9], (ele, i) => {
      return ele === i;
    });
    expect(result1).to.be.true;
    let result2 = mySome([5, 3, 7, 9], (ele, i) => {
      return ele === i;
    });
    expect(result2).to.be.false;

    let result3 = mySome(["soup", "noodles", "bike", "ship"], (ele) => {
      return ele.length === 4;
    });
    expect(result3).to.be.true;
  });

  it("should not call the built-in Array#some", () => {
    const someSpy = chai.spy.on(Array.prototype, "some");
    mySome([5, 1, 7, 9], (ele, i) => {
      return ele === i;
    });
    expect(someSpy).to.have.not.been.called();
  });
});
