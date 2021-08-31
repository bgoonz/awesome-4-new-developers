function Heap() {
  heap_sort();
}

function swap(i, j) {
  change(divs[i], ARR[i], "red"); //Color update
  change(divs[j], ARR[j], "red"); //Color update

  var temp = ARR[i];
  ARR[i] = ARR[j];
  ARR[j] = temp;

  change(divs[i], ARR[i], "red"); //Height update
  change(divs[j], ARR[j], "red"); //Height update

  change(divs[i], ARR[i], "#40E0D0"); //Color update
  change(divs[j], ARR[j], "#40E0D0"); //Color update
}

function max_heapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && ARR[l] > ARR[largest]) {
    if (largest != i) {
      change(divs[largest], ARR[largest], "#40E0D0"); //Color update
    }

    largest = l;
    change(divs[largest], ARR[largest], "red"); //Color update
  }

  if (r < n && ARR[r] > ARR[largest]) {
    if (largest != i) {
      change(divs[largest], ARR[largest], "#40E0D0"); //Color update
    }

    largest = r;

    change(divs[largest], ARR[largest], "red"); //Color update
  }

  if (largest != i) {
    swap(i, largest);

    max_heapify(n, largest);
  }
}

function heap_sort() {
  for (var i = Math.floor(N / 2) - 1; i >= 0; i--) {
    max_heapify(N, i);
  }

  for (var i = N - 1; i > 0; i--) {
    swap(0, i);
    change(divs[i], ARR[i], "green"); //Color update
    change(divs[i], ARR[i], "yellow"); //Color update

    max_heapify(i, 0);

    change(divs[i], ARR[i], "#40E0D0"); //Color update
    change(divs[i], ARR[i], "green"); //Color update
  }
  change(divs[i], ARR[i], "green"); //Color update
}
