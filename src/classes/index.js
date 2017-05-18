//This is a simple stack class. It just shows how to declare a class, constructor and methods.
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

//This is a polygon class. Later on we will inherit it and see the reusability.
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration
  showName() {
    console.log( this.name );
  }
}


let p = new Polygon(300, 400);
p.showName();

class Square extends Polygon {
  constructor(length) {
    // The reserved 'super' keyword is for making super-constructor
    // calls and allows access to parent methods.
    //
    // Here, it will call the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  // Getter/setter methods are supported in classes,
  // similar to their ES5 equivalents
  getArea() {
    return this.height * this.width;
  }

  setLength(value) {
    this.height = this.width = value;
  }

}

let s = new Square(5);
console.log("Area of a square.."+ s.getArea());

s.setLength(34);
console.log(s.getArea());


