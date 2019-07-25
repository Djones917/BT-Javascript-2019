//PART ONE - Evaluation Functions
// REGULAR EXPRESSIONS = A PATTERN OF CHARACTERS

// REMEMBER forward slashes /Hello/ is an expression
let re;
re = /hello/i; // i equal case insensitive in the test()
// re = /hello/g; // Global search

// console.log(re); // returns /Hello
// But if you do source - it will disregard the forward slashes and return Hello
// console.log(re.source); // returns Hello





// FUNCTIONS THAT ARE USED TO EVALUATE EXPRESSIONS

// exec() - Returns a result in array or null if no match NOTE: this will give an index so it could start with 0
// const result = re.exec('hello world'); // INDEX: 0
// const result = re.exec('Derek hello world'); // INDEX: 6 because it sees my name and then finds h 
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);





// test() - Returns true or false
// const result = re.test('Hello'); // this will return false because of uppercase H NOTE: you can add i to the end /hello/i to make it insensitive
// console.log(result);





// match() - Return result array or null NOTE: This one kind of works backwards/!?!?!?
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);





// search() - Returns the index of the first match if not found returns a -1
// const str = 'Hello There'; // This will return index of 0 but it would return something different 'Derek Hello there' would return 6
// const result = str.search(str);
// console.log(result);





// replace() - Returns new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);








