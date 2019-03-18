const firstName = 'William';
const lastName = 'Johnson';
const age = 40;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Derek '; // space at the end
val += 'Jones';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping - you could use double quotes but back splash is better
val = 'That\'s awesome, I can\'t wait!;

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();



// Not very useful but good to know
val = firstName[0];

// indexOf()
val =firstName.indexOf('2');
val = firstName.lastIndexOf('2');

console.log(val);