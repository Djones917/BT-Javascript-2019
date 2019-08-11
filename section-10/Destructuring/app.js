// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]; // The three dots is called the Spread Operator! So rest is a varibale and with ... it will assign the 300, 400, 500 to the variable rest!
// console.log(a); // a = 100 and b = 200
console.log(rest); // Prints an array of 300, 400, 500


