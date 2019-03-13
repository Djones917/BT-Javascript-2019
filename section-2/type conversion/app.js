//console.log('Connected');

let val;

// Number to string
// val = 5;  This will not work with length
val = String(5); // This will turn your number to a string and length will work! Black print is a string in the console, Blue is a number!
val = String(4 + 4); // This will override the above val and print 1 on .length because 4+4=8

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // This will kick back undefined length only works on a string


