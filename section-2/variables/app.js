// var, let, const

// Remember you can do this with var and let
var name = 'Boo Who';
console.log(name); // will print Boo who
name = 'Jane Smith';
console.log(name); // will print Jane Smith


// Init var - example an if statement!
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Letters, Numbers, _, $ - you might use $ with jquery other than that pass on it
// Can not start with a number


// Multi word variables - camel case
// var firstName = 'John'; 
// var first_name = 'Sarah'; // Underscore - you will see this most likely in php
// var FirstName = 'Bob'; // Pascal Case - it's the same as camel case except the first letter is capitalized
// var firstname;


// Let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'David Smith';
// console.log(name);


// Const
//const name = 'John';
//console.log(name);
// YOU CAN'T REASSIGN A VALUE WITH CONST
//name = 'Danny';
//console.log(name);
// YOU HAVE TO GIVE CONST A VALUE
// const greeting;


// You can't reassign with const because it's set but you can still update!
const person = {
    name: 'John',
    age: 30
}

person.name = 'David Smith';
person.age = 45;


console.log(person);
console.log(age);

// It's the same with arrays
const numbers = [1,2,3,4,5];
numbers.push(6);
// You can't reassing with const
// numbers = [1,2,3,4,5,6]l
console.log(numbers);

