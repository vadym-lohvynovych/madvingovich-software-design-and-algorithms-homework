export class MaxHeap {
  heap: number[];

  constructor(arr: number[]) {
    this.heap = arr.slice();
    for (let i = arr.length; i > 0; i--) {
      this.siftDown(i - 1);
    }
  }

  insert(element: number) {
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  getMax(): number | null {
    return this.heap.length ? this.heap[0] : null;
  }

  extractMax(): number | null {
    let max: number | null = null;
    if (this.heap.length) {
      max = this.heap[0];
      [this.heap[this.heap.length - 1], this.heap[0]] = [this.heap[0], this.heap[this.heap.length - 1]];
      this.heap.splice(-1);
      this.siftDown(0);
    }

    return max;
  }

  updateByIndex(index: number, newValue: number) {
    const old = this.heap[index];
    this.heap[index] = newValue;
    if (newValue > old) {
      this.siftUp(index);
    } else {
      this.siftDown(index);
    }
  }

  update(oldValue: number, newValue: number) {
    const oldValueIndex = this.heap.findIndex((v) => v === oldValue);
    if (oldValueIndex !== -1) {
      this.updateByIndex(oldValueIndex, newValue);
    }
  }

  private siftUp(index: number) {
    let i = index;
    let parent = Math.floor((i - 1) / 2);
    while (i !== 0 && this.heap[i] > this.heap[parent]) {
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }

  private siftDown(index: number) {
    let i = index;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    while (
      (left < this.heap.length && this.heap[i] < this.heap[left]) ||
      (right < this.heap.length && this.heap[i] < this.heap[right])
    ) {
      const biggest = right >= this.heap.length || this.heap[left] > this.heap[right] ? left : right;
      [this.heap[i], this.heap[biggest]] = [this.heap[biggest], this.heap[i]];
      i = biggest;
      left = 2 * i + 1;
      right = 2 * i + 2;
    }
  }
}
