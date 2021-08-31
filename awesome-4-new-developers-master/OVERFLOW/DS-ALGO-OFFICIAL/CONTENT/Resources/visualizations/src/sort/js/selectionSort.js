function selectionSort() {
  for (var i = 0; i < N - 1; i++) {
    change(divs[i], ARR[i], "red"); //Color update
    index_min = i;

    for (var j = i + 1; j < N; j++) {
      change(divs[j], ARR[j], "yellow"); //Color update

      if (ARR[j] < ARR[index_min]) {
        if (index_min != i) {
          change(divs[index_min], ARR[index_min], "#40E0D0"); //Color update
        }
        index_min = j;
        change(divs[index_min], ARR[index_min], "red"); //Color update
      } else {
        change(divs[j], ARR[j], "#40E0D0"); //Color update
      }
    }

    if (index_min != i) {
      var temp = ARR[index_min];
      ARR[index_min] = ARR[i];
      ARR[i] = temp;

      change(divs[index_min], ARR[index_min], "red"); //Height update
      change(divs[i], ARR[i], "red"); //Height update
      change(divs[index_min], ARR[index_min], "#40E0D0"); //Color update
    }
    change(divs[i], ARR[i], "green"); //Color update
  }
  change(divs[i], ARR[i], "green"); //Color update
}
