const debug = require("debug")("dtw");
const validate = require("./validate");
const matrix = require("./matrix");
const comparison = require("./comparison");

function validateOptions(options) {
  if (typeof options !== "object") {
    throw new TypeError("Invalid options type: expected an object");
  } else if (
    typeof options.distanceMetric !== "string" &&
    typeof options.distanceFunction !== "function"
  ) {
    throw new TypeError(
      "Invalid distance types: expected a string distance type or a distance function"
    );
  } else if (
    typeof options.distanceMetric === "string" &&
    typeof options.distanceFunction === "function"
  ) {
    throw new Error(
      "Invalid parameters: provide either a distance metric or function but not both"
    );
  }
  if (typeof options.distanceMetric === "string") {
    const normalizedDistanceMetric = options.distanceMetric.toLowerCase();
    if (
      normalizedDistanceMetric !== "manhattan" &&
      normalizedDistanceMetric !== "euclidean" &&
      normalizedDistanceMetric !== "squaredeuclidean"
    ) {
      throw new Error(
        "Invalid parameter value: Unknown distance metric '" +
          options.distanceMetric +
          "'"
      );
    }
  }
}

function retrieveDistanceFunction(distanceMetric) {
  const normalizedDistanceMetric = distanceMetric.toLowerCase();
  let distanceFunction = null;
  if (normalizedDistanceMetric === "manhattan") {
    distanceFunction = require("./distanceFunctions/manhattan").distance;
  } else if (normalizedDistanceMetric === "euclidean") {
    distanceFunction = require("./distanceFunctions/euclidean").distance;
  } else if (normalizedDistanceMetric === "squaredeuclidean") {
    distanceFunction = require("./distanceFunctions/squaredEuclidean").distance;
  }
  return distanceFunction;
}
const DTW = function (options) {
  const state = {
    distanceCostMatrix: null,
  };
  if (typeof options === "undefined") {
    state.distance = require("./distanceFunctions/squaredEuclidean").distance;
  } else {
    validateOptions(options);
    if (typeof options.distanceMetric === "string") {
      state.distance = retrieveDistanceFunction(options.distanceMetric);
    } else if (typeof options.distanceFunction === "function") {
      state.distance = options.distanceFunction;
    }
  }
  this.compute = (firstSequence, secondSequence, window) => {
    let cost = Number.POSITIVE_INFINITY;
    if (typeof window === "undefined") {
      cost = computeOptimalPath(firstSequence, secondSequence, state);
    } else if (typeof window === "number") {
      cost = computeOptimalPathWithWindow(
        firstSequence,
        secondSequence,
        window,
        state
      );
    } else {
      throw new TypeError("Invalid window parameter type: expected a number");
    }
    return cost;
  };
  this.path = () => {
    let path = null;
    if (state.distanceCostMatrix instanceof Array) {
      path = retrieveOptimalPath(state);
    }
    return path;
  };
};

function validateComputeParameters(s, t) {
  validate.sequence(s, "firstSequence");
  validate.sequence(t, "secondSequence");
}

