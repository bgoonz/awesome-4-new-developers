function bubbleSort() {
  delay1 = 0;
  console.log(delay2);
  for (var i = 0; i < N - 1; i++) {
    for (var j = 0; j < N - i - 1; j++) {
      change(divs[j], ARR[j], "yellow"); //Color update

      if (ARR[j] > ARR[j + 1]) {
        change(divs[j], ARR[j], "red"); //Color update
        change(divs[j + 1], ARR[j + 1], "red"); //Color update

        var temp = ARR[j];
        ARR[j] = ARR[j + 1];
        ARR[j + 1] = temp;

        change(divs[j], ARR[j], "red"); //Height update
        change(divs[j + 1], ARR[j + 1], "red"); //Height update
      }
      change(divs[j], ARR[j], "#40E0D0"); //Color update
    }
    change(divs[j], ARR[j], "green"); //Color update
  }
  change(divs[0], ARR[0], "green"); //Color update
}
