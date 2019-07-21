//PART ONE
// REGULAR EXPRESSIONS = A PATTERN OF CHARACTERS

// REMEMBER forward slashes /Hello/ is an expression
let re;
re = /hello/;

// console.log(re); // returns /Hello
// But if you do source - it will disregard the forward slashes and return Hello
// console.log(re.source); // returns Hello





// FUNCTIONS THAT ARE USED TO EVALUATE EXPRESSIONS
// exec() - Returns a result in array or null if no match NOTE: this will give an index so it could start with 0
//const result = re.exec('hello world'); // INDEX: 0
const result = re.exec('Derek hello world'); // INDEX: 6 because it sees my name and then finds h 

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);





