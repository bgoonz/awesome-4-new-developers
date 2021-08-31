const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myForEach = require("../problems/01-my-for-each.js");

describe("myForEach", () => {
  it("should mimic the built-in Array#forEach", () => {
    let test = [];
    myForEach(["laika", "belka"], (el) => {
      test.push(el.toUpperCase());
    });
    expect(test).to.eql(["LAIKA", "BELKA"]);
  });

  it("should not call the built-in Array#forEach", () => {
    const forEachSpy = chai.spy.on(Array.prototype, "forEach");
    myForEach(["laika", "belka"], () => {});
    expect(forEachSpy).to.have.not.been.called();
  });
});
