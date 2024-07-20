// Create a Stack that contains the standard push and pop methods. 
// It should also contain another method min that returns the minimum number in the Stack.

class MinStack {
    constructor() {
      this.stack = []; // Main stack to store all elements
      this.minStack = []; // Auxiliary stack to store the minimum elements
    }
  
    // Method to add an element to the stack
    push(value) {
      // Add the value to the main stack
      this.stack.push(value);
  
      // If the minStack is empty or the value is less than or equal to the current minimum,
      // add the value to the minStack
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    // Method to remove and return the top element from the stack
    pop() {
      // If the main stack is empty, return null
      if (this.stack.length === 0) {
        return null;
      }
  
      // Remove the top element from the main stack
      const value = this.stack.pop();
  
      // If the removed element is the same as the top element in the minStack,
      // remove the top element from the minStack as well
      if (value === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      // Return the removed element
      return value;
    }
  
    // Method to get the minimum element in the stack
    min() {
      // If the minStack is empty, return null
      if (this.minStack.length === 0) {
        return null;
      }
  
      // Return the top element of the minStack, which is the current minimum
      return this.minStack[this.minStack.length - 1];
    }
  
    // Utility method to display the current state of the stack and minStack
    display() {
      console.log('Stack:', this.stack);
      console.log('MinStack:', this.minStack);
    }
  }
  
  // Example usage:
  const stack = new MinStack();
  
  stack.push(3);
  stack.push(5);
  console.log(stack.min()); // => 3
  
  stack.pop();
  stack.push(7);
  console.log(stack.min()); // => 3
  
  stack.push(2);
  console.log(stack.min()); // => 2
  
  stack.pop();
  console.log(stack.min()); // => 3
  