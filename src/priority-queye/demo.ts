import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
  ICompare,
  IGetCompareValue,
} from "@datastructures-js/priority-queue";

const numbers = [3, -2, 5, 0, -1, -5, 4];

const minpriotityQue = new MinPriorityQueue();
for (const number of numbers) {
  minpriotityQue.enqueue(number);
}
console.log("Min que");
console.log(minpriotityQue.front());
console.log(minpriotityQue.back());
console.log(minpriotityQue.dequeue());
console.log(minpriotityQue.isEmpty());

// ---------
console.log("Max que");

const maxPriorityQue = new MaxPriorityQueue();
for (const number of numbers) {
  maxPriorityQue.enqueue(number);
}

console.log(maxPriorityQue.front());
console.log(maxPriorityQue.back());
console.log(maxPriorityQue.dequeue());
console.log(maxPriorityQue.isEmpty());
console.log("prioty que");

const prioty = new PriorityQueue((a: number, b: number) => {
  return a - b;
});
for (const number of numbers) {
  prioty.enqueue(number);
}

console.log(prioty.front());
console.log(prioty.back());
console.log(prioty.dequeue());
console.log(prioty.isEmpty());

class Num {
  constructor(public num1: number, public num2: number) {}
}

const withObject = [new Num(1, 4), new Num(2, 2), new Num(4, 6)];

const minPriotyQue1 = new MinPriorityQueue((obj1: Num) => {
  return obj1.num1;
});

for (const element of withObject) {
  minPriotyQue1.enqueue(element);
}

console.log(minPriotyQue1.dequeue());
