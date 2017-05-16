
let x = 15;
var y = 10;

document.write('<br/> Using document.write is not recommended. This is for example purpose only. <br/> ES6: Example of let '+x);

{
    document.write("<br/>" + "changing the value of x in a block using let x =30");
    console.log("changing the value of x in a block using let x =30");
    let x = 30;
    document.write("<br/>" + x);
}
document.write("<br/>" + x);
