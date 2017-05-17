This tutorial is for es 6 Destructuring of Array and object.

Basically, Destructuring is an expression that allows to extract values from Array/Object/Map/Set. In sort any iterable collection.

Let's tryout some examples.

For Array: 
```
let [a, b] = [1, 2, 3, 4];
console.log("a, b = ",a, b);
//1, 2

```
Destructuring is fail safe as well.

```
let [c,d,e] = [];
console.log("c,d,e= ",c,d,e);
//undefined undefined undefined
```

You can select/drop particular values too.

```
let [c,d,e] = [,3,4];
console.log("c,d,e= ",c,d,e);
//undefined, 3,4
```
```
let [x,[y,z]] = [2,[]];
console.log("x, y, z = ",x, y, z);
//2 undefined undefined
//for deep arrays. It works the same way.
```

```
let [x,[y,z]] = [2,[3]];
console.log("x, y, z = ",x, y, z);
//2 3 undefined
```

```
let [i,j] = function () {return ['hi','es6']}();
console.log("i, j",i, j);
```

Now let's see how it goes for javascript Object.

```
let person = {
    firstName : 'foo',
    lastName: 'bar',
    age: 30,
}

let employee = person;
console.log(employee.firstName, employee.lastName, employee.age);
//foo bar 30
```

```
let employee1 = person;
console.log(employee1.salary);
//undefined 
```




