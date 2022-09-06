import { MaxHeap } from "./Heap";
import { MaxPriorityQueue } from "./MaxPriorityQueue";

const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

const heap = new MaxHeap(arr);

console.log("-->heap", heap);

const queue = [
  {
    data: "1",
    key: 22,
  },
  {
    data: "2",
    key: 33,
  },
  {
    data: "3",
    key: 1,
  },
  {
    data: "4",
    key: 23,
  },
  {
    data: "5",
    key: 8,
  },
  {
    data: "6",
    key: 99,
  },
  {
    data: "7",
    key: 21,
  },
];

const maxPriorityQueue = new MaxPriorityQueue(queue);

console.log("-->queue", maxPriorityQueue);

console.log("-->max", maxPriorityQueue.max());
console.log("-->extract max", maxPriorityQueue.extractMax());
maxPriorityQueue.increaseKey(1, 44);
maxPriorityQueue.insert({ data: "new", key: 599 });
console.log("-->result", maxPriorityQueue);
