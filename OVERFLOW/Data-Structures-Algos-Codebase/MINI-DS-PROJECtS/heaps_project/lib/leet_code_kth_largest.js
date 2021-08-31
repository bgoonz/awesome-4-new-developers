var findKthLargest = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    heapify(nums, nums.length, i);
  }

  for (
    let endOfHeap = nums.length - 1;
    endOfHeap >= nums.length - k;
    endOfHeap--
  ) {
    [nums[0], nums[endOfHeap]] = [nums[endOfHeap], nums[0]];
    heapify(nums, endOfHeap, 0);
  }

  return nums[nums.length - k];
};

function heapify(array, n, i) {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > leftVal && array[i] > rightVal) return;

  const swapIdx = leftVal < rightVal ? rightIdx : leftIdx;

  [array[i], array[swapIdx]] = [array[swapIdx], array[i]];

  heapify(array, n, swapIdx);
}
