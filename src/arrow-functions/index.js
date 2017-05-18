document.write("<br/> Please see console for arrow functions examples.")

let numbers = [5,6,3,9,34,65,88,11,55];
console.log("Numbers:"+ numbers)
let numGt50 = numbers.filter((number)=>number>50);
console.log("Numbers after filtering ");
console.log(numGt50);

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
window.setTimeout(() => {
  console.log("Counter using arrow functions. "+counterUsingES6.seconds);
}, 5000);



