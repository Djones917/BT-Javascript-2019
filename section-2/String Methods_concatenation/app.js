const firstName = 'William';
const lastName = 'Johnson';
const age = 40;
const str = 'Hello there my name is Derek';

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

// indexOf() remember -1 means character is not there!
val =firstName.indexOf('2');
val = firstName.lastIndexOf('2');



// charAr()
val = firstName.charAt('2');
// Get last character
val = firstName.charAt(firstName.length -1);

// substring()
val = firstName.substring(0, 4); // this will return Will

// slice()
val = firstName.slice(0, 4); // usually used on arrays
// val = firstName.slice(-3); this will start from the back of the name

// split() 
val = str.split(' ');


// replace()
val = str.replace('Derek', 'Kimberly');




console.log(val);