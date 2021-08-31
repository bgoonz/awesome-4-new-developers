/* jshint esversion: 6 */

(function () {
  "use strict";

  describe("More Exercises in Recursion", function () {
    describe("37. Count Tags", function () {
      var originalTagCount,
        actualResults,
        expectedResults,
        tags,
        $child,
        $rootElement;

      before(function () {
        originalTagCount = tagCount;
        tagCount = sinon.spy(tagCount);
        actualResults = [];
        expectedResults = [];
        $rootElement = $(
          '<div id="tagCountTest"><p>beep</p><div><p><span>blip</span></p></div><p>blorp</p></div>'
        );
        $child = $("#mocha");
        $child.remove();
        $("body").append($rootElement);
        tags = document.getElementById("tagCountTest");
      });

      afterEach(function () {
        tagCount.reset();
      });

      after(function () {
        $rootElement.remove();
        $("body").append($child);
        tagCount = originalTagCount;
      });

      it("should return a number", function () {
        actualResults.push(tagCount("p"));
        expectedResults.push(document.getElementsByTagName("p").length);
        expect(actualResults[0]).to.be.a("number");
      });

      it("should return number of times tag occurs", function () {
        actualResults.push(tagCount("div"));
        expectedResults.push(document.getElementsByTagName("div").length);
        expect(actualResults[1]).to.equal(expectedResults[1]);
      });

      it("should support various tag types", function () {
        actualResults.push(tagCount("span"));
        expectedResults.push(document.getElementsByTagName("span").length);
        actualResults.forEach(function (result, i) {
          expect(result).to.equal(expectedResults[i]);
        });
      });

      it("should not require starting node argument", function () {
        tagCount("html");
        expect(tagCount.args[0]).to.have.length(1);
      });

      it("should use recursion by calling self", function () {
        tagCount("p");
        expect(tagCount.callCount).to.be.above(3);
      });

      it("should be invoked with at most two arguments", function () {
        tagCount("p", tags);
        tagCount.args.forEach((arg) => {
          expect(arg).to.have.length.of.at.most(2);
        });
      });
    });

    describe("38. Binary Search", function () {
      var originalBinarySearch, input1, input2, input3, input4, input5, primes;

      before(function () {
        originalBinarySearch = binarySearch;
        binarySearch = sinon.spy(binarySearch);
        input1 = [1, 2, 3, 4, 5, 6];
        input2 = [1, 2, 3, 4, 5, 6, 7];
        input3 = [-5, -4, -3, -2, -1];
        input4 = [-6, -5, -4, -3, -2, -1];
        input5 = [-4, -3, -2, -1, 0, 1, 2, 3];
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
      });

      afterEach(function () {
        binarySearch.reset();
      });

      after(function () {
        binarySearch = originalBinarySearch;
      });

      it("should return a number", function () {
        expect(binarySearch(input1, 3)).to.be.a("number");
      });

      it("should not mutate the input array", function () {
        binarySearch(input1, 4);
        expect(input1).to.eql([1, 2, 3, 4, 5, 6]);
      });

      it("should return index of target", function () {
        expect(binarySearch(input1, 1)).to.equal(0);
        expect(binarySearch(input1, 2)).to.equal(1);
        expect(binarySearch(input1, 3)).to.equal(2);
        expect(binarySearch(input1, 4)).to.equal(3);
        expect(binarySearch(input1, 5)).to.equal(4);
        expect(binarySearch(input1, 6)).to.equal(5);
        expect(binarySearch(input2, 1)).to.equal(0);
        expect(binarySearch(input2, 2)).to.equal(1);
        expect(binarySearch(input2, 3)).to.equal(2);
        expect(binarySearch(input2, 4)).to.equal(3);
        expect(binarySearch(input2, 5)).to.equal(4);
        expect(binarySearch(input2, 6)).to.equal(5);
        expect(binarySearch(input2, 7)).to.equal(6);
        expect(binarySearch(primes, 2)).to.equal(0);
        expect(binarySearch(primes, 19)).to.equal(7);
        expect(binarySearch(primes, 41)).to.equal(12);
      });

      it("should support negative numbers", function () {
        expect(binarySearch(input3, -5)).to.equal(0);
        expect(binarySearch(input3, -4)).to.equal(1);
        expect(binarySearch(input3, -3)).to.equal(2);
        expect(binarySearch(input3, -2)).to.equal(3);
        expect(binarySearch(input3, -1)).to.equal(4);
        expect(binarySearch(input4, -6)).to.equal(0);
        expect(binarySearch(input4, -5)).to.equal(1);
        expect(binarySearch(input4, -4)).to.equal(2);
        expect(binarySearch(input4, -3)).to.equal(3);
        expect(binarySearch(input4, -2)).to.equal(4);
        expect(binarySearch(input4, -1)).to.equal(5);
        expect(binarySearch(input5, -2)).to.equal(2);
        expect(binarySearch(input5, 2)).to.equal(6);
      });

      it("should return null if target not found", function () {
        expect(binarySearch(input1, -1)).to.be.null;
        expect(binarySearch(input1, 7)).to.be.null;
        expect(binarySearch(input2, -1)).to.be.null;
        expect(binarySearch(input2, 8)).to.be.null;
        expect(binarySearch(input3, -6)).to.be.null;
        expect(binarySearch(input3, 0)).to.be.null;
        expect(binarySearch(input4, -8)).to.be.null;
        expect(binarySearch(input4, 1)).to.be.null;
        expect(binarySearch(input5, -8)).to.be.null;
        expect(binarySearch(input5, 4)).to.be.null;
        expect(binarySearch(primes, 32)).to.be.null;
      });

      it("should use recursion by calling self", function () {
        binarySearch(primes, 3);
        expect(binarySearch.callCount).to.be.above(1);
      });

      it("should be invoked with at most four arguments", function () {
        binarySearch(primes, 4);
        binarySearch.args.forEach((arg) => {
          expect(arg).to.have.length.of.at.most(4);
        });
      });

      xit("should be invoked with two arguments", function () {
        binarySearch(primes, 4);
        binarySearch.args.forEach((arg) => {
          expect(arg).to.have.length(2);
        });
      });
    });

    describe("39. Merge Sort", function () {
      var originalMergeSort, numbers, sorted;

      before(function () {
        originalMergeSort = mergeSort;
        mergeSort = sinon.spy(mergeSort);
      });

      beforeEach(function () {
        numbers = [8, 2, 20, 1, 15];
      });

      afterEach(function () {
        mergeSort.reset();
      });

      after(function () {
        mergeSort = originalMergeSort;
      });

      it("should return an array", function () {
        sorted = mergeSort(numbers);
        expect(sorted).to.be.an("array");
      });

      it("should not mutate the input array", function () {
        sorted = mergeSort(numbers);
        expect(numbers).to.eql([8, 2, 20, 1, 15]);
        expect(numbers).to.not.equal(sorted);
      });

      it("should sort an array of numbers in order of least to greatest", function () {
        expect(mergeSort([])).to.eql([]);
        expect(mergeSort([0])).to.eql([0]);
        expect(mergeSort([1, 0])).to.eql([0, 1]);
        expect(mergeSort([0, 1, 2, 3])).to.eql([0, 1, 2, 3]);
        expect(mergeSort([5, 4, 3, 2, 1])).to.eql([1, 2, 3, 4, 5]);
        expect(mergeSort([10, 1, 8, 5, 0])).to.eql([0, 1, 5, 8, 10]);
        expect(mergeSort([8, 2, 20, 1, 15])).to.eql([1, 2, 8, 15, 20]);
      });

      it("should be able to handle negative numbers", function () {
        expect(mergeSort([-1])).to.eql([-1]);
        expect(mergeSort([0, -1])).to.eql([-1, 0]);
        expect(mergeSort([0, 1, -2, -3])).to.eql([-3, -2, 0, 1]);
        expect(mergeSort([8, -2, 20, 1, -15])).to.eql([-15, -2, 1, 8, 20]);
        expect(mergeSort([0, -1, -2, -3, -4, -5, -10])).to.eql([
          -10, -5, -4, -3, -2, -1, 0,
        ]);
      });

      it("should not use the native Array sort method", function () {
        // Spying on Array.prototype.sort in testSupport.js
        mergeSort(numbers);
        expect(Array.prototype.sort.called).to.equal(false);
      });

      it("should use recursion by calling self", function () {
        mergeSort(numbers);
        expect(mergeSort.callCount).to.be.above(1);
      });

      it("should be invoked with one argument", function () {
        mergeSort(numbers);
        mergeSort.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
      });
    });

    describe("40. Clone", function () {
      var originalClone, object1, object2, array1, array2, result;

      before(function () {
        originalClone = clone;
        clone = sinon.spy(clone);
        object1 = {
          a: 1,
          b: {
            bb: {
              bbb: 2,
            },
          },
          c: 3,
        };
        object2 = {
          a: 1,
          b: [
            "bb",
            {
              bbb: [2],
            },
          ],
          c: {
            cc: [
              3,
              {
                ccc: 4,
              },
              5,
            ],
          },
        };
        array1 = [1, [2, []], 3, [[[4]], 5]];
        array2 = [
          1,
          [
            2,
            {
              a: [{}, 2, 3],
            },
          ],
          {
            3: [4],
          },
          5,
        ];
      });

      afterEach(function () {
        clone.reset();
      });

      after(function () {
        clone = originalClone;
      });

      it("should return an object when input is an object", function () {
        result = clone(object1);
        expect(result).to.be.an("object");
        expect(result).to.not.be.an("array");
      });

      it("should return an array when input is an array", function () {
        result = clone(array1);
        expect(result).to.be.an("array");
        expect(result).to.not.be.an("object");
      });

      it("should not mutate the input object or array", function () {
        result = clone(object1);
        expect(object1).to.eql({
          a: 1,
          b: {
            bb: {
              bbb: 2,
            },
          },
          c: 3,
        });
        expect(result).to.not.equal(object1);
        result = clone(array1);
        expect(array1).to.eql([1, [2, []], 3, [[[4]], 5]]);
        expect(result).to.not.equal(array1);
      });

      it("should shallow clone objects", function () {
        result = clone(object1);
        expect(result).to.eql(object1);
      });

      it("should shallow clone arrays", function () {
        result = clone(array1);
        expect(result).to.eql(array1);
      });

      it("should deeply clone objects", function () {
        result = clone(object2);
        expect(result).to.eql(object2);
        expect(result.b).to.eql(object2.b);
        expect(result.b).to.not.equal(object2.b);
        expect(result.b[1]).to.eql(object2.b[1]);
        expect(result.b[1]).to.not.equal(object2.b[1]);
        expect(result.b[1].bbb).to.eql(object2.b[1].bbb);
        expect(result.b[1].bbb).to.not.equal(object2.b[1].bbb);
        expect(result.c).to.eql(object2.c);
        expect(result.c).to.not.equal(object2.c);
        expect(result.c.cc).to.eql(object2.c.cc);
        expect(result.c.cc).to.not.equal(object2.c.cc);
        expect(result.c.cc[1]).to.eql(object2.c.cc[1]);
        expect(result.c.cc[1]).to.not.equal(object2.c.cc[1]);
      });

      it("should deeply clone arrays", function () {
        result = clone(array2);
        expect(result).to.eql(array2);
        expect(result[1]).to.eql(array2[1]);
        expect(result[1]).to.not.equal(array2[1]);
        expect(result[1][1]).to.eql(array2[1][1]);
        expect(result[1][1]).to.not.equal(array2[1][1]);
        expect(result[1][1].a).to.eql(array2[1][1].a);
        expect(result[1][1].a).to.not.equal(array2[1][1].a);
        expect(result[1][1].a[0]).to.eql(array2[1][1].a[0]);
        expect(result[1][1].a[0]).to.not.equal(array2[1][1].a);
        expect(result[2]).to.eql(array2[2]);
        expect(result[2]).to.not.equal(array2[2]);
        expect(result[2]["3"]).to.eql(array2[2]["3"]);
        expect(result[2]["3"]).to.not.equal(array2[2]["3"]);
      });

      it("should not use native JSON methods or Object.assign", function () {
        // Spying on methods in testSupport.js
        clone(object2);
        clone(array2);
        expect(Object.assign.called).to.be.false;
        expect(JSON.stringify.called).to.be.false;
        expect(JSON.parse.called).to.be.false;
      });

      it("should use recursion by calling self", function () {
        clone(object1);
        expect(clone.callCount).to.be.above(1);
        clone.reset();
        clone(array1);
        expect(clone.callCount).to.be.above(1);
      });

      it("should be invoked with one argument", function () {
        clone(object1);
        clone.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
        clone.reset();
        clone(array1);
        clone.args.forEach((arg) => {
          expect(arg).to.have.length(1);
        });
      });
    });
  });
})();
