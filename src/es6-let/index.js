document.write("<br/>");

let x = 15;
var y = 10;
document.write('ES6: Example of let ');
document.write(x);

{
    document.write("<br/>" + "changing the value of x in a block using let x =30");
    let x = 30;
    document.write("<br/>" + x);
}
document.write("<br/>" + x);
