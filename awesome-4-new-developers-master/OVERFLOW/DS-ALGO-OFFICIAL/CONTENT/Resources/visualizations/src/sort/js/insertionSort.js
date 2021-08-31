function insertionSort() {
  for (var j = 0; j < N; j++) {
    change(divs[j], ARR[j], "yellow"); //Color update

    var key = ARR[j];
    var i = j - 1;

    while (i >= 0 && ARR[i] > key) {
      change(divs[i], ARR[i], "red"); //Color update
      change(divs[i + 1], ARR[i + 1], "red"); //Color update

      ARR[i + 1] = ARR[i];

      change(divs[i], ARR[i], "red"); //Height update
      change(divs[i + 1], ARR[i + 1], "red"); //Height update

      change(divs[i], ARR[i], "#40E0D0"); //Color update

      if (i == j - 1) {
        change(divs[i + 1], ARR[i + 1], "yellow"); //Color update
      } else {
        change(divs[i + 1], ARR[i + 1], "#40E0D0"); //Color update
      }
      --i;
    }
    ARR[i + 1] = key;

    for (var t = 0; t < j; t++) {
      change(divs[t], ARR[t], "green"); //Color update
    }
  }
  change(divs[j - 1], ARR[j - 1], "green"); //Color update
}
