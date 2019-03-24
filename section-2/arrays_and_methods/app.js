// Create some arrays
const numbers = [43, 56, 33, 12, 9, 1, 22];
// Second way to create array is the array constructor
const numbers2 = new Array(6, 8, 2, 19, 21, 5, 4);
// Array of strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// Mixed array
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];



let val;



// Get array length
val = numbers.length;
// Check if it is an array
val = Array.isArray(numbers);
// Get a single value in array NOTE: Remember arrays are 0 based!
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index value
val = numbers.indexOf(36);

// Mutating arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();




console.log(numbers);
console.log(val);
