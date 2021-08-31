const should = require("should");
const DTW = require("../lib/dtw.js");

describe("DTW", () => {
  describe("#Constructor()", () => {
    it("should not throw an error upon no value being passed for initialization", () => {
      (() => {
        const instanceFunctions = ["compute", "path"];
        const dtw = new DTW();
        instanceFunctions.forEach((fn) => {
          const typeName = typeof dtw[fn];
          typeName.should.equal(
            "function",
            "Expected function to be accessible: '" + fn + "'"
          );
        });
      }).should.not.throw();
    });
  });

  describe("#Constructor(value)", () => {
    it("should throw an error upon an invalid value being passed for initialization", () => {
      const invalidOptions = [null, "", {}, () => {}];

      invalidOptions.forEach((options) => {
        (() => {
          const dtw = new DTW(options);
        }).should.throw();
      });
    });

    it("should throw an error upon an invalid distance metric value being passed for initialization", () => {
      const invalidDistanceMetrics = [null, "", {}, "ea", undefined, () => {}];

      invalidDistanceMetrics.forEach((distanceMetric) => {
        (() => {
          const dtw = new DTW({
            distanceMetric: distanceMetric,
          });
        }).should.throw();
      });
    });

    it("should throw an error upon an invalid distance function value being passed for initialization", () => {
      const invalidDistanceFunctions = [null, "", {}, "ea", undefined];

      invalidDistanceFunctions.forEach((distanceFunction) => {
        (() => {
          const dtw = new DTW({
            distanceFunction: distanceFunction,
          });
        }).should.throw();
      });
    });

    it("should throw an error upon an providing both distance metric and function value being passed for initialization", () => {
      (() => {
        const options = {
          distanceMetric: "manhattan",
          distanceFunction(x, y) {
            return x + y;
          },
        };
        const dtw = new DTW(options);
      }).should.throw();
    });

    it("should not throw an error upon an providing a valid distance metric passed for initialization", () => {
      const validDistanceMetric = [
        "manhattan",
        "manhattaN",
        "euclidean",
        "eucLidean",
        "squaredeuclidean",
        "squaredEuclidean",
      ];

      validDistanceMetric.forEach((distanceMetric) => {
        (() => {
          const options = {
            distanceMetric: distanceMetric,
          };
          const dtw = new DTW(options);
        }).should.not.throw();
      });
    });

    it("should not throw an error upon an providing a valid distance function passed for initialization", () => {
      (() => {
        const options = {
          distanceFunction(x, y) {
            return x + y;
          },
        };
        const dtw = new DTW(options);
      }).should.not.throw();
    });
  });

  describe("#compute(value1, value2)", () => {
    it("should throw if invalid type for first sequence", () => {
      const invalidSequences = [null, {}, () => {}, [], "", 0];

      invalidSequences.forEach((s) => {
        (() => {
          const options = {
            distanceMetric: "squaredEuclidean",
          };
          const dtw = new DTW(options);
          const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
          const cost = dtw.compute(s, t);
        }).should.throw();
      });
    });

    it("should throw if invalid type for second sequence", () => {
      const invalidSequences = [null, {}, () => {}, [], "", 0];

      invalidSequences.forEach((t) => {
        (() => {
          const options = {
            distanceMetric: "squaredEuclidean",
          };
          const dtw = new DTW(options);
          const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
          const cost = dtw.compute(s, t);
        }).should.throw();
      });
    });

    it("should compute a valid similarity value for the squared euclidean distance metric", () => {
      const options = {
        distanceMetric: "squaredEuclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const cost = dtw.compute(s, t);
      cost.should.equal(0);
    });

    it("should compute a valid similarity value for the euclidean distance metric", () => {
      const options = {
        distanceMetric: "euclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const cost = dtw.compute(s, t);
      cost.should.equal(0);
    });

    it("should compute a valid similarity value for the manhattan distance metric", () => {
      const options = {
        distanceMetric: "manhattan",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const cost = dtw.compute(s, t);
      cost.should.equal(0);
    });
  });

  describe("#compute(value1, value2, value3)", () => {
    it("should throw if invalid window type", () => {
      const invalidWindowTypes = [null, {}, () => {}, [], "", [0]];

      invalidWindowTypes.forEach((w) => {
        (() => {
          const options = {
            distanceMetric: "squaredEuclidean",
          };
          const dtw = new DTW(options);
          const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
          const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
          const cost = dtw.compute(s, t, w);
        }).should.throw();
      });
    });

    it("should compute a valid similarity value for the squared euclidean distance metric", () => {
      const options = {
        distanceMetric: "squaredEuclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
    });

    it("should compute a valid similarity value for the euclidean distance metric", () => {
      const options = {
        distanceMetric: "euclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
    });

    it("should compute a valid similarity value for the manhattan distance metric", () => {
      const options = {
        distanceMetric: "manhattan",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
    });
  });

  describe("#path()", () => {
    it("should compute a valid similarity value and path for the squared euclidean distance metric", () => {
      const options = {
        distanceMetric: "squaredEuclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const cost = dtw.compute(s, t);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the euclidean distance metric", () => {
      const options = {
        distanceMetric: "euclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const cost = dtw.compute(s, t);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the manhattan distance metric", () => {
      const options = {
        distanceMetric: "manhattan",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const cost = dtw.compute(s, t);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the squared euclidean distance metric with infinity locality constraint", () => {
      const options = {
        distanceMetric: "squaredEuclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = Number.POSITIVE_INFINITY;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the euclidean distance metric with locality infinity constraint", () => {
      const options = {
        distanceMetric: "euclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = Number.POSITIVE_INFINITY;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the manhattan distance metric with locality infinity constraint", () => {
      const options = {
        distanceMetric: "manhattan",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = Number.POSITIVE_INFINITY;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the squared euclidean distance metric with locality constraint", () => {
      const options = {
        distanceMetric: "squaredEuclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the euclidean distance metric with locality constraint", () => {
      const options = {
        distanceMetric: "euclidean",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });

    it("should compute a valid similarity value and path for the manhattan distance metric with locality constraint", () => {
      const options = {
        distanceMetric: "manhattan",
      };
      const dtw = new DTW(options);
      const s = [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 4, 4, 4, 4];
      const t = [1, 1, 2, 2, 3, 3, 2, 4, 4, 4];
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.equal(0);
      const path = dtw.path();
      const expectedPath = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 6],
        [10, 6],
        [11, 7],
        [12, 7],
        [13, 8],
        [14, 9],
      ];
      path.should.eql(expectedPath);
    });
  });

  describe("algorithm implementation", () => {
    it("should compute valid cost and path 1 with no locality constraint", () => {
      const s = [
        0.13105, -0.1966, -0.81353, 1.49472, 0.42999, 0.22573, 0.91088, 0.19439,
        0.87484, 0.28494, -1.72894, -0.60786, 1.17165, 0.62805, 0.52309,
        1.76012,
      ];
      const t = [
        0.13105, -0.1966, -0.81353, 1.49472, 0.22573, 0.19439, 0.28494,
        -0.60786, 1.17165, 0.62805, 0.52309, 1.76012, 1.76012, 1.76012, 1.76012,
        1.76012,
      ];
      const dtw = new DTW();
      const cost = dtw.compute(s, t);
      cost.should.be.approximately(2.05, 0.01);
      const expectdPath = [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 6],
        [8, 6],
        [9, 6],
        [10, 7],
        [11, 7],
        [12, 8],
        [13, 9],
        [14, 10],
        [15, 11],
        [15, 12],
        [15, 13],
        [15, 14],
        [15, 15],
      ];
      const path = dtw.path();
      path.should.be.eql(expectdPath);
    });

    it("should compute valid cost and path 2 with no locality constraint", () => {
      const s = [1, 1, 2, 3, 2, 0];
      const t = [0, 1, 1, 2, 3, 2, 1];
      const dtw = new DTW();
      const cost = dtw.compute(s, t);
      cost.should.be.approximately(2.0, 0.01);
      const expectedPath = [
        [0, 0],
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
      ];
      const path = dtw.path();
      path.should.be.eql(expectedPath);
    });

    it("should compute valid cost and path 3 with locality constraint", () => {
      const s = [
        0.4125044, 0.1827033, 0.7174426, 0.5938232, 0.4614635, 0.5900535,
        0.8329995, 0.2489138, 0.020492, 0.9778591, 0.5764358, 0.4740868,
        0.4325138, 0.3667226, 0.9619953, 0.457629, 0.2961572, 0.1273494,
        0.1837332, 0.664666, 0.0533731, 0.7448532, 0.2209947, 0.1150104,
        0.0697953, 0.226266, 0.6347957, 0.6412367, 0.0032259, 0.2817307,
        0.95748, 0.5865984, 0.4622795, 0.7135204, 0.692983, 0.7052597,
        0.9643922, 0.1590985, 0.8196736, 0.0813144, 0.5112076, 0.1490992,
        0.6219234, 0.4254558, 0.1539139, 0.6556169, 0.5459852, 0.3675036,
        0.6331521, 0.84436,
      ];
      const t = [
        0.954327, 0.371023, 0.305392, 0.917947, 0.100184, 0.636795, 0.301041,
        0.726715, 0.850064, 0.362574, 0.634449, 0.241995, 0.470016, 0.187247,
        0.080302, 0.164183, 0.337284, 0.721616, 0.228075, 0.049611, 0.401937,
        0.599079, 0.36599, 0.883565, 0.444008, 0.87918, 0.165539, 0.220239,
        0.318087, 0.356081, 0.769599, 0.301509, 0.247175, 0.20182, 0.243712,
        0.531967, 0.68249, 0.028431, 0.627859, 0.350267, 0.751287, 0.658828,
        0.115952, 0.449262, 0.697056, 0.479946, 0.017637, 0.7272, 0.153417,
        0.467764, 0.315294, 0.165611,
      ];
      const options = {
        distanceMetric: "euclidean",
      };
      const dtw = new DTW(options);
      const w = 5;
      const cost = dtw.compute(s, t, w);
      cost.should.be.approximately(10.38, 0.01);
      const expectedPath = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [1, 7],
        [2, 8],
        [3, 9],
        [4, 10],
        [5, 11],
        [6, 12],
        [7, 13],
        [8, 14],
        [9, 15],
        [10, 16],
        [11, 17],
        [12, 18],
        [13, 19],
        [14, 20],
        [15, 21],
        [16, 22],
        [17, 23],
        [18, 24],
        [19, 25],
        [20, 26],
        [21, 27],
        [22, 28],
        [23, 29],
        [24, 30],
        [25, 31],
        [26, 32],
        [27, 33],
        [28, 34],
        [29, 34],
        [30, 35],
        [31, 35],
        [32, 35],
        [33, 36],
        [34, 36],
        [35, 36],
        [36, 36],
        [37, 37],
        [38, 38],
        [39, 39],
        [40, 40],
        [40, 41],
        [41, 42],
        [42, 43],
        [42, 44],
        [43, 45],
        [44, 46],
        [45, 47],
        [46, 48],
        [47, 49],
        [48, 50],
        [49, 51],
      ];
      const path = dtw.path();
      path.should.be.eql(expectedPath);
    });
  });
});
