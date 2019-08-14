// Destructuring Assignment - This is just general

let a, b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]; // The three dots is called the Spread Operator! So rest is a varibale and with ... it will assign the 300, 400, 500 to the variable rest!
// console.log(a); // a = 100 and b = 200
console.log(rest); // Prints an array of 300, 400, 500 if you put a c after b above it would be 400, 500


({ a, b} = { a: 100, b: 200, c: 300, d: 400 e: 500 });
console.log(a, b); // 100 and 200
({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400 e: 500 });
console.log(rest); // 300 - 500




// Array Destructuring 
// Example 1
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3); // prints John Beth Mike




// Example 2 - Parse array returned from a function

// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3); // prints John Beth Mike