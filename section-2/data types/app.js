//console.log('connected!');

// Primitive

// String
const name = 'John Doe';
// Number
const age = 7;
// Boolean
const lovesMovies = true;
console.log(typeof lovesMovies);

// Null
// typeof will give you an object
const car = null;
console.log(typeof car); // object this is kind of a bug in javascript but it still is a primitive type!


// Undefined
let test;
console.log(typeof test); // Undefined


// Symbol ES6
const sym = Symbol();
console.log(sym);




// Reference Types - These will all come back as objects
// Array
const hobbies = ['Movies', 'Music'];

console.log(typeof hobbies); // This will return an object

// Object Literal
const address = {
    city: 'Salt Lake City',
    state: 'Utah'
}

console.log(typeof address); // This will return an object

const today = new Date();
console.log(today);
console.log(typeof today); // This will return an object


