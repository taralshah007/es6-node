Arrow functions are basically function without name. An arrow function expression is shorter than a method function expression.
An arrow function doesn't bind with this, arguments.

Basic syntax
```
(param/s) => {statement/s}
```
If you have an expression to return then it's even easier.

```
(param/s) => {return expression}

or 

(param/s) => expression;

```

In ES5, `bind()` or var that = this; are necessary as functions
create their own `this`. We need to store the parent `this` in
a variable that can be referenced in the callback or take care
of binding ourselves.

But in ES6 Arrows instead bind `this` to the immediate enclosing
lexical scope.

```
function CounterInES5() {
  this.seconds = 0;
  //var that = this;
  window.setInterval(function() {
    //that.seconds++;
    this.seconds++;
  }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

var counterUsingES5 = new CounterInES5();
window.setTimeout(function() {
  console.log(counterUsingES5.seconds);
}, 5000);

function CounterInES6() {
  this.seconds = 0;
  window.setInterval(() => {
    this.seconds++;
  }, 1000); 
}

var counterUsingES6 = new CounterInES6();
window.setTimeout(function() {
  console.log("Counter using arrow functions. "+counterUsingES6.seconds);
}, 5000);

```