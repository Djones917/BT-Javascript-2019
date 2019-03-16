//console.log('Connected');

// Converting to a string
let val;

// Number to string
// val = 5;  This will not work with length
val = String(5); // This will turn your number to a string and length will work! Black print is a string in the console, Blue is a number!
val = String(4 + 4); // This will override the above val and print 1 on .length because 4+4=8

// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);


// toString() method another way to convert things to a string!!!
val = (5).toString();
val = (true).toString();


// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // This will kick back undefined length only works on a string







// Sting to number
let val1;
val1 = Number('5');
// val1 = Number(true); This will return 1
// val1 = Number(false); This will return 0
// val1 = Number(null); This will return 0
// val1 = Number('Hello'); This will return NaN - not a number!
// val1 = Number([1,2,3,4]); This will return NaN - not a number!

val1 = parseInt('100.30'); // This will give you the number 100 because it parses as an interger
val1 = parseFloat('100.30'); // This will give you the number 100.3 one decimal as a float but only because it's a zero! if it was 100.31 that what it would print!

console.log(val1);
console.log(typeof val1);
console.log(val.toFixed()); // For numbers only to specify decimal places
// console.log(val.toFixed(2)); this would give you 5.00