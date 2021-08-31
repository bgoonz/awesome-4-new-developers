const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myEvery = require("../problems/10-my-every.js");

describe("myEvery", () => {
  it("should mimic the built-in Array#myEvery", () => {
    let isEven = (num) => {
      return num % 2 === 0;
    };

    let hasO = (string) => {
      return string.includes("o");
    };

    expect(myEvery([4, 8, 6, 10], isEven)).to.be.true;
    expect(myEvery([4, 7, 6, 10], isEven)).to.be.false;
    expect(myEvery(["book", "door"], hasO)).to.be.true;
    expect(myEvery(["book", "door", "pen"], hasO)).to.be.false;
  });

  it("should not call the built-in Array#every", () => {
    const everySpy = chai.spy.on(Array.prototype, "every");
    myEvery([4, 8, 6, 10], (num) => {
      return num % 2 === 0;
    });
    expect(everySpy).to.have.not.been.called();
  });
});
