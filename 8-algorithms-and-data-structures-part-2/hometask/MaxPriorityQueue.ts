import { MaxHeap } from "./Heap";

export type QueueItem = {
  data: string;
  key: number;
};

export class MaxPriorityQueue {
  data: QueueItem[];
  queue: MaxHeap;

  constructor(arr: QueueItem[]) {
    this.data = arr;
    this.queue = new MaxHeap(arr.map((x) => x.key));
  }

  insert(el: number) {
    this.queue.insert(el);
  }

  max(): QueueItem | null {
    return this.getDataItem(this.queue.getMax());
  }

  extractMax(): QueueItem | null {
    let maxQueueItem: QueueItem | null = null;
    const max = this.queue.extractMax();
    if (max) {
      maxQueueItem = this.getDataItem(max);
      this.data = this.data.filter((x) => x.key !== max);
    }

    return maxQueueItem;
  }

  increaseKey(oldValue: number, newValue: number) {
    this.queue.update(oldValue, newValue);
  }

  private getDataItem(key: number | null): QueueItem | null {
    return key ? this.data.find((x) => x.key === key)! : null;
  }
}
