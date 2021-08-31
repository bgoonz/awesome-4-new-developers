function Merge() {
  merge_partition(0, N - 1);
}

function merge_sort(start, mid, end) {
  var p = start,
    q = mid + 1;

  var Arr = [],
    k = 0;

  for (var i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = ARR[q++];
      change(divs[q - 1], ARR[q - 1], "red"); //Color update
    } else if (q > end) {
      Arr[k++] = ARR[p++];
      change(divs[p - 1], ARR[p - 1], "red"); //Color update
    } else if (ARR[p] < ARR[q]) {
      Arr[k++] = ARR[p++];
      change(divs[p - 1], ARR[p - 1], "red"); //Color update
    } else {
      Arr[k++] = ARR[q++];
      change(divs[q - 1], ARR[q - 1], "red"); //Color update
    }
  }

  for (var t = 0; t < k; t++) {
    ARR[start++] = Arr[t];
    change(divs[start - 1], ARR[start - 1], "green"); //Color update
  }
}

function merge_partition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    change(divs[mid], ARR[mid], "yellow"); //Color update

    merge_partition(start, mid);
    merge_partition(mid + 1, end);

    merge_sort(start, mid, end);
  }
}
