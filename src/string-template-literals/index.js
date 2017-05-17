console.log ("This is an example of template literals.");
let name = 'Bob', city = 'san jose';

console.log("Two variable are initialized and will be used in string literals.", name, city);
let example = `${name} is really cool. He lives in ${city}`;

document.write("<br/> Example of string literals. <br/>"+example);

let multilineExample = `${name} is really cool. 
He lives in ${city}`;

console.log(multilineExample);


