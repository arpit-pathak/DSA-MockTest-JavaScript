// Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.

class Queue {
  constructor() {
    this.queueArray = [];
  }

  // Method to add an element to the rear of the queue
  enqueue(element) {
    this.queueArray.push(element);
  }

  // Method to remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty. Cannot perform dequeue operation.";
    }
    return this.queueArray.shift();
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.queueArray.length === 0;
  }
}

// Usage example
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.isEmpty()); // Output: false
console.log(myQueue.dequeue()); // Output: 20
console.log(myQueue.dequeue()); // Output: 30
console.log(myQueue.dequeue()); // Output: Queue is empty. Cannot perform dequeue operation.
console.log(myQueue.isEmpty()); // Output: true
