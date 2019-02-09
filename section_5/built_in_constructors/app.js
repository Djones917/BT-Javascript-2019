//console.log('connected!');

// String
const name1 = 'Derek';
// console.log(typeof name1); This will return a string!
// This will print yes because name1 is a string the === will catch this!
if(name1 === 'Derek') {
   console.log('Yes');
} else {
    console.log('NO');
}


const name2 = new String('Derek');
// console.log(typeof name2); This will return an object!
// This will print no because name2 is a object the === will catch this but they will not equal.
if(name2 === 'Derek') {
    console.log('Yes');
} else {
    console.log('NO');
}


// Number
const num1 = 5;
const num2 = new Number(5); // object
console.log(num2); // print object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true); // object
console.log(bool2); // print object