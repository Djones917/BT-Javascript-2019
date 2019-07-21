//PART ONE
// REGULAR EXPRESSIONS = A PATTERN OF CHARACTERS

// REMEMBER forward slashes /Hello/ is an expression
let re;
re = /Hello/;

// console.log(re); // returns /Hello
// But if you do source - it will disregard the forward slashes and return Hello
// console.log(re.source); // returns Hello





// FUNCTIONS THAT ARE USED TO EVALUATE EXPRESSIONS
// exec() - Returns a result in array or null
const result = re.exec('hello world');
console.log(result);

