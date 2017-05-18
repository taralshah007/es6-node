ES6 Classes formalize the common JavaScript pattern of simulating class-like inheritance hierarchies using functions and prototypes. They are effectively simple sugaring over prototype-based OO, offering a convenient declarative form for class patterns which encourage inter operability.

Classes support prototype-based inheritance, constructors, super calls, instance and static methods.

From MDN, 

JavaScript classes introduced in ECMAScript 2015 are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.

```
class Stack {
    
    constructor () {
        this.arr = new Array();
    }

    top(){
        return this.arr[this.arr.length-1];
    }
    pop() {
        this.arr.pop();
    }
    push(arg) {
        this.arr.push(arg);
    }
}

let stack = new Stack();
stack.push(5);
stack.push(15);
stack.push(25);

console.log("Top element in stack "+stack.top());
stack.pop();
console.log("Top element in stack "+stack.top());
```