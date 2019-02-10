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



// Function
const getSum1 = function(x,y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1'); 
    
console.log(getSum1(1,1));



// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"}); // object
console.log(john2); // Prints object



