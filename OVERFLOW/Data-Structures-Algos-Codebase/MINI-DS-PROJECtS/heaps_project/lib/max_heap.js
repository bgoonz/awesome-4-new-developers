class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    const parentIdx = this.getParent(idx);
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [
        this.array[parentIdx],
        this.array[idx],
      ];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    const arr = this.array;
    const leftIdx = this.getLeftChild(idx);
    const rightIdx = this.getRightChild(idx);
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (arr[idx] > leftVal && arr[idx] > rightVal) return;

    const swapIdx = leftVal < rightVal ? rightIdx : leftIdx;

    [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
    this.siftDown(swapIdx);
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();

    const max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }
}

module.exports = {
  MaxHeap,
};
