// Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Method to add an element to the top of the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot perform pop operation.";
    }
    return this.stackArray.pop();
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }
}

// Usage example
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.pop()); // Output: 30
console.log(myStack.isEmpty()); // Output: false
console.log(myStack.pop()); // Output: 20
console.log(myStack.pop()); // Output: 10
console.log(myStack.pop()); // Output: Stack is empty. Cannot perform pop operation.
console.log(myStack.isEmpty()); // Output: true
