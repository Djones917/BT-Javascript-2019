// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// Return object literal NOTE: THIS CAN GET YOU INTO TROUBLE IT WILL RETURN UNDEFINED IT THINKS THE CURLY BRACES ARE PART OF FUNCTION SO WRAP IN PARENTHESIS
// const sayHello = () => ({ msg: 'Hello' });


// look only one parameter (name) does not need parenthesis see line 27
// const sayHello = (name) => console.log(`Hello ${name}`);
// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);