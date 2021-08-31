function linearsearch() {
  var inputval = document.getElementById("texty").value;

  for (var i = 0; i < N; ++i) {
    change(divs[i], ARR[i], "red");

    if (ARR[i] == inputval) {
      change(divs[i], ARR[i], "green");
      found(true, i, inputval);
      return;
    }

    change(divs[i], ARR[i], "#40E0D0");
  }

  found(false, i, inputval);
}
