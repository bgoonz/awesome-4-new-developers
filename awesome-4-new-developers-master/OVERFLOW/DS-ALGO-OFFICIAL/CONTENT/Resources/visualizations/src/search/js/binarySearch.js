function binarysearch() {
  ARR.sort((a, b) => a - b);
  for (var i = 0; i < N; i++) {
    divs[i].textContent = ARR[i];
  }

  var l = 0;
  var r = ARR.length - 1;
  var inputval = document.getElementById("texty").value;

  while (l <= r) {
    change(divs[l], ARR[l], "yellow");
    change(divs[r], ARR[r], "yellow");

    var mid = Math.floor((l + r) / 2);
    change(divs[mid], ARR[mid], "red");

    if (ARR[mid] == inputval) {
      change(divs[l], ARR[l], "#40E0D0");
      change(divs[r], ARR[r], "#40E0D0");
      change(divs[mid], ARR[mid], "green");
      found(true, mid, inputval);
      return;
    } else if (ARR[mid] < inputval) {
      change(divs[l], ARR[l], "#40E0D0");
      change(divs[r], ARR[r], "#40E0D0");
      l = mid + 1;
    } else {
      change(divs[l], ARR[l], "#40E0D0");
      change(divs[r], ARR[r], "#40E0D0");
      r = mid - 1;
    }
    change(divs[mid], ARR[mid], "#40E0D0");
  }

  found(false, 0, inputval);
  return;
}
