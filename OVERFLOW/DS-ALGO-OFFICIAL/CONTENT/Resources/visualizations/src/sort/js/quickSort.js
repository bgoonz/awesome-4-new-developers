function Quick() {
  quick_sort(0, N - 1);
}

function quick_partition(start, end) {
  var i = start + 1;
  var piv = ARR[start]; //make the first element as pivot element.
  change(divs[start], ARR[start], "yellow"); //Color update

  for (var j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (ARR[j] < piv) {
      change(divs[j], ARR[j], "yellow"); //Color update

      change(divs[i], ARR[i], "red"); //Color update
      change(divs[j], ARR[j], "red"); //Color update

      var temp = ARR[i];
      ARR[i] = ARR[j];
      ARR[j] = temp;

      change(divs[i], ARR[i], "red"); //Height update
      change(divs[j], ARR[j], "red"); //Height update

      change(divs[i], ARR[i], "#40E0D0"); //Height update
      change(divs[j], ARR[j], "#40E0D0"); //Height update

      ++i;
    }
  }

  change(divs[start], ARR[start], "red"); //Color update
  change(divs[i - 1], ARR[i - 1], "red"); //Color update

  var temp = ARR[start]; //put the pivot element in its proper place.
  ARR[start] = ARR[i - 1];
  ARR[i - 1] = temp;

  change(divs[start], ARR[start], "red"); //Height update
  change(divs[i - 1], ARR[i - 1], "red"); //Height update

  for (var t = start; t <= i; t++) {
    change(divs[t], ARR[t], "green"); //Color update
  }

  return i - 1; //return the position of the pivot
}

function quick_sort(start, end) {
  if (start < end) {
    //stores the position of pivot element
    var piv_pos = quick_partition(start, end);
    quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
    quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
  }
}
