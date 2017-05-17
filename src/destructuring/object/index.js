console.log('Destructuring arrays.');

document.write("<br/> Please see console to see the destructuring javascript object examples.")
let person = {
    firstName : 'foo',
    lastName: 'bar',
    age: 30,
}

let employee = person;
console.log(employee.firstName, employee.lastName, employee.age);
//foo bar 30

let employee1 = person;
console.log(employee1.salary);
//undefined 
