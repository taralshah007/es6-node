console.log('Destructuring arrays.');

document.write("<br/> Please see console to see the destructuring array examples.")
let [a, b] = [1, 2, 3, 4];
console.log("a, b = ",a, b);
//1, 2

let [c,d,e] = [];
console.log("c,d,e= ",c,d,e);
//undefined undefined undefined
{
    let [c,d,e] = [,3,4];
    console.log("c,d,e= ",c,d,e);
    //undefined, 3,4
}

let [x,[y,z]] = [2,[]];
console.log("x, y, z = ",x, y, z);
//2 undefined undefined
//for deep arrays. It works the same way.

{
    let [x,[y,z]] = [2,[3]];
    console.log("x, y, z = ",x, y, z);
    //2 3 undefined
}

let [i,j] = function () {return ['hi','es6']}();
console.log("i, j",i, j);