function computeOptimalPath(s, t, state) {
  debug("> computeOptimalPath");
  validateComputeParameters(s, t);
  const start = new Date().getTime();
  state.m = s.length;
  state.n = t.length;
  const distanceCostMatrix = matrix.create(
    state.m,
    state.n,
    Number.POSITIVE_INFINITY
  );
  distanceCostMatrix[0][0] = state.distance(s[0], t[0]);
  for (var rowIndex = 1; rowIndex < state.m; rowIndex++) {
    var cost = state.distance(s[rowIndex], t[0]);
    distanceCostMatrix[rowIndex][0] =
      cost + distanceCostMatrix[rowIndex - 1][0];
  }
  for (var columnIndex = 1; columnIndex < state.n; columnIndex++) {
    var cost = state.distance(s[0], t[columnIndex]);
    distanceCostMatrix[0][columnIndex] =
      cost + distanceCostMatrix[0][columnIndex - 1];
  }
  for (var rowIndex = 1; rowIndex < state.m; rowIndex++) {
    for (var columnIndex = 1; columnIndex < state.n; columnIndex++) {
      var cost = state.distance(s[rowIndex], t[columnIndex]);
      distanceCostMatrix[rowIndex][columnIndex] =
        cost +
        Math.min(
          distanceCostMatrix[rowIndex - 1][columnIndex],
          distanceCostMatrix[rowIndex][columnIndex - 1],
          distanceCostMatrix[rowIndex - 1][columnIndex - 1]
        );
    }
  }
  const end = new Date().getTime();
  const time = end - start;
  debug("< computeOptimalPath (" + time + " ms)");
  state.distanceCostMatrix = distanceCostMatrix;
  state.similarity = distanceCostMatrix[state.m - 1][state.n - 1];
  return state.similarity;
}

function computeOptimalPathWithWindow(s, t, w, state) {
  debug("> computeOptimalPathWithWindow");
  validateComputeParameters(s, t);
  const start = new Date().getTime();
  state.m = s.length;
  state.n = t.length;
  const window = Math.max(w, Math.abs(s.length - t.length));
  let distanceCostMatrix = matrix.create(
    state.m + 1,
    state.n + 1,
    Number.POSITIVE_INFINITY
  );
  distanceCostMatrix[0][0] = 0;
  for (let rowIndex = 1; rowIndex <= state.m; rowIndex++) {
    for (
      let columnIndex = Math.max(1, rowIndex - window);
      columnIndex <= Math.min(state.n, rowIndex + window);
      columnIndex++
    ) {
      const cost = state.distance(s[rowIndex - 1], t[columnIndex - 1]);
      distanceCostMatrix[rowIndex][columnIndex] =
        cost +
        Math.min(
          distanceCostMatrix[rowIndex - 1][columnIndex],
          distanceCostMatrix[rowIndex][columnIndex - 1],
          distanceCostMatrix[rowIndex - 1][columnIndex - 1]
        );
    }
  }
  const end = new Date().getTime();
  const time = end - start;
  debug("< computeOptimalPathWithWindow (" + time + " ms)");
  distanceCostMatrix.shift();
  distanceCostMatrix = distanceCostMatrix.map((row) => {
    return row.slice(1, row.length);
  });
  state.distanceCostMatrix = distanceCostMatrix;
  state.similarity = distanceCostMatrix[state.m - 1][state.n - 1];
  return state.similarity;
}

function retrieveOptimalPath(state) {
  debug("> retrieveOptimalPath");
  const start = new Date().getTime();
  let rowIndex = state.m - 1;
  let columnIndex = state.n - 1;
  const path = [[rowIndex, columnIndex]];
  const epsilon = 1e-14;
  while (rowIndex > 0 || columnIndex > 0) {
    if (rowIndex > 0 && columnIndex > 0) {
      const min = Math.min(
        state.distanceCostMatrix[rowIndex - 1][columnIndex],
        state.distanceCostMatrix[rowIndex][columnIndex - 1],
        state.distanceCostMatrix[rowIndex - 1][columnIndex - 1]
      );
      if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex - 1][columnIndex - 1],
          epsilon
        )
      ) {
        rowIndex--;
        columnIndex--;
      } else if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex - 1][columnIndex],
          epsilon
        )
      ) {
        rowIndex--;
      } else if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex][columnIndex - 1],
          epsilon
        )
      ) {
        columnIndex--;
      }
    } else if (rowIndex > 0 && columnIndex === 0) {
      rowIndex--;
    } else if (rowIndex === 0 && columnIndex > 0) {
      columnIndex--;
    }
    path.push([rowIndex, columnIndex]);
  }
  const end = new Date().getTime();
  const time = end - start;
  debug("< retrieveOptimalPath (" + time + " ms)");
  return path.reverse();
}
module.exports = DTW;
