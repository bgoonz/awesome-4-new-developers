function validateSequence(sequence, sequenceParameterName) {
  if (!(sequence instanceof Array)) {
    throw new TypeError(
      "Invalid sequence '" + sequenceParameterName + "' type: expected an array"
    );
  }

  if (sequence.length < 1) {
    throw new Error(
      "Invalid number of sequence data points for '" +
        sequenceParameterName +
        "': expected at least one"
    );
  }

  if (typeof sequence[0] !== "number") {
    throw new TypeError(
      "Invalid data points types for sequence '" +
        sequenceParameterName +
        "': expected a number"
    );
  }
}

module.exports = {
  sequence: validateSequence,
};
